import Home from './components/Home.vue';
import Subscribe from './components/Subscribe.vue';
import AuthLogin from './components/auth/Login.vue';
import AuthRegister from './components/auth/Register.vue';

export default [
    {
        path: '/',
        redirect: '/filter_list',
    },
    {
        path: '/filter_list',
        component: Home,
    },
    {
        path: '/rss_feed',
        component: Subscribe,
    },
    {
        path: '/auth/login',
        component: AuthLogin,
    },
    {
        path: '/auth/register',
        component: AuthRegister,
    },
];
