(()=>{var n=Object.defineProperty;var c=(a,t)=>()=>(a&&(t=a(a=0)),t);var h=(a,t)=>{for(var e in t)n(a,e,{get:t[e],enumerable:!0})};var l,o=c(()=>{l=`<!-- eslint-disable-next-line sw-deprecation-rules/no-twigjs-blocks -->
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
                Brought to Shopware for free by <a href="https://github.com/FriendsOfShopware" target="_blank" rel="noopener noreferrer">Friends of Shopware</a> and <a href="https://github.com/tinect/" target="_blank" rel="noopener noreferrer">@tinect</a>
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

        <sw-select-field
            v-model:value="currentValue.altchaCaptcha.config.autoMode"
            :label="$tc('sw-settings-basic-information.captcha.label.altchaCaptchaAutoMode')"
        >
            <option value="off">off</option>
            <option value="onsubmit">onsubmit</option>
            <option value="onfocus">onfocus</option>
            <option value="onload">onload</option>
        </sw-select-field>

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
        <sw-checkbox-field
            v-model:value="currentValue.altchaCaptcha.config.floating"
            name="altchaCaptchaFloating"
            :label="$tc('sw-settings-basic-information.captcha.label.altchaCaptchaFloating')"
        />
    </mt-card>
</sw-container>
{% endblock %}
`});var s={};h(s,{default:()=>p});var p,i=c(()=>{o();p=Shopware.Component.wrapComponentConfig({template:l,compatConfig:Shopware.compatConfig})});Shopware.Component.override("sw-settings-captcha-select-v2",()=>Promise.resolve().then(()=>(i(),s)));})();
