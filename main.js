import Vue from 'vue'
import App from './App'
import {router,RouterMount} from './router/index.js' 
Vue.use(router)

App.mpType = 'app'
const app = new Vue({
    ...App
})
// #ifndef VUE3
	RouterMount(app,router,'#app') //v1.3.5起 H5端 你应该去除原有的app.$mount();使用路由自带的渲染方式
// #endif

// #ifndef VUE3
	app.$mount(); //为了兼容小程序及app端必须这样写才有效果
// #endif
