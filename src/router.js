import { createRouter, createWebHistory } from "vue-router";

import AppHome from './pages/AppHome.vue';
import AppProjectList from './pages/AppProjectList.vue';
import AppError from './pages/AppError.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:'/',
            name:"home",
            component: AppHome 
        },
        {
            path:"/projects",
            name:"projects",
            component: AppProjectList
        },
        {
            path:'/error/:code',
            name:'error',
            component: AppError
        }
        
    ]
});
export {router};