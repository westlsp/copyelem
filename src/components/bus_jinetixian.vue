<template>
    <div class="jinetixian tong_border">
				<div class="biaoti">商家<span class="biaoti_sl">/金额提现</span></div>
				<p class="bianyuan">总金额<input type="text" class="yuanshi_pwd" disabled v-model="money">&emsp;<a href="" style='color:blue;'>点击提现</a></p>
			</div>
</template>
<script>
export default {
	name:"bus_jinetixian",
	data() {
		return {
			money:this.GLOBAL.alldata2.money,
		}
	},
}
</script>
<style lang="scss" scoped>
    .tong_border{
		border:1px solid #cccccc;
		background: white;
		margin-top:20px;
		position: relative;
		width: 100%;
		height:auto;
		padding: 20px 0;
	}
	.jinetixian{
		.yuanshi_pwd{
		height:40px;
		width: 200px;
		position: relative;
		margin-left:20px;
		border:1px solid #dddddd;
	}
	.bianyuan{
		margin-left:20px;
		margin-top: 20px;
	}
	.biaoti{
		border-bottom: 2px solid #dddddd;width: 96%;height:auto;margin:0 auto;font-size: 16px;font-weight: 600;
	}
	.biaoti_sl{
		font-size: 12px;font-weight: 200;color:#999999;
	}
	.submit{
		position:absolute;
		right:20px;
		bottom:20px;
		height:40px;
		width: 120px;
		background: #5cb87a;
		color:white;
		font-size: 16px;
		
	}
	input{
		padding-left: 20px;
	}
	.imgborder{
		margin-left: 20px;
	}
	}
	
</style>