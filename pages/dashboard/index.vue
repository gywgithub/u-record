<template>
	<view class="content">
		<image class="logo" src="/static/images/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
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
			test().then((res)=>{
				console.log("Success");
			})
		},
		methods: {
			bindClick(){
				console.log("你好");
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
