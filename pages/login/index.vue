<template>
	<view class="content">
		 <view class="login-area">
			 <view class="animate-fadeInLeft login-area-transcript" v-if="btnType == 2">
				 <!-- <text class="simul-placeholder simul-placeholder-email"  :class="loginEmailAnimateBoolean ? 'loginEmailAnimate': 'unLoginEmailAnimate'">电子邮件或电话号码</text> -->
				 <!-- <text class="simul-placeholder simul-placeholder-pwd"  :class="loginPwdAnimateBoolean ? 'loginPwdAnimate': 'unLoginPwdAnimate'">密码</text> -->
				 <input type="text" class="inp-common inp-email"  placeholder="电子邮件或电话号码" v-model="userName" value="" @focus="hanndleEmailAnimate(1)" @blur="resetHanndleEmailAnimate(1)"/>
				 <input type="text" class="inp-common inp-pwd" placeholder="密码" v-model="passWord" value="" @focus="hanndlePwdAnimate(1)" @blur="resetHanndlePwdAnimate(1)"/>
				 <button type="default" class="btn" @click="loginAccount"><view class="login-animation">登 录</view></button>
				 <text class="return-pwd login-animation2" @click="goRegiter">立即注册</text>
			 </view>
		</view>
		<view class="login-area">
			<view class="animate-fadeInLeft login-area-transcript" v-if="btnType == 1">
				<!-- <text class="simul-placeholder simul-placeholder-email">电子邮件或电话号码</text> -->
				<!-- <text class="simul-placeholder simul-placeholder-pwd">密码</text> -->
				<!-- <text class="simul-placeholder simul-placeholder-pwd">确认密码</text> -->
				<input type="text" class="inp-common inp-email" v-model="unUserName" placeholder="电子邮件或电话号码" value="" @focus="hanndleEmailAnimate(2)"/>
				<input type="text" class="inp-common inp-pwd"  v-model="unPassword" placeholder="密码" value="" @focus="hanndlePwdAnimate(2)"/>
				<input type="text" class="inp-common inp-pwd"  v-model="uncheckPassword" placeholder="确认密码" value="" @focus="hanndlePwdAnimate(2)"/>
				<button type="default" class="btn" @click="regiterAccount"><view class="login-animation" >注 册</view></button>
				<text class="return-pwd login-animation2" @click="goLogin">立即登录</text>
			</view>
		</view>
	</view>
</template>

<script>
	import { loginReq,regiterReq } from '../../api/login.js'
	import md5 from "../../common/utils/md5.js"
	export default {
		data() {
			return {
				userName:"",
				passWord:"",
				unUserName:"",
				unPassword:"",
				uncheckPassword:"",
				btnType : 2, //1:注册  2:登录
				loginEmailAnimateBoolean:false,
				loginPwdAnimateBoolean:false
			}
		},
		onLoad() {
			console.log(md5.hex_md5("3kksjdfkk"));
		},
		methods: {
			goRegiter(){
				this.btnType = 1;
			},
			goLogin(){
				this.btnType = 2;
			},
			loginAccount(){
				if(!this.userName || !this.passWord){
					uni.showToast({
						title: '请填写账户或密码',
						icon:'none',
						duration: 2000
					});
					return;
				}
				let param = {
					"userName" : this.userName,
					"password" : this.passWord
				}
				loginReq(param).then((res)=>{
					if(res.data.token){
						// uni.getStorageSync("token");
						uni.setStorageSync('token', res.data.token);
						this.$Router.push('/pages/dashboard/index')
					}else{
						uni.showToast({
							title: '账号或密码错误，请重试！',
							icon:'none',
							duration: 2000
						});
					}
				});
			},
			regiterAccount(){
				let regEmail = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
				let regPhone = /^1(3\d|4[5-9]|5[0-35-9]|6[2567]|7[0-8]|8\d|9[0-35-9])\d{8}$/;
				if(!regEmail.test(this.unUserName) && !regPhone.test(this.unUserName)){
					uni.showToast({
						title: '账号格式错误',
						icon:'none',
						duration: 2000
					});
					return;
				}
				if(!this.unPassword || !this.uncheckPassword){
					uni.showToast({
						title: '密码格式错误',
						icon:'none',
						duration: 2000
					});
					return;
				}
				if(this.unPassword != this.uncheckPassword){
					uni.showToast({
						title: '两次密码不一致',
						icon:'none',
						duration: 2000
					});
					return;
				}
				let param = {
					"userName" : this.unUserName,
					"password" : md5.hex_md5(this.unPassword),
				}
				regiterReq(param).then((res)=>{
					console.dir(res);
					if(res.success){
						uni.showToast({
							title: '注册成功',
							duration: 2000
						});
						this.btnType = 2;
					}
				});
			},
			hanndleEmailAnimate(type){
				if(type == 1){
					this.loginEmailAnimateBoolean = true;
				}else{
					this.loginEmailAnimateBoolean = true;
				}
			},
			
			hanndlePwdAnimate(type){
				if(type == 1){
					this.loginPwdAnimateBoolean = true;
				}else{
					
				}
			},
			resetHanndleEmailAnimate(type){
				if(type == 1){
					this.loginEmailAnimateBoolean = false;
				}else{
					
				}
			},
			resetHanndlePwdAnimate(type){
				if(type == 1){
					this.loginPwdAnimateBoolean = false;
				}else{
					
				}
			},
			bindClick(){
				// this.$Router.push('/pages/dashboard/index')
				// uni.navigateTo({
				//     url: '/pages/dashboard/index',
				//     animationType: 'pop-in',
				//     animationDuration: 200
				// });
			}
		}
	}
