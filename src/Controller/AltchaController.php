<?php declare(strict_types=1);

namespace Frosh\AltchaCaptcha\Controller;

use AltchaOrg\Altcha\Algorithm\Pbkdf2;
use AltchaOrg\Altcha\Altcha;
use AltchaOrg\Altcha\CreateChallengeOptions;
use Frosh\AltchaCaptcha\Storefront\Framework\AltchaCaptcha;
use Psr\Log\LoggerInterface;
use Shopware\Core\Framework\RateLimiter\Exception\RateLimitExceededException;
use Shopware\Core\Framework\RateLimiter\RateLimiter;
use Shopware\Core\System\SystemConfig\SystemConfigService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\DependencyInjection\Attribute\Autowire;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route(defaults: ['_routeScope' => ['storefront']])]
class AltchaController extends AbstractController
{
    public const RATE_LIMITER_NAME = 'frosh_altcha_challenge';

    public function __construct(
        private readonly SystemConfigService $systemConfigService,
        #[Autowire(service: 'monolog.logger.frosh_altcha_captcha')]
        private readonly LoggerInterface $logger,
        private readonly RateLimiter $rateLimiter,
    ) {
    }

    #[Route('/altcha/challenge', name: 'widgets.altcha.challenge')]
    public function getCaptcha(Request $request): JsonResponse
    {
        // Creating a challenge costs one key derivation on the server, so limit how often a client can request one.
        try {
            $this->rateLimiter->ensureAccepted(self::RATE_LIMITER_NAME, (string) $request->getClientIp());
        } catch (RateLimitExceededException $e) {
            return new JsonResponse(
                'HTTP_TOO_MANY_REQUESTS',
                Response::HTTP_TOO_MANY_REQUESTS,
                ['Retry-After' => (string) max(1, $e->getWaitTime())],
            );
        }

        try {
            $secretKey = $this->systemConfigService->getString(
                AltchaCaptcha::CONFIG_PATH . '.' . AltchaCaptcha::CONFIG_FIELD_SECRET
            );

            $challengeOptions = new CreateChallengeOptions(
                algorithm: new Pbkdf2(),
                cost: 10000,
                counter: \random_int(1, 1200),
                expiresAt: new \DateTimeImmutable('+5 minutes')
            );

            $challenge = (new Altcha($secretKey))->createChallenge($challengeOptions);

            return new JsonResponse($challenge);
        } catch (\Throwable $e) {
            $this->logger->error('Altcha captcha challenge', [
                'exception' => $e,
            ]);

            return new JsonResponse('HTTP_INTERNAL_SERVER_ERROR', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
