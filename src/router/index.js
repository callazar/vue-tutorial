// import vue router
import { createRouter,createWebHistory } from "vue-router";

// definisikan router
const routes = [
    {
        path:'/',
        name:'home',
        component: () => import('@/views/home.vue')
    },
    {
        path:'/',
        name:'about',
        component: () => import('@/views/about.vue')
    },
]

// buat router
const router = createRouter({
    history: createWebHistory(),
    // konfogurasi router
    routes 
})

// export router
export default router