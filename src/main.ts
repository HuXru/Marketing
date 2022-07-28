import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import {store, key} from '@/store/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import axios from './api/http'
import config from '@/config/index'


// 测试
axios.defaults.baseURL = 'development' ? config.baseUrl.dev : config.baseUrl.pro;
// axios.get('/columns?icode=C6A6C4086133360B').then(resp => {
//     console.log(resp.data)
// })

// 全局挂载axios
const app = createApp(App);
app.config.globalProperties.$axios = axios;
app.use(router).use(store, key).use(ElementPlus).mount('#app')
