<?php declare(strict_types=1);

namespace Frosh\AltchaCaptcha\Storefront\Framework;

use AltchaOrg\Altcha\Altcha;
use Shopware\Core\Checkout\Customer\CustomerEntity;
use Shopware\Core\PlatformRequest;
use Shopware\Core\System\SalesChannel\SalesChannelContext;
use Shopware\Storefront\Framework\Captcha\AbstractCaptcha;
use Symfony\Component\DependencyInjection\Attribute\AutoconfigureTag;
use Symfony\Component\HttpFoundation\Request;

#[AutoconfigureTag(name: 'shopware.storefront.captcha')]
class AltchaCaptcha extends AbstractCaptcha
{
    public const CAPTCHA_NAME = 'altchaCaptcha';
    public const CAPTCHA_REQUEST_PARAMETER = 'altcha';
    public const CONFIG_FIELD_SECRET = 'secretKey';
    public const CONFIG_PATH = 'core.basicInformation.activeCaptchasV2.' . self::CAPTCHA_NAME . '.config';

    public function isValid(Request $request, array $captchaConfig): bool
    {
        $whitelistCustomers = $captchaConfig['config']['whitelistCustomers'] ?? false;
        if ($whitelistCustomers === true) {
            $context = $request->attributes->get(PlatformRequest::ATTRIBUTE_SALES_CHANNEL_CONTEXT_OBJECT);
            if ($context instanceof SalesChannelContext) {
                $customer = $context->getCustomer();
                if ($customer instanceof CustomerEntity && $customer->getGuest() === false) {
                    return true;
                }
            }
        }

        $secretKey = $captchaConfig['config'][self::CONFIG_FIELD_SECRET] ?? '';

        if (!\is_string($secretKey) || $secretKey === '') {
            return false;
        }

        $verifyData = $request->request->getString(self::CAPTCHA_REQUEST_PARAMETER);

        if ($verifyData === '') {
            return false;
        }

        try {
            $decodedPayload = \base64_decode($verifyData, true);
            $payload = \json_decode($decodedPayload, true, 512, \JSON_THROW_ON_ERROR);

            return (new Altcha($secretKey))->verifySolution($payload);
        } catch (\Throwable) {
            return false;
        }
    }

    public function getName(): string
    {
        return self::CAPTCHA_NAME;
    }
}
