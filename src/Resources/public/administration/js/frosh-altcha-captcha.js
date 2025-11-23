(()=>{var n=Object.defineProperty;var c=(t,a)=>()=>(t&&(a=t(t=0)),a);var h=(t,a)=>{for(var e in a)n(t,e,{get:a[e],enumerable:!0})};var l,s=c(()=>{l=`<!-- eslint-disable-next-line sw-deprecation-rules/no-twigjs-blocks -->
{% block sw_settings_captcha_select_v2 %}
<sw-container class="sw-settings-captcha-select-v2">
    {% parent() %}
    <mt-card
        :title="$tc('sw-settings-basic-information.captcha.label.altchaCaptcha')"
        v-if="currentValue.altchaCaptcha.isActive"
        class="sw-settings-captcha-select-v2__altcha-captcha"
    >
        <template #subtitle>
            <MtText
                color="color-text-secondary-default"
                size="xs"
                class="mt-card__subtitle"
            >
                Brought to Shopware for free by <a href='https://github.com/FriendsOfShopware' target="_blank">Friends of Shopware</a> and <a href='https://github.com/tinect/' target='_blank'>@tinect</a>
            </MtText>
        </template>

        <p
            class="sw-settings-captcha-select-v2__description sw-settings-captcha-select-v2__altcha-captcha-description"
        >
            {{ $tc('sw-settings-basic-information.captcha.label.altchaCaptchaDescription') }}
        </p>
        <sw-password-field
            type="password"
            minlength="32"
            v-model:value="currentValue.altchaCaptcha.config.secretKey"
            name="altchaCaptchaSecretKey"
            :label="$tc('sw-settings-basic-information.captcha.label.altchaCaptchaSecretKey')"
        />
        <sw-checkbox-field
            v-model:value="currentValue.altchaCaptcha.config.whitelistCustomers"
            name="altchaCaptchaWhitelistCustomers"
            :label="$tc('sw-settings-basic-information.captcha.label.altchaCaptchaWhitelistCustomers')"
        />
        <sw-checkbox-field
            v-model:value="currentValue.altchaCaptcha.config.hideFooter"
            name="altchaCaptchaHideFooter"
            :label="$tc('sw-settings-basic-information.captcha.label.altchaCaptchaHideFooter')"
        />
        <sw-checkbox-field
            v-model:value="currentValue.altchaCaptcha.config.hideLogo"
            name="altchaCaptchaHideLogo"
            :label="$tc('sw-settings-basic-information.captcha.label.altchaCaptchaHideLogo')"
        />
    </mt-card>
</sw-container>
{% endblock %}
`});var i={};h(i,{default:()=>p});var p,o=c(()=>{s();p=Shopware.Component.wrapComponentConfig({template:l,compatConfig:Shopware.compatConfig})});Shopware.Component.override("sw-settings-captcha-select-v2",()=>Promise.resolve().then(()=>(o(),i)));})();
