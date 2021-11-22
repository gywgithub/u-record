// router/modules/dashboard.js
const dashboard = [
	{
		//注意：path必须跟pages.json中的地址对应，最前面别忘了加'/'哦
		path: '/pages/dashboard/index',
		alias:"/dashboard",
		name: 'dashboard',
		meta: {
			title: '首页',
		},
    }
]
export default dashboard