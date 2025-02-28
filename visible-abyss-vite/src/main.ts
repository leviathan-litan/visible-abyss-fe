import { createApp } from 'vue'
import App from './App.vue'

// 导入样式 / 默认
import './assets/main.css'

// 代码优化
import { setupStore } from '@/stores'
import { setupVisibleAbyss } from '~/library'

import router from './router'

const app = createApp(App)

app.use(router)

setupStore(app)
setupVisibleAbyss(app)

app.mount('#app')
