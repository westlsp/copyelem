<template>
    <div class="jiben_peisong tong_border">
				<div class="biaoti">外卖配送<span class="biaoti_sl">/基本设置</span></div>
				<p class="bianyuan">起送费<input type="text" class="yuanshi_pwd" v-model="qisong"><span class="biaoti_sl">（元）</span></p>
				<p class="bianyuan">配送费<input type="text" class="yuanshi_pwd" v-model="peisong"><span class="biaoti_sl">（元）</span></p>
				<p class="bianyuan">餐盒费<input type="text" class="yuanshi_pwd" v-model="canhe"><span class="biaoti_sl">（元）</span></p>
				<div class="submit midder_mine" @click="updatepeisong" style="cursor:pointer;">
					确认修改
				</div>
			</div>
</template>
<script>
export default {
	name:"bus_jibenpeisong",
	data() {
		return {
			qisong:JSON.parse(this.GLOBAL.alldata2.peisongsetting).qisong,
			peisong:JSON.parse(this.GLOBAL.alldata2.peisongsetting).peisong,
			canhe:JSON.parse(this.GLOBAL.alldata2.peisongsetting).canhe
		}
	},
	methods:{
		updatepeisong(){
			var that=this
			var datas={"qisong":'',"peisong":'',"canhe":''}
			if(this.GLOBAL.alldata2.peisongsetting!=null && this.GLOBAL.alldata2.peisongsetting!='')
			{
				datas=JSON.parse(this.GLOBAL.alldata2.peisongsetting)
			}
			datas.qisong=this.qisong;
			datas.peisong=this.peisong;
			datas.canhe=this.canhe;
			this.GLOBAL.alldata2.peisongsetting=JSON.stringify(datas);
			sessionStorage.setItem('alldata2',JSON.stringify(this.GLOBAL.alldata2));
			
			this.$axios({
				method:'post',
				url:'/updatebusiness',
				data:{
					peisongsetting:JSON.stringify(datas),
					username:sessionStorage.getItem('username2'),
					flag:1,
				}
			}).then(function(res){
				console.log(res.data)
			})
		}
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
	.jiben_peisong{
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