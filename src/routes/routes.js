import { lazy } from "react"

const Home = lazy(() => import('../pages/Home.page'));
const Login = lazy(() => import('../pages/Login.page'));
const BlogDetails = lazy(() => import('../pages/BlogData.page.jsx'));

const routes = [
    {
        name: 'Home',
        path: '/',
        exact: true,
        component: Home,
        authentication: false
    },
    {
        name: 'Home',
        path: '/home',
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
    {
        name: 'Post',
        path: '/blog/:id',
        exact: true,
        component: BlogDetails,
        authentication: false
    },
];

export default routes;