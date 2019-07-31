<template>
    <div id="add_food" class="midder_mine" v-bind:class="{open_func:open_choose}">
	<div class="add_food_border">
		<i class="el-icon-close close_css" @click="close_msg"></i>
		<div class="hors_verc" style="height:100px;width: 100%;position: relative;padding:20px 0;">
			<p style="font-size: 16px;padding-left:20px;">食品图片</p>
				<el-upload
  						class="avatar-uploader"
  						action="http://localhost:3000/upload"
  						:show-file-list="false"
  						:before-upload="beforeAvatarUpload"
						:on-success="handleAvatarSuccess"
						ref="upload"
						:auto-upload="false"
						:on-change="changeimg">
  						<img v-if="imageUrl" :src="imageUrl" class="avatar">
  						<i v-else class="el-icon-plus avatar-uploader-icon midder_mine"></i>
					</el-upload>
					
		</div>
		<p class="bianyuan">食品标题<input type="text" class="yuanshi_pwd" v-model="foodcontent"></p>
		<p class="bianyuan">食品介绍<input type="text" class="yuanshi_pwd" v-model="foodjieshao"></p>
		<template v-for="(list,index) in lists">
			<p class="bianyuan">食品种类{{index}}<input type="text" class="yuanshi_pwd" v-model="list.namew"></p>
		</template>
		<p class="bianyuan" @click="addzhonglei">add</p>
		<p class="bianyuan">定义价格<input type="text" class="yuanshi_pwd" v-model="foodprice">(元)</p>
		<div class="submit midder_mine" @click="createfood">
					确认添加
		</div>
	</div>
</div>
</template>
<script>
export default {
	name:"bus_addfood",
	props:{
		open_choose:'',
		zubie:'',
	},
	data() {
		return {
			imageUrl:'',
			foodcontent:'',
			foodjieshao:'',
			foodprice:'',
			weizhi:'',
			xianshi:1,
			lists:[]
		}
	},
	 methods: {
		 addzhonglei(){
			 let namew="zhlei"+this.lists.length
			 let dataw={namew:""}
			 this.lists.push(dataw)
		 },
		 createfood(){
			 var that=this
			 let zu={"img":'',"price":'',"content":"","jieshao":"","zhonglei":[]}
			 zu.price=this.foodprice
			 zu.jieshao=this.foodjieshao
			 zu.content=this.foodcontent
			 for(let i=0;i<this.lists.length;i++)
			 {
				 zu.zhonglei.push(this.lists[i])
			 }
			 let datas=JSON.parse(this.GLOBAL.alldata2.food)
			 //console.log(datas[0].content)
			 for(let i=0;i<datas.length;i++)
			 {
				 if(datas[i].zubie==that.zubie)
				 {
					datas[i].content.push(zu)
					 console.log(datas[i])
					 that.weizhi=datas[i].content.length-1
					 break
				 }
				 
			 }
			 this.GLOBAL.alldata2.food=JSON.stringify(datas)
			 sessionStorage.setItem('alldata2',JSON.stringify(this.GLOBAL.alldata2.food))
			 this.$axios({
				 method:'post',
				 url:'/updatebusiness',
				 data:{
					 flag:2,
					 username:this.GLOBAL.alldata2.username,
					 food:JSON.stringify(datas)
				 }
			 }).then(function(res){
				 console.log(res.data)
				that.$refs.upload.submit();
			 })
		 },
		 close_msg:function(){
			 this.$emit('close_func',true);
		 },
		 changeimg(file){
			console.log(file)
			if(this.xianshi==1)
			{
				this.imageUrl=URL.createObjectURL(file.raw);
			}
			else{
				this.xianshi=1
			}
		 },
		 handleAvatarSuccess(res,file) {
			this.$axios({
				 method:'post',
				 url:'/updateimg',
				 data:{
					 foodimg:res.data.url,
					 username:this.GLOBAL.alldata2.username,
					 flag:3,
					 weizhi:this.weizhi,
					 zubie:this.zubie
				 }
			 }).then(function(res){
				 console.log(res.data+'1111')
			 })
			 
			let datac=JSON.parse(this.GLOBAL.alldata2.food)
			for(let i=0;i<datac.length;i++){
       			if(datac[i].zubie==this.zubie)
        		{
					  datac[i].content[this.weizhi].img=res.data.url
					  break;
        		}
			  }
			console.log("tp")
			this.GLOBAL.alldata2.food=JSON.stringify(datac)
			sessionStorage.setItem('alldata2',JSON.stringify(this.GLOBAL.alldata2))
			this.$emit('foodmsg',JSON.stringify(datac))
			this.$refs.upload.clearFiles();
			this.imageUrl=''
			this.weizhi=''
			this.foodcontent=''
			this.foodprice=''
			this.xianshi=0
			this.foodjieshao=''
			this.lists=[]
			//this.imageUrl="http://localhost:3000"+this.GLOBAL.alldata2.storelogo;
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
	.open_func{
		display: none;
	}
    #add_food{
		position: fixed;
		height:100%;
		width:100%;
		top:0;
		left:0;
		background:rgba(0,0,0,0.1);
		z-index:1000;
		.close_css{
				position:absolute;right:20px;top:20px;font-size:30px;z-index:1000;
		}
		.add_food_border{
		height:auto;
		width: 600px;
		position:relative;
		background: rgba(255,255,255,1.00);
		padding: 20px 0;
		 box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
	}
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
    width: 100px;
    height:100px;
  }
  .avatar {
    width: 100px;
    height: 100px;
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