<template>
    <div id="mine_header" class="midder_mine">
			<div class="header_con">
				<div class="logo_one"></div>
				<el-input placeholder="请输入邮箱" v-model="email"  clearable class="input_mine1"></el-input>
				<el-input placeholder="请输入用户名" v-model="username"  clearable class="input_mine1"></el-input>
				<el-input placeholder="请输入密码" v-model="password"  show-password class="input_mine1"></el-input>
				<el-input placeholder="再次输入密码" v-model="password2"  show-password class="input_mine1"></el-input>
				<el-input placeholder="请输入验证码" v-model="yzm" :disabled="true" class="input_mine1"></el-input>
				<p class="midder_mine" style="color:#767676;margin-bottom: 30px;">查看并阅读<span style="color:#2395ff;">《用户服务协议》</span></p>
				<div class="login_btn midder_mine" @click="register_func">注册</div>
			</div>
			<div class="header_con_right">
				<div class="select_card">
					<a href="#" style="font-size: 30px;color:#1fb4d9;">注册</a><span style="font-size: 17px;color:#f0f0f0;">/</span>
					<router-link :to="{name:'login_register'}">登录</router-link>
				</div>
				<a href="#" style="color:#1fb4d9;margin:20px 0 0 60px;cursor: pointer;display: block;">手机号码快捷注册</a>
				<p style="color:red;margin:20px 0 0 60px;cursor:default;" class="tishi">提示:</p>
			</div>
</div>
</template>
<script>
export default {
    name:"register_con",
    data(){
		return {
				email:'',
				username:'',
				password:'',
				password2:'',
				yzm:''
		}
	},
	methods:{
		register_func(){
			this.$axios({
				method:'post',
				url:'/register',
				data:{
					username:this.username,
					password:this.password,
					email:this.email
				}
			}).then(function(res){
				console.log(res.data);
			}).catch(function(err){
				console.log(err);
			})
		}
	}
}
</script>
<style lang="scss" scoped>
    #mine_header{
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
.select_card{
	margin-left: 60px;
	margin-bottom: 20px;
}
.tishi{
	display: none;
}
}
</style>