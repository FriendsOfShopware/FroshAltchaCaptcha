import template from './sw-settings-captcha-select-v2.html.twig';

export default Shopware.Component.wrapComponentConfig({
    template,

    compatConfig: Shopware.compatConfig,

    computed: {
        captchaModeOptions() {
            return [
                { value: 'off', label: 'off' },
                { value: 'onsubmit', label: 'onsubmit' },
                { value: 'onfocus', label: 'onfocus' },
                { value: 'onload', label: 'onload' },
            ];
        }
    },
});
