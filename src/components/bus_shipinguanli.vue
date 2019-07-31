<template>
    <div class="shipinshezhi tong_border">
				<div class="biaoti">食品管理<span class="biaoti_sl">/食品设置</span></div>
				<template v-for="foodsub in food">
				    <div style="width: 96%;height:auto;position: relative;margin:0 auto;">
					<p style="font-size: 16px;font-weight: 600;padding: 10px 0;background: #f5f5f5;margin-top:10px;">&emsp;{{foodsub.zubie}}</p>
						<template v-for="foodsubs in foodsub.content">
							<div style="width: 100%;height:100px;position: relative;margin-top: 10px;border-bottom: 1px solid #dddddd;display: flex;">
						<div class="midder_mine" style="flex:1;position: relative;">
							<img :src="'http://localhost:3000'+foodsubs.img" alt="" height="80px" width="80px">
						</div>
						<div style="flex:4;background: white;position: relative;padding: 10px 0;">
							<p style="font-size: 16px;font-weight: 600;color:#f74342;">食品名:<span style="font-size: 14px;font-weight: 200;color:black;">{{foodsubs.content}}</span></p>
							<p style="font-size: 16px;font-weight: 600;color:#f74342;">食品介绍:<span style="font-size: 14px;font-weight: 200;color:black;">{{foodsubs.jieshao}}</span></p>
							<template v-for="(namew,index) in foodsubs.zhonglei">
								<p style="font-size: 16px;font-weight: 600;color:#f74342;">规格{{index}}:<span style="font-size: 14px;font-weight: 200;color:black;">{{namew.namew}}</span></p>
							</template>
						</div>
						<div class="midder_mine" style="flex:1;position: relative;">
							<p style="font-size: 26px;color:red;">￥{{foodsubs.price}}</p>
						</div>
						</div>
						</template>
					<!--<div style="width: 100%;height:100px;position: relative;margin-top: 10px;border-bottom: 1px solid #dddddd;display: flex;">
						<div class="midder_mine" style="flex:1;position: relative;">
							<img src="../assets/test.jpg" alt="" height="80px" width="80px">
						</div>
						<div style="flex:4;background: white;position: relative;padding: 10px 0;">
							<p style="font-size: 16px;font-weight: 600;color:#f74342;">规格一：<span style="font-size: 14px;font-weight: 200;color:black;">啊啊几十块劳+卡速度回家+阿斯达</span></p>
						</div>
						<div class="midder_mine" style="flex:1;position: relative;">
							<p style="font-size: 26px;color:red;">￥41.58</p>
						</div>
					</div>-->
					<p style="padding: 10px 0;color:#f74342;cursor:pointer;" v-on:click="get_open(foodsub.zubie)">添加食品</p>
					</div>
				</template>
				<div style="width: 96%;height:auto;padding: 10px 0;position: relative;margin:0 auto;">	
				<input type="text" class="yuanshi_pwd" v-model="zubie">
				<span style="color:blue;cursor:pointer;" @click="addfenzu">添加分组</span>	
				</div>
				<busaddfood :open_choose="open_flag" @close_func="get_close" :zubie="send_zubie" @foodmsg="getfoodmsg"></busaddfood>
			</div>
</template>
<script>
import busaddfood from './bus_addfood'
export default {
	name:"bus_shipinguanli",
	created(){
			if(JSON.parse(this.GLOBAL.alldata2.food)=='' || JSON.parse(this.GLOBAL.alldata2.food)==null)
			{
				this.food=[]
			}
			else{
				this.food=JSON.parse(this.GLOBAL.alldata2.food)
			}
	},
	data() {
		return {
			zubie:'',
			food:[],
			open_flag:true,
			send_zubie:''
		}
	},
	methods: {
		getfoodmsg(msg){
			console.log('kkl')
			this.food=JSON.parse(msg)
		},
		addfenzu(){
			var that=this
			var datas=[]
				if(this.GLOBAL.alldata2.food!='' && this.GLOBAL.alldata2.food!=null)
				{
					datas=JSON.parse(this.GLOBAL.alldata2.food)
				}
				var datac={"zubie":'',"content":[]}
				datac.zubie=this.zubie
				datas.push(datac)
				this.GLOBAL.alldata2.food=JSON.stringify(datas)
				sessionStorage.setItem('alldata2',JSON.stringify(this.GLOBAL.alldata2))
				this.food=datas
				this.$axios({
					method:'post',
					url:'/updatebusiness',
					data:{
						food:JSON.stringify(datas),
						username:sessionStorage.getItem('username2'),
						flag:2,
					}
				}).then(function(res){
					console.log(res.data)
					that.zubie=''
				})
		},
        get_close:function(msg){
            this.open_flag=msg;
		},
		get_open:function(value){
			this.open_flag=false;
			this.send_zubie=value
		}
	},
	components:{
		busaddfood
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
	.shipinshezhi{
		max-height: 600px;
		overflow-y: scroll;

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