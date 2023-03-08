<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import "./iconfont/iconfont.css";
	page{
		height:100vh;
		margin:0;
		padding:0;
	}
		
	.page{
		height:100vh;
		box-sizing: border-box;
	}
	
</style>
