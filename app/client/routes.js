import Home from './components/Home.vue';
import AuthLogin from './components/auth/Login.vue';
import AuthRegister from './components/auth/Register.vue';

export default [
    {
        path: '/',
        component: Home,
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
