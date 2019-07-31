<template>
    <div class="midder">
	<div class="home_contain2">
		<div class="dingdanxxq">
			<p class="hors_verc dingdanxxq_h">订单详情</p>
			<div class="xq_msg hors_verc">
				<div>
				<p style="margin-bottom: 5px;">{{storemsg}}  外卖订单</p>
				<p>{{minemsg.lianxiren}}(先生)&nbsp;{{minemsg.dianhua}}&nbsp;{{minemsg.dizhi}}&nbsp;&nbsp;<a href="" style="color:#008de1;">查看详情</a></p>
				</div>
				<span style="position: absolute;right:20px;">支付金额：<span style="font-size: 24px;color:#f74342;">￥{{zongjia}}</span></span>
			</div>
		</div>
		<div class="pay_way">
			<p class="hors_verc pay_way_h">请选择支付方式&nbsp;&nbsp;<span style="font-size: 12px;font-weight: 200;">剩余支付时间<span style="color:orange;">14分45秒</span>，逾期订单自动取消</span></p>
			<div class="pay_waychoose hors_verc">
				<div style="position: relative;height: 80%;width: 100%;">
					<p style="margin-bottom: 5px;">第三方支付<span style="color:orange;font-size: 16px;">￥{{zongjia}}</span></p>
					<div class="hors_verc" style="position: relative;height: 60%;width: 100%;">
						<div class="zifubao midder_mine">
							<img src="../assets/zhifubao.svg" alt="" height="30px" width="30px">
							&nbsp;&nbsp;支付宝
							<img src="../assets/gou2.png" alt="" height="17px" width="17px" class="gou">
						</div>
						<div class="weixinpay midder_mine">
							<img src="../assets/weixinpay.svg" alt="" height="30px" width="30px">
							&nbsp;&nbsp;微信支付
						</div>
					</div>
				</div>
				
			</div>
			<div class="submit hors_verc">
				<div class="submit_btn midder_mine" @click="zhifusuccess">
					确认支付
				</div>
			</div>
		</div>
	</div>
</div>
</template>
<script>
export default {
	name:"shouyintai_midder",
	data() {
		return {
			minemsg:'',
			storemsg:'',
			zongjia:0,
			flag:0,
			flagli:1+JSON.parse(sessionStorage.getItem('shopcar')).length
		}
	},
	methods:{
		zhifusuccess(){
			let that=this
			let mine=JSON.parse(sessionStorage.getItem('chooseads'))
			let store=JSON.parse(sessionStorage.getItem('shopcar'))
				this.$axios({
					method:'post',
					url:'/shikedingdan',
					data:{
						username:sessionStorage.getItem('username'),
						dingdandata:sessionStorage.getItem('shopcar')
					}
				}).then(function(res){
					if(res.data=='success')
					{
						that.flag++
					}
				})
				for(let i=0;i<store.length;i++)
				{
					let storemsg={"peisongsetting":store[i].peisongsetting,"sumprices":store[i].sumprices,"content":store[i].content,"customer":sessionStorage.getItem('chooseads')}
					this.$axios({
						method:'post',
						url:'/storedingdan',
						data:{
							msgsum:JSON.stringify(storemsg),
							username:store[i].username,
							storename:store[i].storename
						}
					}).then(function(res){
						if(res.data=='success1')
						{
							that.flag++
							let storemsg1=storemsg
							storemsg1.username=store[i].username
							that.$socket.emit('gengxinmsg',storemsg1)
						}
					})
				}
			/*if(flag==1 && flag1==1)
			{
				console.log(111)
				sessionStorage.removeItem('shopcar')
				sessionStorage.removeItem('chooseads')
				that.$router.push({name:'index'})
			}*/
		}
	},
	sockets:{
		connect(){
			this.$socket.emit('login');
			console.log('连接成功')
        },
	},
	mounted(){
		this.$socket.emit('login');
	},
	watch: {
		flag(val){
			console.log(val)
			if(val==this.flagli){
				let dataz=JSON.parse(sessionStorage.getItem('alldata'))
				if(dataz.dingdan=="" || dataz.dingdan==null)
				{
					dataz.dingdan=sessionStorage.getItem('shopcar')
					this.GLOBAL.alldata.dingdan=sessionStorage.getItem('shopcar')
					sessionStorage.setItem('alldata',JSON.stringify(dataz))
				}
				else{
					let datax=JSON.parse(sessionStorage.getItem('shopcar'))
					let datazz=JSON.parse(dataz.dingdan)
					for(let i=0;i<datax.length;i++)
					{
						datazz.push(datax[i])
					}
					dataz.dingdan=JSON.stringify(datazz);
					this.GLOBAL.alldata.dingdan=JSON.stringify(datazz)
					sessionStorage.setItem('alldata',JSON.stringify(dataz))
				}
				sessionStorage.removeItem('shopcar')
				sessionStorage.removeItem('chooseads')
				this.$router.push({name:'index'})
			}
		}
	},
	created() {
		let mine=JSON.parse(sessionStorage.getItem('chooseads'))
		let store=JSON.parse(sessionStorage.getItem('shopcar'))
		this.minemsg=mine
		for(let i=0;i<store.length;i++)
		{
			if(i==store.length-1){
				this.storemsg=this.storemsg+store[i].storename
			}else{
				this.storemsg=this.storemsg+store[i].storename+','
			}
			this.zongjia=this.zongjia+store[i].sumprices
		}
		
	}
	
}
</script>
<style lang="scss" scoped>
    .midder{
		height:auto;
		min-height: 400px;
		width: 100%;
		position: relative;
		margin-top: 20px;
		.dingdanxxq{
		height:120px;
		width:100%;
		position: relative;
		border: 1px solid #cccccc;
		background: white;
	}
	.dingdanxxq_h{
		height:34%;
		width: 96%;
		margin:0 auto;
		border-bottom: 1px solid #cccccc;
		font-size: 16px;
	}
	.xq_msg{
		height:66%;
		width: 96%;
		margin:0 auto;
		color:#656363;
	}
	.pay_way{
		height:240px;
		width: 100%;
		position: relative;
		border: 1px solid #cccccc;
		background: white;	
		margin-top: 10px;
		padding: 10px 0;
	}
	.pay_way_h{
		height:21%;
		width: 96%;
		margin:0 auto;
		border-bottom: 1px solid #cccccc;
		font-size: 15px;
		font-weight: 600;
	}
	.pay_waychoose{
		height:50%;
		width: 96%;
		margin:0 auto;
		border-bottom: 1px solid #cccccc;
	}
	.submit{
		height:28%;
		width: 96%;
		margin:0 auto;
	}
	.submit_btn{
		height:60%;
		width: 100px;
		background: #f74342;
		color:white;
	}
	.zifubao{
		padding: 10px;
		position: relative;
		border: 1px solid red;
		font-size: 16px;
	}
	.weixinpay{
		padding: 10px;
		position: relative;
		border: 1px solid #cccccc;
		font-size: 16px;
		margin-left: 10px;
	}
	.gou{
		right:0;
		bottom: 0;
		position: absolute;
	}
	}
</style>