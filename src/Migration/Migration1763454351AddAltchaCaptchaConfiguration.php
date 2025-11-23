<?php

declare(strict_types=1);

namespace Frosh\AltchaCaptcha\Migration;

use Doctrine\DBAL\Connection;
use Shopware\Core\Framework\Migration\MigrationStep;
use Shopware\Core\Framework\Util\Random;
use Frosh\AltchaCaptcha\Storefront\Framework\AltchaCaptcha;

class Migration1763454351AddAltchaCaptchaConfiguration extends MigrationStep
{
    public function getCreationTimestamp(): int
    {
        return 1763454351;
    }

    public function update(Connection $connection): void
    {
        $captchaItems = [
            AltchaCaptcha::CAPTCHA_NAME => [
                'name' => AltchaCaptcha::CAPTCHA_NAME,
                'isActive' => false,
                'config' => [
                    'secretKey' => Random::getString(32),
                    'whitelistCustomers' => false,
                    'hideLogo' => false,
                    'hideFooter' => false,
                ],
            ],
        ];

        $connection->executeStatement(
            'UPDATE system_config SET configuration_value = JSON_MERGE_PATCH(
                configuration_value,
                :captchaItems
            ) WHERE configuration_key = :key',
            [
                'captchaItems' => \json_encode(['_value' => $captchaItems], \JSON_THROW_ON_ERROR),
                'key' => 'core.basicInformation.activeCaptchasV2',
            ]
        );
    }
}
