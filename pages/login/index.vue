<template>
	<view class="content">
		 <view class="login-area">
			 <view class="animate-fadeInLeft login-area-transcript" v-if="btnType == 2">
				 <!-- <text class="simul-placeholder simul-placeholder-email"  :class="loginEmailAnimateBoolean ? 'loginEmailAnimate': 'unLoginEmailAnimate'">电子邮件或电话号码</text> -->
				 <!-- <text class="simul-placeholder simul-placeholder-pwd"  :class="loginPwdAnimateBoolean ? 'loginPwdAnimate': 'unLoginPwdAnimate'">密码</text> -->
				 <input type="text" class="inp-common inp-email"  placeholder="电子邮件或电话号码" v-model="userName" value="" @focus="hanndleEmailAnimate(1)" @blur="resetHanndleEmailAnimate(1)"/>
				 <input type="password" class="inp-common inp-pwd" placeholder="密码" v-model="passWord" value="" @focus="hanndlePwdAnimate(1)" @blur="resetHanndlePwdAnimate(1)"/>
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
				<input type="text" class="inp-common inp-pwd"  v-model="unPassword" placeholder="设置密码" value="" @focus="hanndlePwdAnimate(2)"/>
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
				userName:"15600117788",
				passWord:"123456UUuu",
				unUserName:"",
				unPassword:"",
				uncheckPassword:"",
				btnType : 2, //1:注册  2:登录
				loginEmailAnimateBoolean:false,
				loginPwdAnimateBoolean:false
			}
		},
		onLoad() {
		},
		methods: {
			goRegiter(){
				this.unPassword = "";
				this.unUserName = "";
				this.btnType = 1;
			},
			goLogin(){
				this.btnType = 2;
			},
			// 字符串转base64
			encode(str){
			    // 对字符串进行编码
			    var encode = encodeURI(str);
			    // 对编码的字符串转化base64
			    var base64 = btoa(encode);
			    return base64;
			},
			// base64转字符串
			decode(base64){
			    // 对base64转编码
			    var decode = atob(base64);
			    // 编码转字符串
			    var str = decodeURI(decode);
			    return str;
			},
			checkAccount(user){
				let regEmail = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
				let regPhone = /^1(3\d|4[5-9]|5[0-35-9]|6[2567]|7[0-8]|8\d|9[0-35-9])\d{8}$/;
				if(regEmail.test(user) || regPhone.test(user)){
					return true;
				}
				return false;
			},
			randomString(e) {    
			    e = e || 16;
			    var t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",
			    a = t.length,
			    n = "";
			    for (let i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a));
			    return n
			},
			insertStr(soure, start, newStr){   
			   return soure.slice(0, start) + newStr + soure.slice(start);
			},
			genPassword(){
				let randomArray = [Math.ceil(Math.random()*9),Math.ceil(Math.random()*9),Math.ceil(Math.random()*9)];
				let pwdEncodeStr = this.encode(this.passWord);
				console.log("---",pwdEncodeStr);
				let randomStr = this.randomString(32);
				let random10Str = this.randomString(10);
				let a1 = this.insertStr(pwdEncodeStr,0,randomArray[0]);
				let a2 = this.insertStr(a1,2,randomArray[1]);
				console.log(a2);
				let st = randomStr + a2;
				if(st.indexOf("==") !== -1){
					return {data : st.replace("==",random10Str) ,d:"true"}
				}else{
					return {data : st ,d:"false"};
				}
			},
			loginAccount(){
				let checkRes = this.checkAccount(this.userName);
				if(!checkRes){
					uni.showToast({
						title: '账号格式错误',
						icon:'none',
						duration: 2000
					});
					return;
				}
				//至少八个字符，至少一个大写字母，一个小写字母，一个数字
				let regPwd =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
				if(!regPwd.test(this.passWord)){
					uni.showToast({
						title: '密码格式错误',
						icon:'none',
						duration: 2000
					});
					return;
				}
				let param = {
					"userName" : this.userName,
					"password" : this.genPassword().data,
					"d" : this.genPassword().d
				}
				loginReq(param).then((res)=>{
					if(res.success){
						// uni.getStorageSync("token");
						uni.setStorageSync('token', res.data.token);
						this.$Router.push('/pages/dashboard/index')
					}else{
						uni.showToast({
							title: res.message,
							icon:'none',
							duration: 2000
						});
					}
				});
			},
			regiterAccount(){
				let checkRes = this.checkAccount(this.unUserName);
				if(!checkRes){
					uni.showToast({
						title: '账号格式错误',
						icon:'none',
						duration: 2000
					});
					return;
				}
				//至少八个字符，至少一个大写字母，一个小写字母，一个数字和一个特殊字符
				let regPwd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
				if(!regPwd.test(this.unPassword)){
					uni.showToast({
						title: '密码格式错误',
						icon:'none',
						duration: 2000
					});
					return;
				}
				//md5.hex_md5(this.unPassword)
				let param = {
					"userName" : this.unUserName,
					"password" : this.unPassword,
				}
				regiterReq(param).then((res)=>{
					if(res.success){
						this.userName = this.unUserName;
						this.passWord = "";
						this.btnType = 2;
						uni.showToast({
							title: res.message,
							duration: 3000
						});
					}else{
						uni.showToast({
							title: res.message,
							icon:'none',
							duration: 3000
						});
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
