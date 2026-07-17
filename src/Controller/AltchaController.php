<?php declare(strict_types=1);

namespace Frosh\AltchaCaptcha\Controller;

use AltchaOrg\Altcha\Algorithm\Pbkdf2;
use AltchaOrg\Altcha\Altcha;
use AltchaOrg\Altcha\CreateChallengeOptions;
use Frosh\AltchaCaptcha\Storefront\Framework\AltchaCaptcha;
use Psr\Log\LoggerInterface;
use Shopware\Core\System\SystemConfig\SystemConfigService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\DependencyInjection\Attribute\Autowire;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route(defaults: ['_routeScope' => ['storefront']])]
class AltchaController extends AbstractController
{
    public function __construct(
        private readonly SystemConfigService $systemConfigService,
        #[Autowire(service: 'monolog.logger.frosh_altcha_captcha')]
        private readonly LoggerInterface $logger,
    ) {
    }

    #[Route('/altcha/challenge', name: 'widgets.altcha.challenge')]
    public function getCaptcha(): JsonResponse
    {
        try {
            $secretKey = $this->systemConfigService->getString(
                AltchaCaptcha::CONFIG_PATH . '.' . AltchaCaptcha::CONFIG_FIELD_SECRET
            );

            $challengeOptions = new CreateChallengeOptions(
                algorithm: new Pbkdf2(),
                cost: 5000,
                counter: \random_int(1000, 1200),
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
