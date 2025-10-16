import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

// 引入 Bootstrap CSS 和 JS
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// 引入 router
import router from './router/router'

import './style.scss'  // 你的 SCSS 檔

// 創建 Pinia 實例
const pinia = createPinia()

createApp(App)
    .use(pinia)   // 掛載 Pinia
    .use(router)  // 掛載 router
    .mount('#app')