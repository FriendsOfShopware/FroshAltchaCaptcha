<?php declare(strict_types=1);

namespace Frosh\AltchaCaptcha\Controller;

use AltchaOrg\Altcha\Algorithm\Pbkdf2;
use AltchaOrg\Altcha\Altcha;
use AltchaOrg\Altcha\CreateChallengeOptions;
use Frosh\AltchaCaptcha\Storefront\Framework\AltchaCaptcha;
use Shopware\Core\System\SystemConfig\SystemConfigService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route(defaults: ['_routeScope' => ['storefront']])]
class AltchaController extends AbstractController
{
    public function __construct(
        private readonly SystemConfigService $systemConfigService,
    ) {
    }

    #[Route('/altcha/challenge', name: 'widgets.altcha.challenge')]
    public function getCaptcha(): JsonResponse
    {
        try {
            $secretKey = $this->systemConfigService->getString(AltchaCaptcha::CONFIG_PATH . '.' . AltchaCaptcha::CONFIG_FIELD_SECRET);
            $challengeOptions = new CreateChallengeOptions(
                algorithm: new Pbkdf2(),
                cost: 5000,
                counter: \random_int(5000, 10000),
                expiresAt: new \DateTimeImmutable('+5 minutes')
            );

            // TODO: add hmacKeySignatureSecret
            $challenge = (new Altcha($secretKey))->createChallenge($challengeOptions);

            return new JsonResponse($challenge);
        } catch (\Throwable $e) {
            return new JsonResponse($e->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
