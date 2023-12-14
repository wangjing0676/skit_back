
import store from './store'
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
const app = createApp(App)
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
app.use(router)
app.use(store)
app.use(ElementPlus)

app.mount('#app')