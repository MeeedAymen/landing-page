import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { MotionPlugin } from '@vueuse/motion'
import App from './App.vue'
import router from './router'
import './style.css'

const app = createApp(App)

app.use(router)
app.use(MotionPlugin, {
  directives: {
    'motion': {
      initial: { opacity: 0 },
      enter: { opacity: 1 }
    }
  }
})

app.mount('#app')