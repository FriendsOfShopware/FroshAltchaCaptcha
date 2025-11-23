<?php declare(strict_types=1);

namespace Frosh\AltchaCaptcha\Controller;

use AltchaOrg\Altcha\Altcha;
use AltchaOrg\Altcha\ChallengeOptions;
use Shopware\Core\System\SystemConfig\SystemConfigService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Frosh\AltchaCaptcha\Storefront\Framework\AltchaCaptcha;

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
            $challengeOptions = new ChallengeOptions(expires: (new \DateTimeImmutable())->add(new \DateInterval('PT1M')));
            $challenge = (new Altcha($secretKey))->createChallenge($challengeOptions);

            return new JsonResponse($challenge);
        } catch (\Throwable $e) {
            return new JsonResponse($e->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
