import { createRouter, createWebHistory } from "vue-router";

import AppHome from './pages/AppHome.vue';
import AppProjectList from './pages/AppProjectList.vue';
import AppError from './pages/AppError.vue';
import AppSingleProject from './pages/AppSingleProject.vue';

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
        },
        {
            path:'/projects/:id',
            name :'single',
            component: AppSingleProject
        }
    ]
});
export {router};