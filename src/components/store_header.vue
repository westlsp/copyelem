<template>
    <div class="store_header">
        <div class="header_background">
</div>
<div id="nav_header">
	<div class="home_contain2 nav_border">
		<img src="../assets/mkm_logo1.png" alt="" class="logo_one" height="44x;" width="100px">
		<nav style="position: relative;height:100%;width: auto;display: inline-block;">
			<router-link class="midder_mine" :to="{name:'index'}">首页</router-link>
			<router-link class="midder_mine" :to="{name:'profiledingdan'}">我的订单</router-link>
			<a class="midder_mine" href="">加盟合作</a>
			<a class="midder_mine" href="">我的客服</a>
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
    				<el-dropdown-item icon="el-icon-user-solid"><router-link :to="{name:'profile'}">个人中心</router-link></el-dropdown-item>
    				<el-dropdown-item icon="el-icon-star-on" disabled>我的收藏</el-dropdown-item>
    				<el-dropdown-item icon="el-icon-location"><router-link :to="{name:'profiledizhi'}">地址管理</router-link></el-dropdown-item>
    				<el-dropdown-item icon="el-icon-s-tools" disabled>安全设置</el-dropdown-item>
    				<span @click="exit_btn"><el-dropdown-item icon="el-icon-back" divided>退出登陆</el-dropdown-item></span>
  				</el-dropdown-menu>
			</el-dropdown>
		</div>
		<div class="logo_name midder_mine">
			<img src="../assets/phone.svg" alt="" height="20px" width="20px;">
			手机应用
		</div>
		<div class="logo_name midder_mine">
			规则中心
		</div>
	</div>
</div>
<div id="store_msg">
	<div class="home_contain2 store_msg_con">
		<div class="shoucang">
			<div class="shoucang_icon"></div>
		</div>
		<div class="store_left">
			<div class="store_logo midder_mine">
				<div class="logo_img"></div>
			</div>
			<div class="store_name">
				<span style="position: absolute;bottom:10px;left:10px;">{{storename}}</span>
			</div>
			<div class="store_star">
				<div class="star_sum">
				<el-rate
  					v-model="xinji"
  					disabled
  					show-score
  					text-color="#ff9900"
  					score-template="{value}">
				</el-rate>
				</div>
			</div>
		</div>
		<div class="store_right">
			<div class="store_qisong">
				<div class="xiaozi1">
					起送价
				</div>
				<div class="dazi1">
					{{peisong.qisong}}元
				</div>
			</div>
			<div class="store_peisong">
				<div class="xiaozi1">
					配送费
				</div>
				<div class="dazi1">
					配送费￥{{peisong.peisong}}
				</div>
			</div>
			<div class="store_sudu">
				<div class="xiaozi1">
					平均送达速度
				</div>
				<div class="dazi1">
					41分钟
				</div>
			</div>
		</div>
	</div>
</div>
    </div>
</template>
<script>
export default {
	name:"store_header",
	data() {
		return {
			xinji:5,
			storename:JSON.parse(this.headermsg).storename,
			peisong:JSON.parse(JSON.parse(this.headermsg).peisongsetting),
			username:sessionStorage.getItem('username'),
		}
	},
	props:{
		headermsg:''
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
	}
}
</script>
<style lang="scss" scoped>
	.store_header{
		width:100%;height:auto;position:relative;
		.header_background{
		height: 174px; width: 100%;position: absolute;background: url(../assets/shop_img.jpg);background-size: 100% 100%;top:0;left:0;
	}
	.link_style{
		color:white;
		margin:6px;
	}
    #nav_header{
		width:100%;
		height:44px;
		position: relative;
		background:rgba(0,0,0,0.5);
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
	.nav_right{
		float: right;
		height:100%;
		width: auto;
		position: relative;
	}
	.nav_right img{
		border-radius: 2px;
		margin-left:5px;
		position: relative;
	}
	.logo_name{
		color:#cccccc;
		position: relative;
		float:right;
		height:100%;
		width: auto;
		margin-right: 20px;
	}
	.logo_name:hover{
		color:white;
		cursor: pointer;
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
	#store_msg{
		height:130px;
		width: 100%;
		position: relative;
	}
	.store_left{
		width:42%;
		height:100%;
		position: absolute;
		left:0;
		top:0;
	}
	.store_logo{
		width:20%;
		height:100%;
		position: absolute;
		left:0;
	}
	.logo_img{
		height:80px;
		width: 80px;
		border-radius: 50%;
		background: url(../assets/test.jpg);
		background-size: 100% 100%;
		border:3px solid #cccccc;
	}
	.store_name{
		width:80%;
		height:50%;
		position: absolute;
		top:0;
		right:0;
		color:white;
		font-size: 16px;
	}
	.store_star{
		width:80%;
		height:50%;
		position: absolute;
		right:0;
		bottom:0;
	}
	.star_sum{
		height:30%;
		width: 60%;
		position: absolute;
		left:10px;
	}
	.store_right{
		width:42%;
		position: absolute;
		height:100%;
		right:60px;
		display: flex;
	}
	.store_qisong{
		flex:1;
	}
	.store_peisong{
		flex:1;
	}
	.store_sudu{
		flex:1;
	}
	.xiaozi1{
		color:white;
		margin-top:36px;
		text-align:center;
		position: relative;
	}
	.dazi1{
		color:white;
		margin-top:14px;
		text-align:center;
		font-size: 16px;
		position: relative;
	}
	.shoucang{
		position:absolute;
		right:0;
		height:60px;
		width: 70px;
		background:rgba(255,255,255,0.15);
		border-radius: 0 0 5px 5px;
	}
	.shoucang_icon{
		height:20px;
		width: 20px;
		position: relative;
		margin:0 auto;
		margin-top:10px;
		background: url(../assets/heart.svg);
		background-size: 100% 100%;
	}
	.shoucang_icon::after{
		width:30px;
		content: "收藏";
		position:absolute;
		bottom: -20px;
		color:white;
	}
	}
</style>