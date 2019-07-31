<template>
    <div class="home_top">
	<div class="home_contain">
		<div class="top_con_header">
		<div class="logo_one"></div>
		<div class="right_link" v-if="username==undefined || username==''">
            <router-link class="link_style" :to="{name:'login_register'}">登录</router-link>
			<router-link class="link_style" :to="{name:'register_login'}">注册</router-link>
		</div>
		<div class="right_link" v-else>
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
    				<span @click="exit_btn"><el-dropdown-item icon="el-icon-back" divided >退出登陆</el-dropdown-item></span>
  				</el-dropdown-menu>
			</el-dropdown>
		</div>
			<router-link class="store_open" :to="{name:'openstore'}">我要开店</router-link>
		</div>
		<div class="top_con_midder">
			<div class="logo_two"></div><br>
			<div class="search_location">
				<sanji @getlocation="getlocate"></sanji>
				<input style="padding-left: 20px;outline: none;margin-left:10px;" type="text" placeholder="请输入准确的地址" id="write_address" v-model="address_deep">
					<div class="search_click" @click="search_btn">搜索</div>
			</div>
		</div>
	</div>
    </div>
</template>
<script>
import sanji from './sanjiliandong'
export default {
    name:"home_header",
    data(){
		return {
			locate:'',
			address_deep:'',
			username:sessionStorage.getItem('username'),
		}
	},
	methods:{
		getlocate(msg){
			this.locate=msg;
			console.log(this.locate);
		},
		exit_btn(){
			console.log(111)
			sessionStorage.setItem("username",'');
			this.username='';
			sessionStorage.setItem("alldata",'');
			sessionStorage.removeItem('shopcar')
			this.GLOBAL.alldata='';
		},
		search_btn(){
			if(this.locate=='' && this.address_deep=='')
			{
				this.$message({
          			message: '填先写好地址',
          			type: 'warning'
        		});
			}
			else{
				sessionStorage.setItem('located',this.locate+","+this.address_deep);
				this.$router.push({name:'index'});
				//this.$router.push({name:'index',params:{located:this.locate+","+this.address_deep}});
			}
		}
	},
	watch:{
		
	},
    props:{
        
	},
	components:{
		sanji
	},
	beforeCreate:function(){
		sessionStorage.setItem('located','');
		console.log("home_beforecreate");
	}
}
</script>
<style lang="scss" scoped>
     .home_top{
		width:100%;
		height:500px;
		background:rgba(0,141,225,1);
		position: relative;
		.top_con_header{
		width:100%;
		position: relative;
		height:16%;
		}
	.el-dropdown-link {
    cursor: pointer;
    color: white;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  	}
    .logo_one{
		background: url('../assets/mkm_logo1.png');
		background-size: 100% 100%;
		width:140px;
		height:100%;
		position: absolute;
		left: 0;
		cursor: pointer;
	}
	.right_link{
		height:30px;
		width: auto;
		color:white;
		position: absolute;
		top:20px;
		right: 80px;
		font-size: 14px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
    .link_style{
		color:white;
		margin:6px;
	}
	.store_open{
		height:30px;
		width: 70px;
		display: block;
		cursor: pointer;
		background-color: #5db423;
		position: absolute;
		top:20px;
		right:0;
		color:white;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.top_con_midder{
		height:84%;
		width: 100%;
		position: relative;
	}
	.logo_two{
		height:30%;
		width: 220px;
		background: url('../assets/mkm_logo1.png');
		background-size: 100% 100%;
		position: relative;
		margin:0 auto;
		top:100px;
	}
	.search_location{
		display:flex;
		justify-content: center;
		align-items: center;
		position: relative;
		width: 100%;
		height:20%;
		top:100px;
	}
	.s_location{
		height:40px;
		width: 60px;
		background:rgba(255,255,255,1.00);
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
	}
	#write_address{
			width:40%;
			height:40px;
		}
	.search_click{
		background: #f74342;
		width: 100px;
		height:40px;
		margin:0 10px;
		color:white;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 14px;
		cursor: pointer;
	}
	.search_click:hover{
		background: #e03e3d;
	}
	}
	
</style>
