import { createRouter, createWebHashHistory } from 'vue-router'

const Home = () => import('@/pages/home/home.vue')
const mHome = () => import('@/pages/mHome/mHome.vue')

export default createRouter({
    history: createWebHashHistory(), // Hash路由
    routes: [
        {
            path: '/',
            component: Home,
            meta:{transition: 'fade', isAlive: true }
        },
        { path: '/index', component: mHome }
    ]
})