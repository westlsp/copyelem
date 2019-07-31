<template>
    <div id="jinbi">
				<div class="jinbi_aller">
					<div class="recent_dingdan">
						<div class="midder_mine" style="height:100%;width: 120px;border-bottom: 2px solid #1e89e0;font-size: 15px;font-weight: 600;"> 
							我的金币
						</div>
					</div>
					<div class="hors_verc" style="height:80px;width: 95%;margin:10px 20px;position: relative;background: #f5f5f5;border:1px solid #cccccc;">
						<p style="margin:0 20px;">当前账户金币：<span style="color:red;">{{jinbi}}</span>元</p><span style="padding: 5px 20px;text-align: center;"><a href="" style="color:#1e89e0;">如何获取金币?</a></span>
					</div>
					<div class="mingxi_sg">
						<p style="padding: 20px;">最近30天金币记录</p>
						<div class="mxmsg_header">
						<div class="mx_menuli hors_verc">创建时间</div>
						<div class="mx_menuli hors_verc">交易类型</div>
						<div class="mx_menuli hors_verc">金额更变</div>
						<div class="mx_menuli hors_verc">余额</div>
						</div>
						<div class="midder_mine" style="height:300px;width: 95%;position: relative;">
						<img src="../assets/jinbi.gif" alt="" height="100px" width="80px">
						<p style="color:#999999;">正在载入金币记录</p>
					</div>
					</div>
				</div>
			</div>
</template>
<script>
export default {
	name:"profile_jinbi",
	data() {
		return {
			jinbi:JSON.parse(this.GLOBAL.alldata.jinbi).count,
		}
	},
}
</script>
<style lang="scss" scoped>
    #jinbi{
		width:100%;
		height:auto;
		position:relative;
		.jinbi_aller{
		width:100%;
		height:auto;
		position: relative;
		background: white;
		border:1px solid #cccccc;
		margin-bottom: 20px;
		padding: 20px 0;
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