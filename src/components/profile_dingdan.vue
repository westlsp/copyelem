<template>
    <div id="mine_dingdan">
				<div class="minedd_aller">
					<div class="recent_dingdan">
						<div class="midder_mine" style="height:100%;width: 120px;border-bottom: 2px solid #1e89e0;font-size: 15px;font-weight: 600;"> 
							近三个月订单
						</div>
						<img src="../assets/nawaimai.png" alt="" height="45px" width="150px" style="position: absolute;right:0;top:-10px;">
					</div>
					<div class="midder_mine" style="height:300px;width: 95%;position: relative;" v-if="dingdanmsg=='' || dingdanmsg==null">
						<img src="../assets/wudingdan_img.png" alt="" height="100px" width="80px">
						<p style="color:#999999;">你最近没有下过单哦，现在就去<router-link :to="{name:'index'}" style="color:blue">订餐</router-link>吧</p>
					</div>
					<dingdancon v-else></dingdancon>
				</div>
			</div>
</template>
<script>
	import dingdancon from './dingdan_style'
export default {
	name:"profile_dingdan",
	data() {
		return {
			dingdanmsg:JSON.parse(sessionStorage.getItem('alldata')).dingdan
		}
	},
	components:{
		dingdancon
	}
}
</script>
<style lang="scss" scoped>
    #mine_dingdan{
		width:100%;
		height:auto;
		position:relative;
		.minedd_aller{
		width:100%;
		height:auto;
		position: relative;
		background: white;
		border:1px solid #cccccc;
		margin-bottom: 20px;
		padding: 20px 0;
	}
	}
</style>