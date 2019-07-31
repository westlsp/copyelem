<template>
    <div id="mine_profile">
				<div class="mp_aller">
					<div class="recent_dingdan">
						<div class="midder_mine" style="height:100%;width: 120px;border-bottom: 2px solid #1e89e0;font-size: 15px;font-weight: 600;"> 
							个人资料
						</div>
					</div>

					<div class="zaborder">
						<div class="hors_verc biaoqian_zaborder" style="">
							<p class="biaoqian_za">头像</p>
							<el-upload
  						class="avatar-uploader"
  						action="http://localhost:3000/upload"
  						:show-file-list="false"
  						:on-success="handleAvatarSuccess"
  						:before-upload="beforeAvatarUpload">
  						<img v-if="imageUrl" :src="imageUrl" class="avatar">
  						<i v-else class="el-icon-plus avatar-uploader-icon midder_mine"></i>
							</el-upload>
						</div>
						<div class="hors_verc biaoqian_zaborder">
							<p class="biaoqian_za">用户名</p>
							<el-input class="zaborder_input" placeholder="请输入内容" v-model="username" :disabled="true"></el-input>
						</div>
						<div class="hors_verc biaoqian_zaborder">
							<p class="biaoqian_za">邮箱</p>
							<el-input  class="zaborder_input" placeholder="请输入邮箱" v-model="email" clearable></el-input>
						</div>
						<div class="hors_verc biaoqian_zaborder">
							<p class="biaoqian_za">手机号码</p>
							<el-input class="zaborder_input" prefix-icon="el-icon-mobile" placeholder="请输入手机号码" v-model="phonenum" clearable maxlength="11" show-word-limit></el-input>
						</div>
						<el-button type="primary" icon="el-icon-edit" class="change_btn" @click="change_foneml">修改</el-button>
					</div>
				</div>
			</div>
</template>
<script>
export default {
    nameL:"profile_ziliao",
	data() {
		return {
			imageUrl:"http://localhost:3000"+this.GLOBAL.alldata.touxiang,
			username:this.GLOBAL.alldata.username,
			email:this.GLOBAL.alldata.email,
			phonenum:this.GLOBAL.alldata.phone,
		}
	},
	methods:{
		change_foneml(){
			var that=this
			this.$axios({
				 method:'post',
				 url:'/updatefoneml',
				 data:{
					 email:this.email,
					 phone:this.phonenum,
					 username:this.username,
				 }
			 }).then(function(res){
				 console.log(res.data)
				 that.GLOBAL.alldata.email=that.email
				 that.GLOBAL.alldata.phone=that.phonenum
				 sessionStorage.setItem('alldata',JSON.stringify(that.GLOBAL.alldata))
			 })
		},
		 handleAvatarSuccess(res, file) {
			this.$axios({
				 method:'post',
				 url:'/updateimg',
				 data:{
					 touxiang:res.data.url,
					 username:this.GLOBAL.alldata.username,
					 flag:1
				 }
			 }).then(function(res){
				 console.log(res.data)
			 })
			this.GLOBAL.alldata.touxiang=res.data.url;
			sessionStorage.setItem('alldata',JSON.stringify(this.GLOBAL.alldata))
			this.imageUrl="http://localhost:3000"+this.GLOBAL.alldata.touxiang;
			//this.imageUrl ="http://localhost:3000"+res.data.url;
		  },
		  beforeAvatarUpload(file) {
        	const isJPG = file.type === 'image/jpeg';
        	const isLt2M = file.size / 1024 / 1024 < 2;
        	if (!isJPG) {
          		this.$message.error('上传头像图片只能是 JPG 格式!');
        	}
        	if (!isLt2M) {
          		this.$message.error('上传头像图片大小不能超过 2MB!');
        	}
        		return isJPG && isLt2M;
	  	},
	}
}
</script>
<style lang="scss">
    #mine_profile{
		width:100%;
		height:auto;
		position:relative;
	.avatar-uploader{
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
	margin-left:20px;
  }
  .avatar-uploader:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 80px;
    height:80px;
  }
  .avatar {
    width: 80px;
    height: 80px;
    display: block;
  }
		.zaborder{
			height:auto;width: 95%;margin:0 20px;margin-top: 30px;position: relative;
		}
  		.biaoqian_zaborder{
			  	height: auto;width: 100%;position: relative;margin-bottom:20px;
  		}
		.biaoqian_za{
				width: 70px;height: auto;text-align: right;margin-right: 20px;
		}
		.zaborder_input{
			width:200px;margin-left:20px;
		}
		.change_btn{
			position: absolute;
			right:0;
			bottom: 0;
			z-index: 1000;
		}
		.mp_aller{
		width:100%;
		height:auto;
		position: relative;
		background: white;
		border:1px solid #cccccc;
		margin-bottom: 20px;
		padding: 20px 0;
	}
	}
	
</style>