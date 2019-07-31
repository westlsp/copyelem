<template>
    <div class="nav_header">
	<div class="home_contain2 nav_border">
		<img src="../assets/mkm_logo1.png" alt="" class="logo_one" height="54px;" width="100px">
		<nav style="position: relative;height:100%;width: auto;display: inline-block;">
			<router-link class="midder_mine" :to="{name:'index'}">首页</router-link>
			<router-link class="midder_mine" :to="{name:'profiledingdan'}">我的订单</router-link>
			<a class="midder_mine" href="#">加盟合作</a>
			<a class="midder_mine" href="#">我的客服</a>
		</nav>
		<div class="nav_right midder_mine" v-if="username==undefined || username==''">
				<router-link class="link_style" :to="{name:'login_register'}">登录</router-link>
				<router-link class="link_style" :to="{name:'register_login'}">注册</router-link>
		</div>
		<div class="nav_right midder_mine" v-else>
			<el-dropdown>
  				<span class="el-dropdown-link">
    			{{username}}
				<i class="el-icon-arrow-down el-icon--right"></i>
  				</span>
  				<el-dropdown-menu slot="dropdown">
    				<router-link :to="{name:'profile'}"><el-dropdown-item icon="el-icon-user-solid">个人中心</el-dropdown-item></router-link>
    				<el-dropdown-item icon="el-icon-star-on" disabled>我的收藏</el-dropdown-item>
    				<router-link :to="{name:'profiledizhi'}"><el-dropdown-item icon="el-icon-location">地址管理</el-dropdown-item></router-link>
    				<el-dropdown-item icon="el-icon-s-tools" disabled>安全设置</el-dropdown-item>
    				<span @click="exit_btn"><el-dropdown-item icon="el-icon-back" divided>退出登陆</el-dropdown-item></span>
  				</el-dropdown-menu>
			</el-dropdown>
		</div>
		<div class="logo_name midder_mine">
			<img src="../assets/phone.svg" alt="" height="20px" width="20px;">
			手机应用
		</div>
		<div class="logo_name midder_mine" @click="test">
			规则中心
		</div>
	</div>
</div>
</template>
<script>
export default {
	name:"index_nav",
	data() {
		return {
			username:sessionStorage.getItem('username'),
		}
	},
	methods:{
		exit_btn(){
			console.log(111)
			sessionStorage.removeItem("username");
			sessionStorage.removeItem("alldata");
			sessionStorage.removeItem('imgurl')
			sessionStorage.removeItem('shopcar')
			this.GLOBAL.alldata='';
			this.username='';
			//this.$router.push({name:'home'});
			this.$emit("usernamecallback",'');
		},
		test(){
			console.log("111");
			this.$router.push({name:"home"})
		}
	}
}
</script>
<style lang="scss" scoped>
	.nav_header{
		width:100%;
		height:54px;
		background-color:#1e89e0; 
		.link_style{
		color:white;
		margin:6px;
	}
	.el-dropdown-link {
    cursor: pointer;
    color: white;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  	}
	.nav_border nav a{
		height:100%;
		position: relative;
		width: auto;
		padding:0 30px;
		position: relative;
		float: left;
		color:white;
		font-size: 16px;
	}
	.nav_border nav a:hover{
		background-color:#0878d9;
	}
	.nav_right{
		float: right;
		height:54px;
		width: auto;
		position: relative;
	}
	.nav_right img{
		background-color:#449be5;
		border-radius: 2px;
		margin-left:5px;
		position: relative;
	}
	.logo_name{
		color:#d2e7f9;
		position: relative;
		float:right;
		height:54px;
		width: auto;
		margin-right: 20px;
	}
	.logo_name:hover{
		color:white;
		cursor: pointer;
	}
	}
</style>