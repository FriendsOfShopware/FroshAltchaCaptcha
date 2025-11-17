<?php declare(strict_types=1);

namespace Tinect\AltchaCaptcha;

use Doctrine\DBAL\Connection;
use Shopware\Core\Framework\Plugin;
use Shopware\Core\Framework\Plugin\Context\UninstallContext;
use Tinect\AltchaCaptcha\Storefront\Framework\AltchaCaptcha;

class TinectAltchaCaptcha extends Plugin
{
    public function uninstall(UninstallContext $uninstallContext): void
    {
        $connection = $this->container->get(Connection::class);

        $connection->executeStatement(
            'UPDATE system_config SET configuration_value = JSON_REMOVE(configuration_value, "$._value.' . AltchaCaptcha::CAPTCHA_NAME . '") WHERE configuration_key = :key',
            ['key' => 'core.basicInformation.activeCaptchasV2']
        );
    }
}
