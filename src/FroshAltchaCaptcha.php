<?php declare(strict_types=1);

namespace Frosh\AltchaCaptcha;

use Doctrine\DBAL\Connection;
use Frosh\AltchaCaptcha\Storefront\Framework\AltchaCaptcha;
use Shopware\Core\Framework\Plugin;
use Shopware\Core\Framework\Plugin\Context\UninstallContext;
use Symfony\Component\DependencyInjection\ContainerBuilder;

class FroshAltchaCaptcha extends Plugin
{
    public function build(ContainerBuilder $container): void
    {
        parent::build($container);
        $this->buildDefaultConfig($container);
    }

    public function uninstall(UninstallContext $uninstallContext): void
    {
        $connection = $this->container->get(Connection::class);

        $sql = <<<'SQL'
            UPDATE system_config
            SET configuration_value = JSON_REMOVE(configuration_value, :path)
            WHERE configuration_key = :key
            SQL;

        $connection->executeStatement($sql, [
            'path' => '$._value.' . AltchaCaptcha::CAPTCHA_NAME,
            'key' => 'core.basicInformation.activeCaptchasV2',
        ]);
    }

    public function executeComposerCommands(): bool
    {
        return true;
    }
}
