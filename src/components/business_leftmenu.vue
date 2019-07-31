<template>
    <div id="aller">
	<div class="home_contain2 aller_con">
		<div class="right_menu">
			<ul>
				<li class="main_menu">商家</li>
				<li class="ci_menu"><router-link :to="{name:'busjichuguanli'}">基础管理</router-link></li>
				<li class="ci_menu"><router-link :to="{name:'busjinetixian'}">金额提现(noway)</router-link></li>
				<li class="ci_menu">个人资料(noview)</li>
				<li class="ci_menu">地址管理(noview)</li>
			</ul>
			<ul>
				<li class="main_menu">订单管理</li>
				<li class="ci_menu">新订单(noview)</li>
				<li class="ci_menu"><router-link :to="{name:'busdingdan'}">全部订单</router-link></li>
			</ul>
			<ul>
				<li class="main_menu">食品管理</li>
				<li class="ci_menu"><router-link :to="{name:'busshipinguanli'}">食品设置</router-link></li>
			</ul>
			<ul>
				<li class="main_menu">外卖配送</li>
				<li class="ci_menu"><router-link :to="{name:'busjibenpeisong'}">基本配送</router-link></li>
			</ul>
			<ul>
				<li class="main_menu">安全设置</li>
				<li class="ci_menu"><router-link :to="{name:'busgenghuanmima'}">密码更换(noway)</router-link></li>
			</ul>
			<ul>
				<li class="main_menu"><span @click="open_store" style="cursor:pointer">开通商店</span></li>
			</ul>
		</div>
        <div class="left_menu">
            <router-view></router-view>
        </div>
        </div>
        </div>
</template>
<script>
export default {
	name:"business_leftmenu",
	data() {
		return {

		}
	},
	methods:{
		open_store(){
			console.log('ok')
			this.$axios({
				method:'post',
				url:'/updatebusiness',
				data:{
					username:sessionStorage.getItem('username2'),
					flag:3,
					openflag:1,
				}
			}).then(function(res){
			   console.log(res.data)
			})
		}
	}
}
</script>
<style lang="scss" scoped>
    
    #aller{
		height:auto;
		width: 100%;
		position: relative;
		.aller_con{
		padding: 20px 0;
		display: flex;
	}
	.right_menu{
		flex:19;
		margin-right: 10px;
	}
	.left_menu{
		flex:79;
	}
	.main_menu{
		font-size: 16px;
		font-weight: 600;
		margin-top:20px;
	}
	.ci_menu{
		margin-left:20px;
		margin-top:10px;
		color:#999999;
	}
	.ci_menu a{
		color:#999999;
	}
	}
</style>