<?php declare(strict_types=1);

namespace Frosh\AltchaCaptcha;

use Doctrine\DBAL\Connection;
use Frosh\AltchaCaptcha\Storefront\Framework\AltchaCaptcha;
use Shopware\Core\Framework\Plugin;
use Shopware\Core\Framework\Plugin\Context\UninstallContext;

class FroshAltchaCaptcha extends Plugin
{
    public function uninstall(UninstallContext $uninstallContext): void
    {
        $connection = $this->container->get(Connection::class);

        $connection->executeStatement(
            'UPDATE system_config SET configuration_value = JSON_REMOVE(configuration_value, "$._value.' . AltchaCaptcha::CAPTCHA_NAME . '") WHERE configuration_key = :key',
            ['key' => 'core.basicInformation.activeCaptchasV2']
        );
    }

    public function executeComposerCommands(): bool
    {
        return true;
    }
}
