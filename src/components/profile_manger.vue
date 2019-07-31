<template>
    <div id="profile_menu">
	<div class="home_contain2 profile_flex">
		<div class="left_menulist">
			<ul class="ul_margin_bottom">
				<li class="hors_verc"><span class="icon_center" style="background-image:url(../assets/index.svg);background-size:100% 100%;"></span>&nbsp;<router-link :to="{name:'profilecenter'}" style="color:#0089dc;font-size: 16px;font-weight: 600;">个人中心</router-link></li>
			</ul>
			<ul class="ul_margin_bottom">
				<li class="hors_verc"><span class="icon_center" style="background:url(img/dingdan1.svg);background-size:100% 100%;"></span>&nbsp;<span href="" style="color:black;font-size: 16px;font-weight: 600;">我的订单</span></li>
				<li class="a_sub">
				<router-link :to="{name:'profiledingdan'}">近三个月订单</router-link></li>
			</ul>
			<ul class="ul_margin_bottom">
				<li class="hors_verc"><span class="icon_center" style="background:url(img/zichang1.svg);background-size:100% 100%;"></span>&nbsp;<span href="" style="color:black;font-size: 16px;font-weight: 600;">我的资产</span></li>
				<li class="a_sub"><router-link :to="{name:'profilehongbao'}">我的红包</router-link></li>
				<li class="a_sub"><router-link :to="{name:'profileyue'}">账户余额</router-link></li>
				<li class="a_sub"><router-link :to="{name:'profilejinbi'}">我的金币</router-link></li>
			</ul>
			<ul class="ul_margin_bottom">
				<li class="hors_verc"><span class="icon_center" style="background:url(img/ziliao1.svg);background-size:100% 100%;"></span>&nbsp;<span href="" style="color:black;font-size: 16px;font-weight: 600;">我的资料</span></li>
				<li class="a_sub"><router-link :to="{name:'profileziliao'}">个人资料</router-link></li>
				<li class="a_sub"><router-link :to="{name:'profiledizhi'}">地址管理</router-link></li>
			</ul>
			<ul class="ul_margin_bottom">
				<li class="hors_verc"><span class="icon_center" style="background:url(img/shoucang3.svg);background-size:100% 100%;"></span>&nbsp;<span href="" style="color:black;font-size: 16px;font-weight: 600;">我的收藏</span></li>
			</ul>
		</div>
		<div class="right_contain">
			<router-view></router-view>
		</div>
	</div>
</div>
</template>
<script>
export default {
    name:"profile_manger"
}
</script>
<style lang="scss" scoped>
	#profile_menu{
		height:auto;
		width: 100%;
		position: relative;
		background: #f5f5f5;
		min-height: 600px;
		.left_menulist{
		height:400px;
		position: relative;
		flex:18;
		padding-top: 20px;
	}
	.profile_flex{
		display: flex;
		justify-content: center;
		align-items: flex-start;
	}
	.right_contain{
		height:auto;
		position: relative;
		flex:82;
	}
	.ul_margin_bottom{
		margin-bottom: 30px;
	}
	.a_sub{
		margin-left:33px;
		margin-top:10px;
	}
	.icon_center{
	height:20px;width: 20px;display: inline-block;
		margin-right: 10px;
	}
	}
	
</style>