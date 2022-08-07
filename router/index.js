import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '',
        name: 'Main',
        redirect:'/home',
        component: () => import('../views/Main.vue'),
        children: [
            // {
            //     path: '/home',
            //     name: 'home',
            //     component: () => import('../views/home/Index.vue')
            // },
            // {
            //     path: '/user',
            //     name: 'user',
            //     component: () => import('../views/user/Index.vue')
            // },
            // {
            //     path: '/mall',
            //     name: 'mall',
            //     component: () => import('../views/mall/index.vue')
            // },
            // {
            //     path: '/page1',
            //     name: 'page1',
            //     component: () => import('../views/other/pageOne.vue')
            // },
            // {
            //     path: '/page2',
            //     name: 'page2',
            //     component: () => import('../views/other/pageTwo.vue')
            // },
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/Login/login.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router