<template>
    <div class="shenghe_msg">
        <div id="jiben_msg">
	<div class="home_contain2" style="display: flex;border-bottom: 1px solid #cccccc;padding:20px 0;">
		<div class="msg_left">
			<p>基本信息</p>
		</div>
		<div class="msg_right">
			<div class="jiben_style hors_verc">门店名称<span class="star">*</span>
				<input type="text" v-model="storename" id="mendianname" placeholder="请与门店上的名称保持一致">
			</div>
			<!--<div class="jiben_style2 hors_verc">门店logo<span class="star">*</span>
				
					<el-upload
  						class="avatar-uploader"
  						action="https://jsonplaceholder.typicode.com/posts/"
  						:show-file-list="false"
  						:on-success="handleAvatarSuccess"
  						:before-upload="beforeAvatarUpload">
  						<img v-if="imageUrl" :src="imageUrl" class="avatar">
  						<i v-else class="el-icon-plus avatar-uploader-icon midder_mine"></i>
					</el-upload>
			</div>-->
		</div>
	</div>
</div>
<div id="jingying_msg">
	<div class="home_contain2" style="display: flex;border-bottom: 1px solid #cccccc;padding:20px 0;">
		<div class="msg_left">
			<p>经营信息</p>
		</div>
		<div class="msg_right">
			<div class="jiben_style hors_verc">所在城市<span class="star">*</span>
				<div class="hors_verc" style="height:40px;width: 600px;margin-left: 20px;">
					<sanji @getlocation="getloca"></sanji>
				</div>
			</div>
			<div class="jiben_style hors_verc">门店地址<span class="star">*</span>
				<input type="text" v-model="addressto" id="dizhi" placeholder="文本地址需与许可证上的经营地址保持一致，否则不通过">
				<div class="midder_mine" style="background: #f74342;color:white;margin-left: 20px;height:40px;width: 100px;"><a href="" style="color:white;">去定位</a></div>
			</div>
			<div style="height:300px;width:100%;position:relative;background:red;">
      					<el-amap class="amap-box" :vid="'amap-vue'"></el-amap>
			</div>
		</div>
	</div>
</div>
<div id="food_msg">
	<div class="home_contain2" style="display: flex;border-bottom: 1px solid #cccccc;padding:20px 0;">
		<div class="msg_left">
			<p>食品信息</p>
		</div>
		<div class="msg_right">
			<div class="jiben_style hors_verc">食品类型<span class="star">*</span>
				<xuanzeqi @sendfoodtype="getfoodtype"></xuanzeqi>	
			</div>
		</div>
	</div>
</div>
<div id="man_msg">
	<div class="home_contain2" style="display: flex;border-bottom: 1px solid #cccccc;padding:20px 0;">
		<div class="msg_left">
			<p>经营人信息</p>
		</div>
		<div class="msg_right">
			<div class="jiben_style hors_verc">你的姓名&emsp;<span class="star">*</span>
				<input type="text" id="mendianname" placeholder="请输入真实姓名" v-model="bossname">
			</div>
			<div class="jiben_style hors_verc">身份证号&emsp;<span class="star">*</span>
				<input type="text" id="mendianname" placeholder="请输入身份证号" v-model="sfz">
			</div>
			<div class="jiben_style hors_verc">手机号码&emsp;<span class="star" >*</span>
				<input type="text" id="mendianname" placeholder="请输入手机号" v-model="phone">
			</div>
			<!--<div class="jiben_style2 hors_verc">身份证图片<span class="star">*</span>
				<el-upload
  						class="avatar-uploader"
  						action="https://jsonplaceholder.typicode.com/posts/"
  						:show-file-list="false"
  						:on-success="handleAvatarSuccess2"
  						:before-upload="beforeAvatarUpload2">
  						<img v-if="imageUrl2" :src="imageUrl2" class="avatar">
  						<i v-else class="el-icon-plus avatar-uploader-icon midder_mine"></i>
					</el-upload>
			</div>-->
		</div>
	</div>
