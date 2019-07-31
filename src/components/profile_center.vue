<template>
    <div id="center_manmsg">
				<div class="center_manmsgheader">
					<div class="qianm_img midder_mine">
						<router-link :to="{name:'profileziliao'}">
							<el-tooltip content="编辑资料" placement="top">
								<img :src="img_touxiang" alt="" class="regren_img" height="100px" width="100px">
							</el-tooltip>
						</router-link>
						<div>
							<p style="font-size: 16px;padding: 2px 10px;">{{username}}</p>
							<p style="font-size: 12px;color:#999999;padding: 2px 10px;">是不是额的睡不着，吃个夜宵</p>
						</div>
					</div>
					<div class="hbjbye midder_mine">
						<div class="hbjbye_div">
							<router-link :to="{name:'profilehongbao'}">
							<p class="hbjbye_p1">我的红包</p>
							<p class="hbjbye_p2" style="color:red;">{{hongbao}}<span class="hbjbye_p2_span">个</span></p>
							</router-link>
						</div>
					</div>
					<div class="hbjbye midder_mine">
						<div class="hbjbye_div">
							<router-link :to="{name:'profilejinbi'}">
							<p class="hbjbye_p1">我的金币</p>
							<p class="hbjbye_p2" style="color:rgba(10,132,24,1.00);">{{jinbi}}<span class="hbjbye_p2_span">币</span></p>
							</router-link>
						</div>
					</div>
					<div class="hbjbye midder_mine">
						<div class="hbjbye_div">
							<router-link :to="{name:'profileyue'}">
							<p class="hbjbye_p1">我的资产</p>
							<p class="hbjbye_p2" style="color:orange;">{{zichang}}<span class="hbjbye_p2_span">元</span></p>
							</router-link>
						</div>
					</div>
				</div>
				<div class="center_manmsgmidder">
					<div class="recent_dingdan">
						<div class="midder_mine" style="height:100%;width: 80px;border-bottom: 2px solid #1e89e0;font-size: 15px;font-weight: 600;"> 
							最近订单
						</div>
						<div style="position: absolute;right:0;top:0;color:#999999;">
							<router-link :to="{name:'profiledingdan'}">查看全部订单></router-link>
						</div>
					</div>
					<div class="midder_mine" style="height:300px;width: 95%;position: relative;">
						<img src="../assets/wudingdan_img.png" alt="" height="100px" width="80px">
						<p style="color:#999999;">你最近没有下过单哦，现在就去<a href="" style="color:#1e89e0;">订餐</a>吧</p>
					</div>
					<!--dingdanstyle></dingdanstyle>-->
				</div>
				<div class="center_manmsgfooter">
					<div class="recent_dingdan">
						<div class="midder_mine recent_dingdan_div"> 
							美食足迹
						</div>
						<div class="midder_mine recent_dingdan_div"> 
							<a href="">我的收藏</a>
						</div>
					</div>
					<div class="meishi">
						<div class="store_msg">
			<img src="../assets/test.jpg" alt="" width="60px" height="60px">
			<span style="position: absolute;left:90px;color:black;font-weight: 600;font-size: 14px;">大家看看是</span>
			<div style="position: absolute;width: 140px;height:20px;left:90px;top:44px;">
				<el-rate
  				value="5"
 				 disabled
 				 show-score
  				text-color="#ff9900"
  				score-template="{value}"
				>
				</el-rate>
			</div>
			<span style="position: absolute;left:90px;color:#999999;font-size: 11x;top:64px;">配送费￥1</span>
			<span style="position: absolute;left:24px;color:#999999;font-size: 11px;top:90px;">42分钟</span>
						</div>
					</div>
				</div>
			</div>
</template>
<script>
import dingdanstyle from './dingdan_style'
export default {
	name:"profile_center",
	data() {
		return {
			username:this.GLOBAL.alldata.username,
			hongbao:JSON.parse(this.GLOBAL.alldata.hongbao).count,
			jinbi:JSON.parse(this.GLOBAL.alldata.jinbi).count,
			zichang:JSON.parse(this.GLOBAL.alldata.zichang).count,
			img_touxiang:"http://localhost:3000"+this.GLOBAL.alldata.touxiang,
		}
	},
	components:{
		dingdanstyle
	}
}
</script>
<style lang="scss" scoped>
    #center_manmsg{
		width:100%;
		height:auto;
		position:relative;
		.center_manmsgheader{
		width:100%;
		height:150px;
		position: relative;
		background: white;
		border:1px solid #cccccc;
		margin-bottom: 20px;
		display: flex;
	}
	.center_manmsgmidder{
		width:100%;
		height:auto;
		position: relative;
		background: white;
		border:1px solid #cccccc;
		margin-bottom: 20px;
		padding: 20px 0;
	}
	.qianm_img{
		flex:4;
	}
	.regren_img{
       border-radius: 50%;
	}
	.regren_img:hover{
		opacity: 0.8;
	}
	.hbjbye{
		flex:2;
	}
	.hbjbye_div{
		height:60%;position: relative;width: 100%;border-left:1px solid #cccccc;
	}
	.hbjbye_p1{
		text-align: center;padding: 10px 0;
	}
	.hbjbye_p2{
		font-size: 28px;font-weight: 600;text-align: center;
	}
	.hbjbye_p2_span{
		font-size:12px;
	}
	.recent_dingdan{
		height:30px;
		width: 95%;
		position: relative;
		border-bottom:2px solid #cccccc;
		margin:0 20px;
	}
	 .recent_dingdan_div{
		height:100%;width: 80px;border-bottom: 2px solid #1e89e0;font-size: 15px;font-weight: 600;float: left;
	}
	.center_manmsgfooter{
		width:100%;
		height:auto;
		position: relative;
		background: white;
		border:1px solid #cccccc;
		margin-bottom: 20px;
		padding: 20px 0;
	}
	.meishi{
		height:120px;
		width: 95%;
		position: relative;
		border-bottom:1px solid #cccccc;
		margin:0 20px;
		display: flex;
	}
	.store_msg{
		height:80px;
		width: 31%;
		position: relative;
		float: left;
		border-bottom: 1px solid #cccccc;
		padding: 20px 0;
	}
	.store_msg:hover{
		background: #f5f5f5;
	}
	.store_msg img{
		position: absolute;
		left:15px;
	}
	}
</style>