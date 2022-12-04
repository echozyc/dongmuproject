import { createApp } from 'vue'
import './style.css'
import 'animate.css'
import 'animate.css/animate.compat.css'

import Directives from "@/assets/ts/directives.ts"
import App from './App.vue'

import router from './router.js'
// import store from './store'
import "ant-design-vue/dist/antd.css"
// import 'lib-flexible'

// document.body.style.zoom =  window.innerWidth/1920

const app = createApp(App)
app.config.globalProperties.$http = ''
app.use(router) // 注册路由系统
app.use(Directives)
// app.use(store) // 注册状态管理

// 全局指令
app.directive('highlight', {
    beforeMount(el, binding, vnode) {
        el.style.background = binding.value
    }
})
app.mount('#app') // 挂载

// createApp(App).mount('#app')
