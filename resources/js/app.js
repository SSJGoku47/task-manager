// app.js
import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import "primevue/resources/themes/aura-light-green/theme.css";
import PrimeVue from 'primevue/config';
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import '../css/app.css'; 
import primevueComponents from './prime-vue.js'; 
import AppLayout from '../js/Layout/AppLayout.vue';
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';
import DialogService from 'primevue/dialogservice';
import Tooltip from 'primevue/tooltip';
import BadgeDirective from "primevue/badgedirective";
import Ripple from 'primevue/ripple';
import StyleClass from 'primevue/styleclass';
import FocusTrap from 'primevue/focustrap';
import AnimateOnScroll from 'primevue/animateonscroll';


const initializeDarkMode = () => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.vue", { eager: true });

        let page = pages[`./Pages/${name}.vue`].default;

        if (!page.noLayout && !page.layout) {
            page.layout = AppLayout;
        }

        initializeDarkMode();

        return pages[`./Pages/${name}.vue`];
    },
    setup({ el, App, props, plugin }) {
        const app = createApp({ render: () => h(App, props) });
        app.use(primevueComponents); // Ensure this is used
        app.use(PrimeVue, { ripple: true });
        app.use(ConfirmationService);
        app.use(ToastService);
        app.use(DialogService);
        app.use(plugin);

        app.directive("tooltip", Tooltip);
        app.directive("badge", BadgeDirective);
        app.directive("ripple", Ripple);
        app.directive("styleclass", StyleClass);
        app.directive("focustrap", FocusTrap);
        app.directive("animateonscroll", AnimateOnScroll);

        app.mount(el);
    },
});
