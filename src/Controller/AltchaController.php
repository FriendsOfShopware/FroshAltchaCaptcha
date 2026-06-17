<?php declare(strict_types=1);

namespace Frosh\AltchaCaptcha\Controller;

use AltchaOrg\Altcha\Algorithm\Pbkdf2;
use AltchaOrg\Altcha\Altcha;
use AltchaOrg\Altcha\CreateChallengeOptions;
use Frosh\AltchaCaptcha\Storefront\Framework\AltchaCaptcha;
use Shopware\Core\Checkout\Customer\CustomerEntity;
use Shopware\Core\System\SalesChannel\SalesChannelContext;
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
    public function getCaptcha(SalesChannelContext $context): JsonResponse
    {
        try {
            $secretKey = $this->systemConfigService->getString(
                AltchaCaptcha::CONFIG_PATH . '.' . AltchaCaptcha::CONFIG_FIELD_SECRET
            );

            $isWhitelisted = $this->systemConfigService->getBool(
                AltchaCaptcha::CONFIG_PATH . '.whitelistCustomers',
                $context->getSalesChannelId()
            ) && $this->isNonGuestCustomer($context);

            $challengeOptions = new CreateChallengeOptions(
                algorithm: new Pbkdf2(),
                cost: $isWhitelisted ? 1 : 5000,
                counter: $isWhitelisted ? 1 : \random_int(1000, 1200),
                expiresAt: new \DateTimeImmutable('+5 minutes')
            );

            $challenge = (new Altcha($secretKey))->createChallenge($challengeOptions);

            return new JsonResponse($challenge);
        } catch (\Throwable $e) {
            return new JsonResponse($e->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    private function isNonGuestCustomer(SalesChannelContext $context): bool
    {
        $customer = $context->getCustomer();

        return $customer instanceof CustomerEntity && $customer->getGuest() === false;
    }
}
