(()=>{var r=Object.defineProperty;var l=(t,e,a)=>()=>{if(a)throw a[0];try{return t&&(e=t(t=0)),e}catch(c){throw a=[c],c}};var h=(t,e)=>{for(var a in e)r(t,a,{get:e[a],enumerable:!0})};var s,o=l(()=>{s=`<!-- eslint-disable-next-line sw-deprecation-rules/no-twigjs-blocks -->
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
                Brought to Shopware for free by
                <a
                    href="https://github.com/FriendsOfShopware"
                    target="_blank"
                    rel="noopener noreferrer"
                >Friends of Shopware</a>
                and
                <a
                    href="https://github.com/tinect/"
                    target="_blank"
                    rel="noopener noreferrer"
                >@tinect</a>
            </MtText>
        </template>
        <p
            class="sw-settings-captcha-select-v2__description sw-settings-captcha-select-v2__altcha-captcha-description"
        >
            {{ $tc('sw-settings-basic-information.captcha.altchaCaptchaDescription') }}
        </p>
        <sw-password-field
            type="password"
            v-model:value="currentValue.altchaCaptcha.config.secretKey"
            name="altchaCaptchaSecretKey"
            :label="$tc('sw-settings-basic-information.captcha.label.altchaCaptchaSecretKey')"
        />
        <mt-select
            v-model="currentValue.altchaCaptcha.config.autoMode"
            :label="$tc('sw-settings-basic-information.captcha.label.altchaCaptchaAutoMode')"
            :options="captchaModeOptions"
        />
        <sw-switch-field
            v-model:value="currentValue.altchaCaptcha.config.hideFooter"
            name="altchaCaptchaHideFooter"
            :label="$tc('sw-settings-basic-information.captcha.label.altchaCaptchaHideFooter')"
            bordered="true"
        />
        <sw-switch-field
            v-model:value="currentValue.altchaCaptcha.config.hideLogo"
            name="altchaCaptchaHideLogo"
            :label="$tc('sw-settings-basic-information.captcha.label.altchaCaptchaHideLogo')"
            bordered="true"
        />
        <sw-switch-field
            v-model:value="currentValue.altchaCaptcha.config.floating"
            name="altchaCaptchaFloating"
            :label="$tc('sw-settings-basic-information.captcha.label.altchaCaptchaFloating')"
            bordered="true"
        />
        <sw-switch-field
            v-model:value="currentValue.altchaCaptcha.config.invisible"
            name="altchaCaptchaInvisible"
            :label="$tc('sw-settings-basic-information.captcha.label.altchaCaptchaInvisible')"
            :helpText="$tc('sw-settings-basic-information.captcha.helpText.altchaCaptchaInvisible')"
            bordered="true"
        />
    </mt-card>
</sw-container>
{% endblock %}`});var i={};h(i,{default:()=>d});var d,n=l(()=>{o();d=Shopware.Component.wrapComponentConfig({template:s,compatConfig:Shopware.compatConfig,computed:{captchaModeOptions(){return[{value:"off",label:"off"},{value:"onsubmit",label:"onsubmit"},{value:"onfocus",label:"onfocus"},{value:"onload",label:"onload"}]}}})});Shopware.Component.override("sw-settings-captcha-select-v2",()=>Promise.resolve().then(()=>(n(),i)));})();
