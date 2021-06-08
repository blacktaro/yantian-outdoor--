/*
 * @Description: 文件简介
 * @Date: 2021-05-24 17:56:34
 * @Author: Chengxu
 * @LastEditors: Chengxu
 * @LastEditTime: 2021-05-31 14:17:32
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './utils/rem'
import './index.css'

const app = createApp(App)
app.use(router).mount('#app')
