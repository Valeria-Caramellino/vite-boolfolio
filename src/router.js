import { createRouter, createWebHistory } from "vue-router";

import AppHome from './pages/AppHome.vue';
import AppProjectList from './pages/AppProjectList.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:'/',
            nome:"home",
            component: AppHome 
        },
        {
            path:"/projects",
            nome:"projects",
            component: AppProjectList
        }
        
    ]
});
export {router};