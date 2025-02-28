import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'

import { setupStore } from '@/stores'

import router from './router'

const app = createApp(App)

app.use(router)

setupStore(app)

app.mount('#app')
