<template>
    <div class="img_header">
	<div class="home_contain3">
		<div class="header_top">
			<div class="logo_one"></div>
			<a href="#" class="kefu">在线客服</a>
		</div>
		<div class="header_footer">
			<p style="color:white;font-size: 60px;text-align: center;margin-top:30px;">加入KMK外卖平台和MKM平台 翻倍赚大钱</p>
			<ul class="all_ul midder_mine">
				<li class="hour">24小时</li>
				<li class="wan">300万</li>
				<li class='city'>2000城市</li>
				<li class='user'>2.6亿</li>
			</ul>
		</div>
			<router-link :to="{name:'shenghe'}" class="kaidian_clk midder_mine" style="color:white;font-size:16px;">我要开店</router-link>
		 <el-tooltip class="item" effect="dark" content="暂无任何记录" placement="bottom">
		<div style="margin:10px auto;width: 240px;height:auto;" class="midder_mine">
			<a href="" style="color:white;">查看开店记录</a>
		</div>
		</el-tooltip>
	</div>
</div>
</template>
<script>
export default {
    name:"openstore_header"
}
</script>
<style lang="scss" scoped>
    .img_header{
		width:100%;
		height:560px;
		background:url(../assets/background2.jpg);
		background-size: 100% 100%;
		position: relative;
		.header_top{
		width:100%;
		position: relative;
		height:80px;
	}
	.logo_one{
		height:50%;
		width:120px;
		background:url(../assets/mkm_logo1.png);
		background-size: 100% 100%;
		position: absolute;
		top:10px;
		left:100px;
	}
	.logo_one::after{
		content:"商户中心";
		position: absolute;
		right:-90px;
		font-size: 16px;
		color:white;
		top:10px;
	}
	.kefu{
		position: absolute;
		right:120px;
		top:20px;
		color:white;
		font-size: 14px;
	}
	.header_footer{
		height:auto;
		width: 100%;
		position: relative;
	}
	.all{
		position: relative;
	}
	.all_ul li{
		border-right:1px dashed white;
		font-size:60px;
		margin-top:50px;
		padding:0 50px;
		color:#fff000;
		position: relative;
	}
	.all_ul li:last-child{
		border-right:none;
	}
	.hour::after{
		content:"极速开店";
		color:white;
		position: absolute;
		font-size: 20px;
		left:110px;
		bottom:-15px;
	}
	.wan::after{
		content:"优质商家";
		color:white;
		position: absolute;
		font-size: 20px;
		left:100px;
		bottom:-15px;
	}
	.city::after{
		content:"全国覆盖";
		color:white;
		position: absolute;
		font-size: 20px;
		left:140px;
		bottom:-15px;
	}
	.user::after{
		content:"累计用户";
		color:white;
		position: absolute;
		font-size: 20px;
		left:90px;
		bottom:-15px;
	}
	.kaidian_clk{
		width: 240px;
		height:60px;
		background: #1989fa;
		color:white;
		border-radius: 10px;
		font-size: 24px;
		opacity: 1;
		margin:0 auto;
		margin-top:80px;
	}
	.kaidian_clk:hover{
		opacity: 0.9;
	}
	}
</style>