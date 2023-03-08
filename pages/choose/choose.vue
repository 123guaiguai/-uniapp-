<template>
	<view class="page">
		<view class="label-container">
		  <view class="label">
		    D
		  </view>
		</view>
		<text class="welcome">Welcome</text>
		<text class="describe">碳教授\n帮您更好得实现企业碳盘查</text>
		<view class="login" @click="goLogin">
		  Login
		</view>
		<view class="register" @click="goRegister">
		  Register
		</view>
		<text class="team">来自团队</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
			
		methods:{
			goLogin:function(){//跳转至登陆页面
			    uni.navigateTo({
			      url: '/loginPages/login/login',
			    })
			  },
			  goRegister:function(){//跳转到注册页面
			    uni.navigateTo({
			      url: '/loginPages/register/register',
			    })
			  },
		}
	}
</script>

<style lang="less">
.page {
  
  background-image: linear-gradient(to top, #17b8bd, #28c3b9, #42ccb1, #5ed6a8, #7bde9d);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left:6%;
  padding-right:6%;
  .label-container {
    width: 90rpx;
    height: 90rpx;
    background-color: #f1fefe;
    font-size: 52rpx;
    font-weight: bold;
    line-height: 90rpx;
    text-align: center;
    border-radius: 16rpx;
    margin-bottom:8%;
    .label {
      width: 100%;
      height: 100%;
      background-image: linear-gradient(to top, #17b8bd, #28c3b9, #42ccb1, #5ed6a8, #7bde9d);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }
  }
  .welcome{
    color:#f1fefe;
    font-family: 'Microsoft YaHei',arial,tahoma,\5b8b\4f53,sans-serif;
    font-size:50rpx;
    font-weight:700;
    margin-bottom:6%;
    
  }
  .describe{
    color:#aeedec;
    font-size:30rpx;
    letter-spacing: 4rpx;
    line-height: 60rpx;
    margin-bottom: 15%;
  }
  .login,.register{
    height:110rpx;
    background-color: #f0f7f7;
    width:100%;
    margin-bottom:6%;
    border-radius: 10rpx;
    line-height: 110rpx;
    text-align: center;
    font-family: 'Microsoft YaHei',arial,tahoma,\5b8b\4f53,sans-serif;
    font-size:28rpx;
    font-weight:700;
    color:#17b8bd;
    box-sizing: border-box;
  }
  .register{
    background-color: transparent;
    color:#e2fdfd;
    border:3rpx solid #e2fdfd;
  }
  .team{
    text-align: center;
    color:#75d1d3;
    margin-bottom:13%;
  }
}
</style>
