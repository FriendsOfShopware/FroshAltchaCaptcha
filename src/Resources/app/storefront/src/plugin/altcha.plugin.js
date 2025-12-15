import 'altcha';
import 'altcha/i18n/de';
import 'altcha/i18n/nl';
import 'altcha/i18n/fr-fr';

export default class AltchaPlugin extends window.PluginBaseClass {
    init() {
        this.el.addEventListener('statechange', this.onStateChange.bind(this));
    }

    onStateChange(event) {
        if (!('detail' in event)) {
            return;
        }

        if (['verifying', 'verified'].includes(event.detail.state) === false) {
            this.el.classList.remove('d-none');
        }
    }
}
