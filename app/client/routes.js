import Home from './components/Home.vue';
import Subscribe from './components/Subscribe.vue';
import People from './components/People.vue';
import AuthLogin from './components/auth/Login.vue';
import AuthRegister from './components/auth/Register.vue';

export default [
    {
        path: '/',
        redirect: '/filters',
    },
    {
        path: '/filters',
        component: Home,
    },
    {
        path: '/people',
        component: People,
    },
    {
        path: '/subscribe',
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
