<template>
	<view class="content">
		<text class="title" @click="testRedis">{{title}}</text>
	</view>
</template>

<script>
	import { test } from '../../api/dashboard.js'
	import { loginReq,regiterReq } from '../../api/login.js'
	export default {
		data() {
			return {
				title: 'Hello World'
			}
		},
		onLoad() {
		},
		methods: {
			testRedis(){
				let param = {
					"userName" : "15600117321",
					"password" : "123456zpwZPW",
					"d" : "false"
				}
				loginReq(param).then((res)=>{
					if(res.success){
						// uni.setStorageSync('token', res.data.token);
						// this.$Router.push('/pages/dashboard/index')
					}else{
						uni.showToast({
							title: res.message,
							icon:'none',
							duration: 2000
						});
					}
				});
			},
			bindClick(){
				uni.navigateTo({
					url:"/pages/login/index"
				})
			},
			navgateLogin(){
				// uni.navigateTo({
				//     url: '/pages/login/index?id=1&name=uniapp'
				// });
				// uni.navigateTo({
				//     url:'/pages/login/index',
				//     success: res => {},fail: () => {},complete: () => {}
				// })
				uni.navigateTo({
				    url: '/pages/login/index',
				    animationType: 'slide-in-right',
				    animationDuration: 500,
					success:(res)=>{
						console.log("动画完毕");
					}
				});
			}
		}
	}
</script>

<style>
	.content {
		
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.title {
		font-size: 36rpx;
		color: #000000;
	}
</style>
