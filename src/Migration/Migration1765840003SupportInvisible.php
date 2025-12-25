<?php

declare(strict_types=1);

namespace Frosh\AltchaCaptcha\Migration;

use Doctrine\DBAL\Connection;
use Frosh\AltchaCaptcha\Storefront\Framework\AltchaCaptcha;
use Shopware\Core\Framework\Migration\MigrationStep;

class Migration1765840003SupportInvisible extends MigrationStep
{
    public function getCreationTimestamp(): int
    {
        return 1765840003;
    }

    public function update(Connection $connection): void
    {
        $captchaItems = [
            AltchaCaptcha::CAPTCHA_NAME => [
                'config' => [
                    'invisible' => false,
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
