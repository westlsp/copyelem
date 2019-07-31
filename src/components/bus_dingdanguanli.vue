<template>
    <div class="dingdan_bus tong_border">
				<div class="biaoti">订单管理<span class="biaoti_sl">/新订单</span></div>
				<template v-for="dingdan in dingdans">
					<div style="height:auto;width: 96%;margin:0 auto;margin-top:20px;display: flex;border: 1px solid #0091ea;">
					<div class="midder_mine" style="flex:1;position: relative;">
						<img :src="'http://localhost:3000'+dingdan.content[0].img" alt="" height="80px" width="80px">
					</div>
					<div style="flex:4;background: white;position: relative;padding: 10px 0;">
						<div>
							<p style="font-size: 16px;">{{JSON.parse(dingdan.customer).lianxiren}}&emsp;（先生）&emsp;&emsp;{{JSON.parse(dingdan.customer).dianhua}}</p>
							<template v-for="dingda in dingdan.content">
								<p style="font-size: 14px; color:#999999;text-align: right;padding-right: 20px;">{{dingda.content}}({{dingda.zhonglei}})<span style="color:red;">x{{dingda.amount}}</span> ￥{{dingda.amount*parseInt(dingda.price)}} </p>
							</template>
							<p style="margin-top: 10px;">地址:{{JSON.parse(dingdan.customer).dizhi}}</p>
							<p style="margin-top: 10px;">[外加商家配送费]</p>
						</div>
					</div>
					<div class="midder_mine" style="flex:1;position: relative;">
						<p style="font-size: 26px;color:red;">￥{{dingdan.sumprices}}</p>
					</div>
					</div>
				</template>
				
			</div>
</template>
<script>
export default {
	name:"bus_dingdanguanli",
	data() {
		return {
			dingdans:JSON.parse(JSON.parse(sessionStorage.getItem('alldata2')).dingdan)
		}
	},
	sockets:{
        connect(){
            console.log(this.$socket.id)
            this.$socket.emit('login');
            console.log('连接成功')
        },
        allstoredingdan(msg){
			console.log(msg)
			let dataz=JSON.parse(msg)
			if(dataz.username==sessionStorage.getItem('username2'))
			{
				delete dataz['username']
				this.dingdans.push(dataz)
			}
            
        }
	},
	mounted(){
         //因为通过路由进当前页面sockets里的connect未被触发所以需在mounted里触发一次 即
		 this.$socket.emit('login'); 
		 console.log('chufa')
    },
	
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
		max-height:600px;
		overflow-y:scroll;
		padding: 20px 0;
	}
	.dingdan_bus{
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