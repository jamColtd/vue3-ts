import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/router"
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';



createApp(App).use(router).mount('#app')
