// router/index.js
import modules from './modules'
import {RouterMount,createRouter} from 'uni-simple-router';
const router = createRouter({
	mode: 'history',
	platform: process.env.VUE_APP_PLATFORM,  
	routes: [...modules]
});
console.log("当前运行环境：",process.env.VUE_APP_PLATFORM);
//全局路由前置守卫
router.beforeEach((to, from, next) => {
	console.log("to router .....");
	next();
});
// 全局路由后置守卫
router.afterEach((to, from) => {
    console.log('跳转结束')
})

export {
	router,
	RouterMount
}
