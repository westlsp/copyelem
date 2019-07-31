<template>
    <div class="liucheng_all">
	<div class="liuchengj midder_mine">
		<div class="lc_kuang midder_mine">
			1
		</div>
	</div>
	<div class="liuchengj midder_mine">
		<div class="lc_kuang1 midder_mine">
			2
		</div>
	</div>
	<div class="liuchengj midder_mine">
		<div class="lc_kuang2 midder_mine">
			3
		</div>
	</div>
	<div class="liuchengj midder_mine">
		<div class="lc_kuang3 midder_mine">
			4
		</div>
	</div>
</div>
</template>
<script>
export default {
    name:"liucheng"
}
</script>
<style lang="scss" scoped>
    .liucheng_all{
		width:100%;
		position: relative;
		height:280px;
		background-color: #ebeef2;
		display: flex;

		.liuchengj{
		flex:1;
		position: relative;
	}
	.lc_kuang{
		width: 60px;
		height:60px;
		background-color: #0578ec;
		border-radius: 50%;
		color:white;
		font-size: 20px;
		position: relative;
	}
	.lc_kuang::after{
		content:"提交申请";
		position:absolute;
		bottom: -25px;
		color:black;
		font-size: 12px;
	}
	.lc_kuang1{
		width: 70px;
		height:70px;
		background-color: #0578ec;
		border-radius: 50%;
		color:white;
		font-size: 25px;
		position: relative;
	}
	.lc_kuang1::after{
		content:"审核签约";
		position:absolute;
		bottom: -25px;
		color:black;
		font-size: 14px;
	}
	.lc_kuang2{
		width: 80px;
		height:80px;
		background-color: #0578ec;
		border-radius: 50%;
		color:white;
		font-size: 30px;
		position: relative;
	}
	.lc_kuang2::after{
		content:"录入菜单";
		position:absolute;
		bottom: -25px;
		color:black;
		font-size: 16px;
	}
	.lc_kuang3{
		width: 90px;
		height:90px;
		background-color: #0578ec;
		border-radius: 50%;
		color:white;
		font-size: 35px;
		position: relative;
	}
	.lc_kuang3::after{
		content:"门店上线";
		position:absolute;
		bottom: -25px;
		color:black;
		font-size: 18px;
	}
	}
	
</style>
