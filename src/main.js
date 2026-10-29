import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import App from './App.vue'
import router from './router'
import './styles/main.css'

createApp(App).use(router).use(MotionPlugin).mount('#app')
