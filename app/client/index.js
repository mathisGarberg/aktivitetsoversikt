import 'babel-polyfill';
import 'dom-shims';

import moment from 'moment';
import Cookies from 'js-cookie';

import Vue from 'vue';
import VueRouter from 'vue-router';
import VueRessource from 'vue-resource';

import routes from './routes';

import App from './components/App.vue';

Vue.use(VueRouter);
Vue.use(VueRessource);

const eventHub = new Vue();

Vue.mixin({
    data() {
        return {
            eventHub,
        };
    },
});

moment.locale('nb');

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    linkActiveClass: 'active',
    routes,
});

window.app = new Vue({
    el: '#app',
    router,
    render: h => h(App),
});

window.moment = moment;
window.Cookies = Cookies;
