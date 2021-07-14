import { createApp } from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';



createApp(App).mount('#app')

const router = [
    {
        path:'/',
        redriect:'/login'
    },
    {
        path:'/login',
        name:'login',
        component: () => import('./components/login.vue')
    },
]