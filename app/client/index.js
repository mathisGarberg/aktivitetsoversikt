import 'babel-polyfill';
import 'dom-shims';

import Vue from 'vue';
import VueRouter from 'vue-router';
import VueRessource from 'vue-resource'

import routes from './routes';

import App from './components/App.vue';

Vue.use(VueRouter);
Vue.use(VueRessource);

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes,
});

window.app = new Vue({
    el: '#app',
    router,
    render: h => h(App),
});
