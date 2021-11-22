<template>
	<view class="content">
		<text class="title">{{title}}</text>
	</view>
</template>

<script>
	import { test } from '../../api/dashboard.js'
	export default {
		data() {
			return {
				title: 'Hello World'
			}
		},
		onLoad() {
		},
		methods: {
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
