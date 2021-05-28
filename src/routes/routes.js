import { lazy } from "react"

const Home = lazy(() => import('../pages/Home.page'));

const routes = [
    {
        name: 'Home',
        path: '/',
        exact: true,
        component: Home,
        authentication: false
    },
];

export default routes;