import { createApp } from 'vue'
import './style/General.scss'
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App.vue'
import { router }  from './router'

createApp(App).use(router).mount('#app');
