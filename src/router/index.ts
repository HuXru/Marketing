import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const routes:Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/components/HelloWorld.vue')
    },
    {
        path: '/:catchAll(.*)',
        name: '404',
        component: () => import('@/views/404.vue')
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router