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
use Psr\Log\LoggerInterface;
use Shopware\Core\Checkout\Customer\CustomerEntity;
use Shopware\Core\PlatformRequest;
use Shopware\Core\System\SalesChannel\SalesChannelContext;
use Shopware\Storefront\Framework\Captcha\AbstractCaptcha;
use Symfony\Component\DependencyInjection\Attribute\AutoconfigureTag;
use Symfony\Component\DependencyInjection\Attribute\Autowire;
use Symfony\Component\HttpFoundation\Request;

#[AutoconfigureTag(name: 'shopware.storefront.captcha')]
class AltchaCaptcha extends AbstractCaptcha
{
    public const CAPTCHA_NAME = 'altchaCaptcha';
    public const CAPTCHA_REQUEST_PARAMETER = 'altcha';
    public const CONFIG_FIELD_SECRET = 'secretKey';
    public const CONFIG_PATH = 'core.basicInformation.activeCaptchasV2.' . self::CAPTCHA_NAME . '.config';

    public function __construct(
        #[Autowire(service: 'monolog.logger.frosh_altcha_captcha')]
        private readonly LoggerInterface $logger,
    ) {
    }

    public function isValid(
        Request $request,
        array $captchaConfig
    ): bool {
        if ($this->isWhitelistedCustomer($request, $captchaConfig)) {
            return true;
        }

        $secretKey = $captchaConfig['config'][self::CONFIG_FIELD_SECRET] ?? '';
        if (!\is_string($secretKey) || $secretKey === '') {
            return false;
        }

        $payload = $this->decodePayload($request->request->getString(self::CAPTCHA_REQUEST_PARAMETER));
        if ($payload === null) {
            return false;
        }

        try {
            if (isset($payload['verificationData'])) {
                return ServerSignature::verifyServerSignature($payload, $secretKey)->verified;
            }

            if (isset($payload['challenge'], $payload['solution'])) {
                return $this->verifyPowSolution($payload, $secretKey);
            }
        } catch (\Throwable $e) {
            $this->logger->warning('Altcha captcha verification threw; treating submission as invalid.', [
                'exception' => $e,
            ]);

            return false;
        }

        return false;
    }

    public function getName(): string
    {
        return self::CAPTCHA_NAME;
    }

    /**
     * @param array<string, mixed> $captchaConfig
     */
    private function isWhitelistedCustomer(
        Request $request,
        array $captchaConfig
    ): bool {
        if (($captchaConfig['config']['whitelistCustomers'] ?? false) !== true) {
            return false;
        }

        $context = $request->attributes->get(PlatformRequest::ATTRIBUTE_SALES_CHANNEL_CONTEXT_OBJECT);
        if (!$context instanceof SalesChannelContext) {
            return false;
        }

        $customer = $context->getCustomer();

        return $customer instanceof CustomerEntity && $customer->getGuest() === false;
    }

    /**
     * Decodes the base64-encoded JSON payload sent by the Altcha widget.
     *
     * @return array<string, mixed>|null null when the payload is missing or malformed
     */
    private function decodePayload(string $verifyData): ?array
    {
        if ($verifyData === '') {
            return null;
        }

        $decoded = \base64_decode($verifyData, true);
        if ($decoded === false) {
            return null;
        }

        $payload = \json_decode($decoded, true);

        return \is_array($payload) ? $payload : null;
    }

    /**
     * @param array<string, mixed> $payload
     */
    private function verifyPowSolution(
        array $payload,
        string $secretKey
    ): bool {
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

        return (new Altcha($secretKey))->verifySolution(new VerifySolutionOptions(
            payload: new Payload($challenge, $solution),
            algorithm: new Pbkdf2(),
        ))->verified;
    }
}
