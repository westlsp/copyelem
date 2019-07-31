<template>
    <div class="serice">
	<div class="home_contain2 service_all">
		<div class="list_service">
			<ul>
				<li><strong><a href="">用户帮助</a></strong></li>
				<li><a href="">服务中心</a></li>
				<li><a href="">常见问题</a></li>
			</ul>
		</div>
		<div class="list_service">
			<ul>
				<li><strong><a href="">商务合作</a></strong></li>
				<li><a href="">加盟指南</a></li>
				<li><a href="">市场合作</a></li>
			</ul>
		</div>
		<div class="list_service">
			<ul>
				<li><strong><a href="">关于我们</a></strong></li>
				<li><a href="">KMK介绍</a></li>
				<li><a href="">加入我们</a></li>
				<li><a href="">联系我们</a></li>
				<li><a href="">服务协议</a></li>
			</ul>
		</div>
		<div class="list_service">
			<ul>
				<li><strong><a href="">其他</a></strong></li>
				<li><a href="">餐厅办证流程</a></li>
				<li><a href="">餐厅经营卫生标准</a></li>
			</ul>
		</div>
		<div class="list_service2">
			<ul>
				<li>服务热线: 10105757</li>
				<li>服务时间: 周一至周日 9:00-24:00</li>
				<li>意见反馈：<a href="">145364135@qq.com</a></li>
			</ul>
			<div class="erweima">
				
			</div>
		</div>
	</div>
</div>
</template>
<script>
export default {
    name:"openstore_footer"
}
</script>
<style lang="scss" scoped>
    .serice{
		height:240px;
		width: 100%;
		position: relative;
		background-color: #1989fa;
		padding-top: 60px;
		.service_all{
		display:flex;
	}
	.list_service{
		flex:1;
	}
	.list_service ul li a{
		color:white;
		font-size: 14px;
	}
	.list_service ul li:first-child{
		margin:20px 0;
		a{
			font-size: 15px;
		}
	}
	.list_service2{
		flex:2;
		padding-top: 20px;
	}
	.list_service2 ul{
		border-left:1px dashed white;
		padding-left: 20px;
	}
	.list_service2 ul li{
		font-size: 15px;
		margin-bottom: 10px;
		color:white;
	}
	.list_service2 ul li a{
		color:white;
	}
	.erweima{
		width: 80px;
		height:80px;
		background: url(../assets/erweima.png);
		position: relative;
		background-size: 100% 100%;
		margin:20px;
	}
	.erweima::after{
		content:"扫码关注";
		position: absolute;
		right:-80px;
		font-size: 16px;
		color:white;
	}
	}	
</style>