import Vue from 'vue';
import VueRouter from 'vue-router';
import VueRessource from 'vue-resource'

import app from './components/app';

Vue.use(VueRouter);
Vue.use(VueRessource);

const router = new VueRouter({
    hashbang: false,
});

router.start(app, 'app');

window.router = router;
