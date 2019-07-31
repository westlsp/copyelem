<template>
    <div id="nav_header">
	<div class="home_contain2 nav_border">
		<img src="../assets/mkm_logo1.png" alt="" class="logo_one" height="54px;" width="100px">
		<nav style="position: relative;height:100%;width: auto;display: inline-block;">
			<a class="midder_mine" href="">商家中心</a>
		</nav>
		<div class="nav_right midder_mine">
			<el-dropdown>
  				<span class="el-dropdown-link">
    			{{username}}
				<i class="el-icon-arrow-down el-icon--right"></i>
  				</span>
  				<el-dropdown-menu slot="dropdown">
    				<el-dropdown-item icon="el-icon-user-solid"><router-link :to="{name:'business'}">个人中心</router-link></el-dropdown-item>
    				<el-dropdown-item icon="el-icon-star-on" disabled>我的收藏</el-dropdown-item>
    				<el-dropdown-item icon="el-icon-location" disabled>地址管理</el-dropdown-item>
    				<el-dropdown-item icon="el-icon-s-tools"><router-link :to="{name:'busgenghuanmima'}">安全设置</router-link></el-dropdown-item>
    				<span @click="exit_btn"><el-dropdown-item icon="el-icon-back" divided>退出登陆</el-dropdown-item></span>
  				</el-dropdown-menu>
			</el-dropdown>
		</div>
	</div>
    </div>
</template>
<script>
export default {
	name:"business",
	data() {
		return {
			username:sessionStorage.getItem('username2'),
		}
	},
	methods: {
		exit_btn(){
			console.log(111)
			sessionStorage.removeItem("username2");
			sessionStorage.removeItem("alldata2");
			sessionStorage.removeItem('imgurl2')
			this.GLOBAL.alldata2='';
			this.username='';
			this.$router.push({name:'login_register'});
			//this.$emit("usernamecallback",'');
		},
	},
}
</script>
<style lang="scss" scoped>
    #nav_header{
		width:100%;
		height:54px;
		background-color:#1e89e0; 
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
	.shuliebiao{
		position: absolute;
		height:150px;
		width: 90px;
		background: white;
		bottom: -150px;
		right: 0;
		border:1px solid #cccccc;
		box-shadow: 0 1px #5c5c5c;
		padding: 5px;
		z-index: 1000;
	}
	.shangsanjiao{
		height:0;
		width: 0;
		border-top:5px solid rgba(255,255,255,0);
		border-left:5px solid rgba(255,255,255,0);
		border-right:5px solid rgba(255,255,255,0);
		border-bottom:5px solid white;
		position: absolute;
		top:-10px;
		right:5px;
	}
	.menu_nav{
		height:18%;
		width: 100%;
		position: relative;
		margin-bottom: 3px;
	}
	.menu_nav img{
		margin-right:5px;
	}
	.menu_nav:hover{
		background: #f7f7f7;
	}
	}
</style>