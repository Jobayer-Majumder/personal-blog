import { lazy } from "react"

const Home = lazy(() => import('../pages/Home.page'));
const Login = lazy(() => import('../pages/Login.page'));

const routes = [
    {
        name: 'Home',
        path: '/',
        exact: true,
        component: Home,
        authentication: false
    },
    {
        name: 'Login',
        path: '/login',
        exact: true,
        component: Login,
        authentication: false
    },
];

export default routes;