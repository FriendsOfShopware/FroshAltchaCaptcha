<?php declare(strict_types=1);

namespace Frosh\AltchaCaptcha\Storefront\Framework;

use AltchaOrg\Altcha\Algorithm\Pbkdf2;
use AltchaOrg\Altcha\Altcha;
use AltchaOrg\Altcha\Challenge;
use AltchaOrg\Altcha\ChallengeParameters;
use AltchaOrg\Altcha\Payload;
use AltchaOrg\Altcha\ServerSignature;
use AltchaOrg\Altcha\Solution;
use AltchaOrg\Altcha\VerifySolutionOptions;
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

        $decodedVerifyData = \base64_decode($verifyData, true);
        if ($decodedVerifyData === false) {
            return false;
        }

        $payload = \json_decode($decodedVerifyData, true);
        if (!\is_array($payload)) {
            return false;
        }

        if (isset($payload['verificationData'])) {
            $result = ServerSignature::verifyServerSignature($payload, $secretKey);

            return $result->verified;
        }

        if (isset($payload['challenge'], $payload['solution'])) {
            $challengeData = $payload['challenge'];
            $solutionData = $payload['solution'];

            if (!\is_array($challengeData) || !\is_array($solutionData)) {
                return false;
            }

            $challenge = new Challenge(
                ChallengeParameters::fromArray($challengeData['parameters'] ?? []),
                $challengeData['signature'] ?? null,
            );

            $solution = new Solution(
                counter: (int) ($solutionData['counter'] ?? 0),
                derivedKey: (string) ($solutionData['derivedKey'] ?? ''),
            );

            $result = (new Altcha($secretKey))->verifySolution(new VerifySolutionOptions(
                payload: new Payload($challenge, $solution),
                algorithm: new Pbkdf2(),
            ));

            return $result->verified;
        }

        return false;
    }

    public function getName(): string
    {
        return self::CAPTCHA_NAME;
    }
}
