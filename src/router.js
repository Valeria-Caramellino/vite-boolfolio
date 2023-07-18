import { createRouter, createWebHistory } from "vue-router";

import AppHome from './pages/AppHome.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:'/',
            nome:"home",
            component: AppHome 
        }
        
    ]
});
export {router};