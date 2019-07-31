<template>
    <div class="jichuguanli tong_border">
				<div class="biaoti">商家<span class="biaoti_sl">/基础管理</span></div>
				<p class="bianyuan">店铺名<input type="text" class="yuanshi_pwd" disabled value="asdasd" v-model="storename"></p>
				<p class="bianyuan double_flexstart">店铺logo 
					<el-upload
  						class="avatar-uploader"
  						action="http://localhost:3000/upload"
  						:show-file-list="false"
  						:on-success="handleAvatarSuccess"
  						:before-upload="beforeAvatarUpload">
  						<img v-if="imageUrl" :src="imageUrl" class="avatar">
  						<i v-else class="el-icon-plus avatar-uploader-icon midder_mine"></i>
							</el-upload>
				</p>
				<p class="bianyuan double_flexstart">商家公告<textarea style="border:1px solid #dddddd;" class="imgborder" name="" id="" cols="50" rows="5" v-model="gonggao"></textarea></p>
				<div class="submit midder_mine" style="cursor:pointer;">
					点击修改
				</div>
			</div>
</template>
<script>
export default {
	name:"bus_jichuguanli",
	data() {
		return {
			imageUrl:"http://localhost:3000"+this.GLOBAL.alldata2.storelogo,
			storename:this.GLOBAL.alldata2.storename,
			gonggao:this.GLOBAL.alldata2.gonggao
		}
	},
	methods:{
		handleAvatarSuccess(res, file) {
			this.$axios({
				 method:'post',
				 url:'/updateimg',
				 data:{
					 storelogo:res.data.url,
					 username:this.GLOBAL.alldata2.username,
					 flag:2
				 }
			 }).then(function(res){
				 console.log(res.data)
			 })
			this.GLOBAL.alldata2.storelogo=res.data.url;
			sessionStorage.setItem('alldata2',JSON.stringify(this.GLOBAL.alldata2))
			this.imageUrl="http://localhost:3000"+this.GLOBAL.alldata2.storelogo;
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
<style lang="scss" scoped>
    .tong_border{
		border:1px solid #cccccc;
		background: white;
		margin-top:20px;
		position: relative;
		width: 100%;
		height:auto;
		padding: 20px 0;
	}
	.jichuguanli{
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
		.yuanshi_pwd{
		height:40px;
		width: 200px;
		position: relative;
		margin-left:20px;
		border:1px solid #dddddd;
	}

	.bianyuan{
		margin-left:20px;
		margin-top: 20px;
	}
	.biaoti{
		border-bottom: 2px solid #dddddd;width: 96%;height:auto;margin:0 auto;font-size: 16px;font-weight: 600;
	}
	.biaoti_sl{
		font-size: 12px;font-weight: 200;color:#999999;
	}
	.submit{
		position:absolute;
		right:20px;
		bottom:20px;
		height:40px;
		width: 120px;
		background: #5cb87a;
		color:white;
		font-size: 16px;
		
	}
	input{
		padding-left: 20px;
	}
	.imgborder{
		margin-left: 20px;
	}
	}
	
</style>