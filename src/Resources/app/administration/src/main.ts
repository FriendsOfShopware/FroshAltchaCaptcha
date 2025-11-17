Shopware.Component.override(
    'sw-settings-captcha-select-v2',
    () =>
        import(
            './core/modules/sw-settings-basic-information/component/sw-settings-captcha-select-v2'
        )
);
