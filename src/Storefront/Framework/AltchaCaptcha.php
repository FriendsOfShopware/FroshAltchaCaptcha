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
use Psr\Cache\CacheItemPoolInterface;
use Psr\Log\LoggerInterface;
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

    /**
     * How long a used challenge is remembered when the payload carries no expiry of its own.
     */
    private const USED_CHALLENGE_FALLBACK_TTL = 3600;

    public function __construct(
        #[Autowire(service: 'monolog.logger.frosh_altcha_captcha')]
        private readonly LoggerInterface $logger,
        #[Autowire(service: 'cache.app')]
        private readonly CacheItemPoolInterface $cache,
    ) {
    }

    public function isValid(
        Request $request,
        array $captchaConfig
    ): bool {
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
                $verification = ServerSignature::verifyServerSignature($payload, $secretKey);

                return $verification->verified
                    && $this->markChallengeUsed($payload['signature'], $verification->verificationData?->expire);
            }

            if (isset($payload['challenge'], $payload['solution'])) {
                return $this->verifyPowSolution($payload, $secretKey)
                    && $this->markChallengeUsed(
                        $payload['challenge']['signature'] ?? null,
                        $payload['challenge']['parameters']['expiresAt'] ?? null,
                    );
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

    /**
     * A solved challenge stays valid until it expires, so without this check a bot can
     * solve one challenge and replay the same payload for every submission until then.
     * Returns false when the challenge was already used.
     */
    private function markChallengeUsed(
        mixed $signature,
        mixed $expiresAt
    ): bool {
        if (!\is_string($signature) || $signature === '') {
            return false;
        }

        $item = $this->cache->getItem('frosh_altcha_used_' . hash('sha256', $signature));
        if ($item->isHit()) {
            return false;
        }

        $item->set(true);
        if ((\is_int($expiresAt) || \is_float($expiresAt)) && $expiresAt > time()) {
            $item->expiresAt((new \DateTimeImmutable())->setTimestamp((int) ceil($expiresAt)));
        } else {
            $item->expiresAfter(self::USED_CHALLENGE_FALLBACK_TTL);
        }
        $this->cache->save($item);

        return true;
    }
}
