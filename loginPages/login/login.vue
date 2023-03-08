<template>
	<view class="page">
		<text class="iconfont icon-zuojiantou" @click="backChoose"></text>
		<text class="hello">Hello</text>
		<text class="continue">登陆账号开始个性化碳盘查！</text>
		<view class="phoneTitle">
			<text class="name">Phone</text>
			<text class="warnning" v-if="phoneForm===2">手机号格式错误!</text>
		</view>
		<view :class="['inputContainer', phoneForm===2?'formError':'',phoneForm===1?'formCorrect':'']">
			<input type="number" class="phoneInput" @input="handlePhone" @blur="checkPhone" />
			<view class="checkMark" v-if="phoneForm===1">
				<text class="iconfont icon-duihao"></text>
			</view>
			<view class="cross" v-else-if="phoneForm===2">
				<text class="iconfont icon-chahao"></text>
			</view>
		</view>
		<view class="passTitle">
			<text class="name">Password</text>
			<text class="warnning" v-if="passwordForm===2">密码包含数字,字母或字符至少两种</text>
			<text class="error" v-if="passwordError">密码输入错误！</text>
		</view>
		<view
			:class="['inputContainer', (passwordForm===2||passwordError)?'formError':'', (passwordForm===1&&!passwordError)?'formCorrect':'']">
			<input type="password" class="passInput" @input="handlePassword" @blur="checkPassword" />
			<view class="checkMark" v-if="(passwordForm===1)&&(!passwordError)">
				<text class="iconfont icon-duihao"></text>
			</view>
			<view class="cross" v-else-if="(passwordForm===2)||(passwordError)">
				<text class="iconfont icon-chahao"></text>
			</view>
		</view>
		<text class="forgot" @click="goVerification">手机验证码登陆</text>
		<view class="login">
			登陆
		</view>
	</view>
</template>

<script>
	import {
		checkPhone,
		checkPassword
	} from "../../utils/check.js";
	export default {
		data() {
			return {
				phoneForm: 0, //手机格式是否正确，1显示对号，2显示叉号，0为不显示任何符号
				passwordForm: 0, //密码格式是否正确，1显示对号，2显示叉号，0为不显示任何符号
				passwordError: false, //密码输入是否错误，默认为false不显示，为true时显示叉号
				phone: '', //电话号码
				password: '', //密码
			};
		},

		methods: {
			goVerification: function() {
				uni.navigateTo({
					url: '/loginPages/verification/verification',
				})
			},
			handlePhone(e) { //获取用户输入的电话号码
				let value = e.detail.value;
				if (!value) {
					this.phoneForm = 0;
				}
				this.phone = value;
			},
			checkPhone() { //检查手机格式
				if (!this.phone) {
					return;
				}
				if (checkPhone(this.phone)) {
					this.phoneForm = 1;
				} else {
					this.phoneForm = 2;
				}
			},
			handlePassword(e) { //获取用户输入的密码
				let value = e.detail.value;
				if (!value) {
					this.passwordForm = 0;
				}
				this.password = value;
			},
			checkPassword() { //检查密码格式
				if (!this.password) {
					return;
				}
				if (checkPassword(this.password)) {
					this.passwordForm = 1;
				} else {
					this.passwordForm = 2
				}
			},
			backChoose() { //退回选择页面
				uni.navigateBack();
			},
		}
	}
</script>

<style lang="less">
	.page {
		
		display: flex;
		flex-direction: column;
		padding-top: 10%;
		padding-left: 40rpx;
		padding-right: 40rpx;

		.icon-zuojiantou {
			font-size: 65rpx;
			color: #c1c6c4;
			margin-bottom: 120rpx;
		}

		.hello {
			width: 120rpx;
			font-size: 40rpx;
			font-weight: 700;
			background-image: linear-gradient(to left, #17b8bd, #28c3b9, #42ccb1, #5ed6a8, #7bde9d);
			-webkit-background-clip: text;
			background-clip: text;
			color: transparent;
			margin-bottom: 30rpx;
		}

		.continue {
			font-weight: 700;
			font-size: 32rpx;
			color: #abaaab;
			margin-bottom: 110rpx;
			letter-spacing: 4rpx;
		}

		.phoneTitle,
		.passTitle {
			font-size: 26rpx;
			color: rgb(177, 174, 174);

			.name {
				margin-right: 100rpx;
				font-weight: 700;
				color: rgb(219, 219, 219);
				font-size: 30rpx;

			}

			.warnning,
			.error {
				color: rgb(240, 99, 99);
			}

			// .checkFormWarnning{//展示格式不对的提示语（包括手机号和密码）
			//   display:inline;
			// }
			// .checkPasswordError{//展示密码输入错误提示语
			//   display:inline;
			// }
		}

		.inputContainer {
			padding: 18rpx 0;
			border-bottom: 5rpx solid rgba(238, 233, 233, .7);
			margin-bottom: 60rpx;
			position: relative;
			transition: all .2s;

			.phoneInput,
			.passInput {
				font-size: 34rpx;
				color: #8d8989;
			}

			.checkMark,
			.cross {
				width: 40rpx;
				height: 40rpx;
				text-align: center;
				line-height: 35rpx;
				background-color: rgb(23, 181, 188);
				border-radius: 50% 50%;
				position: absolute;
				right: 0;
				bottom: 18rpx;

				.icon-duihao,
				.icon-chahao {
					color: #e2fdfd;
					font-size: 30rpx;
				}
			}

			.cross {
				background-color: #f092a6;

				.icon-chahao {
					color: #f7f2f3
				}
			}
		}

		.formCorrect {
			//格式正确时输入框的下边框颜色
			border-color: #ace6e7;
		}

		.formError {
			//格式错误时输入框的下边框颜色
			border-color: #f5c6d7;
		}

		.forgot {
			width: 220rpx;
			color: #28c3b9;
			font-size: 28rpx;
			text-align: end;
			margin-left: auto;
		}

		.login {
			height: 110rpx;
			background-image: linear-gradient(to left, #17b8bd, #28c3b9, #42ccb1, #5ed6a8, #7bde9d);
			border-radius: 10rpx;
			text-align: center;
			line-height: 110rpx;
			color: #e2fdfd;
			font-size: 32rpx;
			font-weight: 700;
			margin-top: 80rpx;
		}
	}
</style>
