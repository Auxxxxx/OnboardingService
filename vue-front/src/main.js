import { createApp } from 'vue'
import './style.css'
import {createPinia} from 'pinia'
import App from './App.vue'
import { router } from './router'
import "./assets/styles/global.css"

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)
app.mount('#app')
