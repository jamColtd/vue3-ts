
import { createRouter,createWebHistory } from "vue-router";
import login from '../views/login.vue';
const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/',
            component:login,
        }
    ]
})
export default router;