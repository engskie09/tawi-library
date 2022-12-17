import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'login',
        component: () => import('@/views/LoginView.vue'),
    },
    {
        path: '/signup',
        name: 'signup',
        component: () => import('@/views/SignUpView.vue'),
    },
    {
        path: '/library',
        redirect: '/library/table',
    },
    {
        path: '/library/form',
        name: 'libraryForm',
        component: () => import('@/views/LibraryView.vue'),
    },
    {
        path: '/library/table',
        name: 'libraryTable',
        component: () => import('@/views/LibraryView.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
