import Vue from 'vue';

import 'normalize.css';
import ElementUI from 'element-ui';
import SvgIcon from 'vue-svgicon';

import '@/styles/element-variables.scss';
import '@/styles/index.scss';
import '@/styles/local.element.ui/index.scss';

import App from '@/App.vue';
import store from '@/store';
import router from '@/router';
import '@/commons/components/lx';
import '@/icons/components';
// import '@/router/permission';
import '@/commons/filters/register.filters';
import '@/commons/directives';

Vue.use(ElementUI);
Vue.use(SvgIcon, {
    tagName: 'svg-icon',
    defaultWidth: '1em',
    defaultHeight: '1em'
});

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App)
}).$mount('#app');
