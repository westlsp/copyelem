<template>
    <div id="header">
	<div class="home_contain2">
		<div class="header_one hors_verc">
			<p>当前位置:{{locateprop}}&nbsp;\&nbsp;订单信息</p>
			<div class="hors_verc2" style="height: 100%;width: 100px;position: absolute;right: 0;top:0;color:white;" v-if="username==undefined || username==''">
            	<router-link class="link_style" :to="{name:'login_register'}">登录</router-link>
				<router-link class="link_style" :to="{name:'register_login'}">注册</router-link>
			</div>
			<div class="hors_verc2" style="height: 100%;width: 100px;position: absolute;right: 0;top:0;color:white;" v-else>
				<el-dropdown>
  				<span class="el-dropdown-link" style="color:white;">
    			 {{username}}
				<i class="el-icon-arrow-down el-icon--right"></i>
  				</span>
  				<el-dropdown-menu slot="dropdown">
    				<router-link :to="{name:'profile'}"><el-dropdown-item icon="el-icon-user-solid">个人中心</el-dropdown-item></router-link>
    				<el-dropdown-item icon="el-icon-star-on" disabled>我的收藏</el-dropdown-item>
    				<router-link :to="{name:'profiledizhi'}"><el-dropdown-item icon="el-icon-location">地址管理</el-dropdown-item></router-link>
    				<el-dropdown-item icon="el-icon-s-tools" disabled>安全设置</el-dropdown-item>
    				<span @click="exit_btn"><el-dropdown-item icon="el-icon-back" divided >退出登陆</el-dropdown-item></span>
  				</el-dropdown-menu>
				</el-dropdown>
			</div>
		</div>
		<div class="header_two">
			<div class="header_two_img hors_verc">
				<div></div>
			</div>
			<div class="header_two_text hors_verc">
				<p>订单信息</p>
			</div>
			<div class="header_two_liuc midder_mine">
				
			</div>
		</div>
	</div>
</div>
</template>
<script>
export default {
	name:"dingdan_header",
	data() {
		return {
			username:sessionStorage.getItem('username'),
			locateprop:sessionStorage.getItem('located')
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
	}
}
</script>
<style lang="scss" scoped>
    #header{
		width:100%;
		height:120px;
		position: relative;
		background: #008de1;
		.el-dropdown-link {
    cursor: pointer;
    color: white;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  	}
		.header_one{
		height:20%;
		width: 100%;
		border-bottom: 1px solid rgba(0,0,0,0.1);
		position: relative;
		color:white;
	}
	.link_style{
		color:white;
		margin:6px;
	}
	.header_two{
		height:80%;
		width: 100%;
		position: relative;
		color:white;
		display: flex;
	}
	.header_two_img{
		flex:1;
	}
	.header_two_img div{
		height:60%;
		width: 90%;
		position: relative;
		background: url(../assets/mkm_logo1.png);
		background-size: 100% 100%;
	}
	.header_two_text{
		flex:3;
	}
	.header_two_text p{
		border-left:1px solid white;
		height:30%;
		width: 100%;
		position: relative;
		font-size: 24px;
		padding-left: 15px;
	}
	.header_two_liuc{
		flex:3;
	}
	}
</style>