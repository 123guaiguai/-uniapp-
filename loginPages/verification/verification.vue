<template>
	<view class="page">
		<view class="container">
			<view class="header">
				<text class="iconfont icon-zuojiantou1" @click="goBack"></text>
				<text class="title">Verification</text>
			</view>
			<view class="circle1">
				<view class="circle2">
					<text class="iconfont icon-yanzhengma"></text>
				</view>
			</view>
			<text class="tip">Verification Code</text>
			<text class="describe">我们将向你的手机发送验证码\n注意接收</text>
			<view class="inputContainer">
				<input type="number" class="verification" maxlength="5" @input="handleVerification" />
				<view :class="['code',verificationCode[index]?'activeCode':'']" v-for="(item,index) in verificationList"
					:key="index">
					{{verificationCode[index]?verificationCode[index]:''}}
				</view>
			</view>
			<view class="phone">
				<input type="number" class="phoneInput" maxlength="15" />
				<text class="iconfont icon-bianji"></text>
			</view>
			<view class="send">
				Send
			</view>
			<view class="submit">
				Submit
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				verificationList: 5,
				verificationCode: '', //用户填写上交的验证码
				phone: '', //用户填写上交的手机号码
				intervalTime: 60, //两次验证码发送时间间隔60s
			};
		},

		methods: {
			goBack() {
				uni.navigateBack();
			},
			handleVerification(e) { //接收用户输入的验证码，并且渲染到页面上
				this.verificationCode = e.detail.value;
			}
		}
	}
</script>

<style lang="less">
	@colorBlack: #33357d;
	@colorNormal: #e6e9f6;
	@colorFont: #a2a2be;
	@colorLight: #fafafe;

	.page {
		padding: 0 40rpx;
		padding-top: 40rpx;
		background-color: @colorNormal;

		.container {
			display: flex;
			flex-direction: column;
			align-items: center;
			background-color: white;
			height: 92%;
			border-radius: 100rpx;
			padding: 0 50rpx;
			padding-top: 50rpx;

			.header {
				position: relative;
				width: 100%;

				.icon-zuojiantou1 {
					color: @colorBlack;
					font-weight: 700;
					font-size: 38rpx;
					display: inline-block;
					opacity: .8;
					width: 50rpx;
					height: 50rpx;
					line-height: 50rpx;
					text-align: center;
					border: 4rpx solid @colorNormal;
					border-radius: 50% 50%;
				}

				.title {
					position: absolute;
					top: 0;
					right: 0;
					bottom: 0;
					left: 0;
					margin: auto;
					width: 200rpx;
					margin: auto;
					font-weight: 700;
					line-height: 50rpx;
					color: @colorBlack;
					opacity: .8;
					font-size: 29rpx;
					text-align: center;
				}
			}

			.circle1 {
				width: 300rpx;
				height: 300rpx;
				margin: 0 auto;
				margin-top: 30rpx;
				border-radius: 50% 50%;
				border: 2rpx dashed rgb(247, 232, 147);
				display: flex;
				justify-content: center;
				align-items: center;

				.circle2 {
					width: 220rpx;
					height: 220rpx;
					border-radius: 50% 50%;
					background-color: @colorLight;
					display: flex;
					justify-content: center;
					align-items: center;

					.icon-yanzhengma {
						width: 160rpx;
						height: 160rpx;
						text-align: center;
						line-height: 160rpx;
						background-color: @colorBlack;
						border-radius: 50% 50%;
						color: white;
						font-size: 80rpx;
					}
				}
			}

			.tip {
				font-size: 40rpx;
				font-weight: 700;
				color: @colorBlack;
				text-align: center;
				margin-top: 30rpx;
			}

			.describe {
				text-align: center;
				color: @colorFont;
				font-size: 24rpx;
				margin-top: 30rpx;
				letter-spacing: 4rpx;
			}

			.inputContainer {
				position: relative;
				overflow: hidden;
				margin-top: 30rpx;
				height: 105rpx;
				width: 100%;
				display: flex;
				justify-content: space-between;

				.verification {
					position: absolute;
					box-sizing: border-box;
					height: 103rpx;
					width: 200%;
					right: 0;
					// color:transparent;
					// caret-color: transparent;
					font-size: 1rpx;
				}

				.code {
					box-sizing: border-box;
					height: 103rpx;
					width: 103rpx;
					background-color: @colorLight;
					border-radius: 18rpx;
					text-align: center;
					line-height: 103rpx;
					font-size: 40rpx;
					color: @colorBlack;
				}

				.activeCode {
					border: 2rpx solid @colorBlack;
				}
			}

			.phone {
				display: flex;
				margin-top: 40rpx;
				margin-bottom: 70rpx;

				.phoneInput {
					border-bottom: 4rpx dashed @colorNormal;
					color: @colorFont;
					text-align: center;
					height: 55rpx;
				}

				.icon-bianji {
					height: 55rpx;
					width: 55rpx;
					border: 2rpx solid @colorNormal;
					text-align: center;
					line-height: 55rpx;
					color: @colorBlack;
					font-size: 38rpx;
					border-radius: 50% 50%;
				}
			}

			.send,
			.submit {
				width: 90%;
				height: 80rpx;
				border: 2rpx solid @colorFont;
				border-radius: 40rpx;
				text-align: center;
				line-height: 80rpx;
				color: @colorBlack;
				font-weight: 700;
				font-size: 28rpx;
			}

			.submit {
				margin-top: 40rpx;
				background-color: @colorBlack;
				color: white;
			}
		}
	}
</style>