</script>

<style>
	@keyframes emailAnimation
	{
	    0% {left:20rpx;top:30rpx;transform:scale(1);}
	    100% {left:-8rpx;top:10rpx;transform:scale(0.8);}
	}
	@keyframes unEmailAnimation
	{
	    0% {left:-8rpx;top:10rpx;transform:scale(0.8);}
	    100% {left:20rpx;top:30rpx;transform:scale(1);}
	}
	@keyframes pwdAnimation
	{
	    0% {left:20rpx;top:150rpx;transform:scale(1);}
	    100% {left:10rpx;top:130rpx;transform:scale(0.8);}
	}
	@keyframes unPwdAnimation
	{
	    0% {left:10rpx;top:130rpx;transform:scale(0.8);}
	    100% {left:20rpx;top:150rpx;transform:scale(1);}
	}
	.loginEmailAnimate{
		animation: emailAnimation;
		animation-duration: 1s;
		animation-fill-mode: forwards;
		-webkit-animation: emailAnimation;
		-webkit-animation-duration:1s;
		-webkit-animation-fill-mode: forwards;
	}
	.unLoginEmailAnimate{
		animation: unEmailAnimation;
		animation-duration: 1s;
		animation-fill-mode: forwards;
		-webkit-animation: unEmailAnimation;
		-webkit-animation-duration:1s;
		-webkit-animation-fill-mode: forwards;
	}
	.loginPwdAnimate{
		animation: pwdAnimation;
		animation-duration: 1s;
		animation-fill-mode: forwards;
		-webkit-animation: pwdAnimation;
		-webkit-animation-duration:1s;
		-webkit-animation-fill-mode: forwards;
	}
	.unLoginPwdAnimate{
		animation: unPwdAnimation;
		animation-duration: 1s;
		animation-fill-mode: forwards;
		-webkit-animation: unPwdAnimation;
		-webkit-animation-duration:1s;
		-webkit-animation-fill-mode: forwards;
	}
	.animate-fadeInLeft{
		animation: fadeInLeft;
		animation-duration: 1.5s;
	}
	.login-animation{
		animation: flipInX;
		animation-duration: 2s;
	}
	.login-animation2{
		animation: flipInX;
		animation-duration: 3s;
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: #242426;
		height: calc(100vh - 100rpx);
	}
	
	.login-area-transcript{
		display: flex;
		flex-direction: column;
		justify-content: center;
		position: relative;
	}
	.inp-common{
		width:400rpx;	
		height:50rpx;
		border-radius: 10rpx;
		padding:20rpx;
		display: block;
		color:#b5b5b5;
		font-size:24rpx;
		background-color: rgb(51,51,51);
	}
	.inp-pwd{
		margin-top:30rpx;
	}
	.simul-placeholder{
		font-size:16rpx;
		letter-spacing:3rpx;
		color:#b5b5b5;
		position: absolute;
	}
	.simul-placeholder-email{
		left:20rpx;
		top:30rpx;
	}
	.simul-placeholder-pwd{
		left:20rpx;
		top:150rpx;
	}
	.btn{
		width:440rpx;
		height:80rpx;
		background-color:#242426;
		border: 1px solid #000000;
		font-size:28rpx;
		letter-spacing:3rpx;
		color:#b5b5b5;
		line-height: 80rpx;
		margin-top: 60rpx;
	}
	 .return-pwd{
		 font-size:24rpx;
		 text-align: center;
		 color: rgb(195,195,195);
		 margin-top: 50rpx;
		 letter-spacing:3rpx;
		 font-weight: 500;
	 }
	 .return-reg{
		 font-size:24rpx;
		 font-weight: bold;
		 text-align: center;
		 color: rgb(108,108,112);
		 margin-top: 20rpx;
		 letter-spacing:3rpx;
	 }
	 input {
		caret-color:#ffffff;
	 }
	.title {
		font-size: 36rpx;
		color: #d72c2c;
	}
</style>
