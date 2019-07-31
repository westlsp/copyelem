<template>
    <div id="mine_yue" >
				<div class="mineyue_aller">
					<div class="recent_dingdan">
						<div class="midder_mine" style="height:100%;width: 120px;border-bottom: 2px solid #1e89e0;font-size: 15px;font-weight: 600;"> 
							账户余额
						</div>
					</div>
					<div class="hors_verc" style="height:80px;width: 95%;margin:10px 20px;position: relative;background: #f5f5f5;border:1px solid #cccccc;">
						<p style="margin:0 20px;">当前账户余额：<span style="color:red;">{{zichang}}</span>元</p><span style="padding: 5px 20px;text-align: center;background: #cccccc;color:white;">提现</span>
					</div>
					<div style="height:60px;width: 95%;margin:30px 20px;position: relative;">
						<p style="font-weight: 600;margin:10px 20px;">账户资产明细</p>
						<ul style="margin-left:20px;">
							<li style="color:#999999;float:left;padding: 5px;">分类</li>
							<li class="il_float"><a href="">全部</a></li>
							<li class="il_float"><a href="">充值</a></li>
							<li class="il_float"><a href="">余额消费</a></li>
							<li class="il_float"><a href="">第三方支付</a></li>
							<li class="il_float"><a href="">订单退款</a></li>
							<li class="il_float"><a href="">提现</a></li>
						</ul>
						<br>
					</div>
					<div class="mingxi_sg">
						<div class="mxmsg_header">
						<div class="mx_menuli hors_verc">创建时间</div>
						<div class="mx_menuli hors_verc">交易类型</div>
						<div class="mx_menuli hors_verc">金额更变</div>
						<div class="mx_menuli hors_verc">余额</div>
						</div>
						<div class="midder_mine" style="height:300px;width: 95%;position: relative;">
						<img src="../assets/wudingdan_img.png" alt="" height="100px" width="80px">
						<p style="color:#999999;">暂无记录</p>
					</div>
					</div>
				</div>
			</div>
</template>
<script>
export default {
	name:"profile_yue",
	data() {
		return {
			zichang:JSON.parse(this.GLOBAL.alldata.zichang).count
		}
	},
}
</script>
<style lang="scss" scoped>
    #mine_yue{
		width:100%;
		height:auto;
		position:relative;
		.mineyue_aller{
		width:100%;
		height:auto;
		position: relative;
		background: white;
		border:1px solid #cccccc;
		margin-bottom: 20px;
		padding: 20px 0;
	}
	.il_float{
		float:left;
		padding: 5px;
		margin-left:20px;
	}
	.il_float:hover{
		background: #f5f5f5;
	}
	.mingxi_sg{
		height:auto;
		width: 95%;
		margin:0 20px;
		
		position: relative;
		
	}
	.mxmsg_header{
		width: 100%;
		position: relative;
		height:30px;
		display: flex;
	}
	.mx_menuli{
		flex:1;
		padding-left:20px;
		background: #f5f5f5;
	}
	}
</style>