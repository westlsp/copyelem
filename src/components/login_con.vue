<template>
    <div class="midder_mine mine_header">
			<div class="header_con">
				<div class="logo_one"></div>
				<el-input placeholder="请输入用户名" v-model="username"  clearable class="input_mine1"></el-input>
				<el-input placeholder="请输入密码" v-model="password"  show-password class="input_mine1"></el-input>
				<el-input placeholder="请输入验证码" v-model="yzm" :disabled="true" class="input_mine1"></el-input>
				<div style="height:40px;width:100%;" class="midder_mine">
				<el-radio-group v-model="radio">
    <el-radio label="食客">食客</el-radio>
    <el-radio label="商家">商家</el-radio>
  				</el-radio-group>
				</div>
				<div class="login_btn midder_mine" @click="get_test" style="cursor:default;">登录</div>
			</div>
			<div class="header_con_right">
				<div class="select_card">
					<a href="#" style="font-size: 24px;color:#1fb4d9;">登陆</a><span style="font-size: 17px;color:#f0f0f0;">/</span>
					<router-link :to="{name:'register_login'}">注册</router-link>
				</div>
				<div class="erweima_wai midder_mine">
					<div class="erweima" @click="tset"></div>
					扫描二维码登陆
				</div>
				<a href="#" style="color:#1fb4d9;margin:20px 0 0 60px;cursor: pointer;display: block;" >手机短信验证登录</a>
			</div>
    </div>
</template>
<script>
export default {
	name:"login_con",
    data() {
		return {
			username:'',
			password:'',
			yzm:'',
			radio:'食客',
		}
	},
	/*sockets:{
	  connect(){
          console.log('连接成功啦')
      },
	},*/
	methods:{
		tset(){
			console.log("2222",123);
				//this.$socket.emit('msg',{a:1})
		},
		get_test(){
			var that=this;
			if(this.radio=='食客')
			{
			 this.$axios({
				 method:'post',
				 url:'/logincheck',
				 data:{
					 username:this.username,
					 password:this.password
				 }
			 }).then(function(res){
				console.log(res.data);
				if(res.data!="" && res.data!=null){
					 console.log(sessionStorage.getItem('located'));
					 console.log(JSON.stringify(res.data))
					 sessionStorage.setItem("username",res.data.username);
					 sessionStorage.setItem('alldata',JSON.stringify(res.data));
					 that.GLOBAL.alldata=JSON.parse(sessionStorage.getItem('alldata'));
					 if(sessionStorage.getItem('located')!=undefined && sessionStorage.getItem('located')!='')
					 {
						that.$router.push({name:"index"});
					 }
					 else{
						 that.$router.push({name:"home"});
					 }
				}
			 }).catch(function(err){
				 console.log(err);
			 })
		}
		else
		{
			this.$axios({
				method:'post',
				url:'/mangerlogin',
				data:{
					username:this.username,
					password:this.password,
				}
			}).then(function(res){
					console.log(res.data)
					sessionStorage.setItem("username2",res.data.username);
					sessionStorage.setItem('alldata2',JSON.stringify(res.data));
					that.GLOBAL.alldata2=JSON.parse(sessionStorage.getItem('alldata2'));
					that.$router.push({name:"business"});
			})
		}
		}
	}
}
</script>
<style lang="scss" scoped>
    .mine_header{
	height:90%;
	width: 100%;
	min-height: 600px;
	position: relative;
	.header_con{
	height:auto;
	width: 260px;
	margin-right:20px;
}
.logo_one{
	height:108px;
	width:200px;
	background: url(../assets/mkm_logo2.png);
	position: relative;
	background-size: 100% 100%;
	margin: 0 auto 10px auto;
}
.login_btn{
	color:white;
	font-size: 15px;
	height:40px;
	width: 260px;
	background: rgba(76,217,111,0.9);
	border-radius: 5px;
}
.login_btn:hover{
	background: rgba(76,217,111,1);
}
.input_mine1{
	margin-bottom: 10px;
}

.header_con_right{
	width: 360px;
	height:auto;
	border-left:1px solid rgba(179,173,174,1.00);
}
.erweima_wai{
	width:200px;
	margin-left:60px;
	padding: 20px;
	border:1px solid rgba(179,173,174,1.00);
}
.erweima{
	width: 100px;
	height:100px;
	background: url(../assets/erweima.png);
	background-size: 100% 100%;
	margin-right: 5px;
}
.select_card{
	margin-left: 60px;
	margin-bottom: 20px;
}
}
</style>