</div>
<div id="zhanghu_setting">
	<div class="home_contain2" style="display: flex;border-bottom: 1px solid #cccccc;padding:20px 0;">
		<div class="msg_left">
			<p>账户注册</p>
		</div>
		<div class="msg_right">
			<div class="jiben_style hors_verc">用户名&emsp;<span class="star">*</span>
				<input type="text" id="mendianname" placeholder="请输入用户名" v-model="username">
			</div>
			<div class="jiben_style hors_verc">邮箱&emsp;&emsp;<span class="star">*</span>
				<input type="text" id="mendianname" placeholder="请输入邮箱" v-model="email">
			</div>
			<div class="jiben_style hors_verc">密码&emsp;&emsp;<span class="star">*</span>
				<input type="text" id="mendianname" placeholder="请输入密码" v-model="password">
			</div>
			<div class="jiben_style hors_verc">确认密码<span class="star">*</span>
				<input type="text" id="mendianname" placeholder="请再次输入密码" v-model="password2">
			</div>
			<div class="submit midder_mine" @click="registerstore">注册</div>
		</div>
	</div>
</div>
    </div>
</template>
<script>
import xuanzeqi from './selectqi'
import sanji from './sanjiliandong'
export default {
	name:"shenghe_msg",
	data() {
		return {
			storename:'',
			addressto:'',
			bossname:'',
			sfz:'',
			phone:'',
			username:'',
			email:'',
			password:'',
			password2:'',
			locate:'',
			foodtype:''
			//imageUrl: '',
			//imageUrl2:'',
		}
	},
	components:{
			xuanzeqi,
			sanji
	},
	 methods: {
		 getloca(msg){
			this.locate=msg;
		 },
		 getfoodtype(msg){
			this.foodtype=msg;
		 },
		 registerstore(){
			 var that=this
			 this.$axios({
				 method:'post',
				 url:'/registerstore',
				 data:{
					 username:this.username,
					  password:this.password,
					  storename:this.storename,
					  address:this.locate+","+this.addressto,
					  foodtype:this.foodtype,
					  bossname:this.bossname,
					  sfz:this.sfz,
					  phone:this.phone,
					  email:this.email
				 }
			 }).then(function(res){
					 console.log(res.data)
					 if(res.data=='success'){
						 that.$router.push({name:'login_register'})
					 }
			 })
		 }
      /*handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
	  },
	  handleAvatarSuccess2(res, file) {
        this.imageUrl2 = URL.createObjectURL(file.raw);
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
	  beforeAvatarUpload2(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }*/
    }
}
</script>
<style lang="scss" scoped>
	.shenghe_msg{
		height:100%;
		width: 100%;
		position: relative;
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
    width: 200px;
    height:200px;
  }
  .avatar {
    width: 200px;
    height: 200px;
    display: block;
  }
		#jiben_msg{
		height:auto;
		width: 100%;
		position: relative;
		
		}
		.msg_left{
		height:auto;
		position: relative;
		float: left;
		flex: 19;
	}
	.msg_left p{
		font-size: 14px;
		font-weight: 600;
	}
	.msg_right{
		height:auto;
		width: 80%;
		position: relative;
		flex: 79;
		color:#5d5c5c;
	}
	.jiben_style{
		height:50px;
		width: 100%;
		position: relative;
	}
	#mendianname{
		height:40px;
		width: 300px;
		outline-color: #f74342;
		border: 1px solid #cccccc;
		margin-left: 20px;
		padding-left: 20px;
	}
	.star{
		color:red;
	}
	.jiben_style2{
		height:200px;
		width: 100%;
		margin-top:20px;
		position: relative;
	}
	#jingying_msg{
		height:auto;
		width: 100%;
		position: relative;
	}
	#dizhi{
		height:40px;
		width: 600px;
		outline-color: #f74342;
		border: 1px solid #cccccc;
		margin-left: 20px;
		padding-left: 20px;
	}
	.city_style{
		height:100%;
		width: 190px;
		margin-right: 10px;
		background: #f5f5f5;
		border: 1px solid #cccccc;
		color: #cccccc;
	}
	#food_msg{
		height:auto;
		width: 100%;
		position: relative;
	}
	#man_msg{
		height:auto;
		width: 100%;
		position: relative;
	}
	#foodtype{
		height:40px;
		width: 300px;
		outline-color: #f74342;
		border: 1px solid #cccccc;
		margin-left: 20px;
		padding-left: 20px;
	}
	#zhanghu_setting{
		height:auto;
		width: 100%;
		position: relative;
	}
	.submit{
		position:absolute;
		right:0;
		bottom:0;
		height:40px;
		width: 120px;
		background: #5cb87a;
		color:white;
		font-size: 16px;
	}
	}
    
</style>