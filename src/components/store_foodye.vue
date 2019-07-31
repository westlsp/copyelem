<template>
    <div class="store_foodye">
        <div class="food_sum">
			<div class="liebiao_list" style="height:60px;width: 100%;position: relative;border:1px solid
			 #cccccc;background: white;padding-bottom: 10px;">
			 <template v-for="foods in foodsum">
				 	<div class="liebiao_btn">{{foods.zubie}}</div>
			 </template>
				
				<!--<div class="liebiao_btn"><a href="#rexiao">热销</a></div>-->
			</div>
		</div>
		<template v-for="(foods,index0) in foodsum">
		
		<div id="rexiao" style="margin-top:20px;height:auto;width: 74%;position: relative;" >
			<p style="font-size: 18px;padding-left: 20px;margin-bottom: 10px;">{{foods.zubie}}&nbsp;<span style="color:#999999;font-size: 12px;">//</span></p>
			<template v-for="(foodss,index) in foods.content">
			<div style="width: 48%;height:78px;border:1px solid #cccccc;position:relative;background: white;display:inline-block;margin-bottom:20px;margin-left:10px;" v-if="foodss.zhonglei!=[] && foodss.zhonglei!=''">
				<img :src="'http://localhost:3000'+foodss.img" alt="" class="food_pic">
				<div style="height:100%;width: 75%;position: absolute;right:0;">
					<p style="padding: 5px;">{{foodss.content}}</p>
					<p style="font-size: 10px;color:#999999;padding:0 5px;">{{foodss.jieshao}}</p>
					<div style="height:10px;width: 100%;position: relative;"></div>
					<p style="padding:0 5px;color:red;">￥ {{foodss.price}} <span style="color#999999;">起</span></p>


					<el-popover
  						placement="right"
  						width="auto"
  						trigger="click"
						@after-leave="afterlv">

						<div style="height:auto; padding: 10px;magrin:10px;border:1px solid #cccccc;position: relative;">
							<p>规格</p>
							<el-select v-model="guige" clearable placeholder="请选择">
    								<el-option
     									 v-for="item in foodss.zhonglei"
      									:key="item.namew"
										:label="item.namew"
      									:value="item.namew">
    									</el-option>
  							</el-select>
						</div>
					<p style="color:#999999;">已选：</p>
					<p style="color:red;">￥{{foodss.price}}</p>
					<div class="midder_mine" style="height:auto;width: 120px;left:0;bottom: 0;background:#0089dc;color:white;padding: 5px;" :data-index="index" :data-indexx="index0" @click="joincar_guige($event)">选好了，加入购物车</div>
					<span style="color:#999999;position: absolute;right: 30px;bottom:15px;"></span>

  					<el-button style="padding:5px 20px;background: #0089dc;color:white;position: absolute;right:5px;
					bottom:5px;border-radius:20px;font-size:13px;" slot="reference">选规格</el-button>
					</el-popover>

					
				</div>
				</div>
				<div style="width: 48%;height:78px;border:1px solid #cccccc;position:relative;background: white;display:inline-block;margin-bottom:20px;margin-left:10px;" v-else>
				<img :src="'http://localhost:3000'+foodss.img" alt="" class="food_pic">
				<div style="height:100%;width: 75%;position: absolute;right:0;">
					<p style="padding: 5px;">{{foodss.content}}</p>
					<p style="font-size: 10px;color:#999999;padding:0 5px;">{{foodss.jieshao}}</p>
					<div style="height:10px;width: 100%;position: relative;"></div>
					<p style="padding:0 5px;color:red;">￥ {{foodss.price}} <span style="color#999999;">起</span></p>
					<el-button style="padding:5px 20px;background: #0089dc;color:white;position: absolute;right:5px;
					bottom:5px;border-radius:20px;font-size:13px;" @click="join_shopcar($event)" :data-index="index" :data-indexx="index0">加入购物车</el-button>
				</div>
				</div>
				</template>
			</div>
		</template>
    </div>
</template>
<script>
export default {
	name:"store_foodye",
	data() {
		return {
			foodsum:'',
			guige:''
		}
	},
	methods:{
		afterlv(){
			this.guige=''
		},
		joincar_guige(event){
			let indexz=event.currentTarget.dataset.index//2
			let indexx=event.currentTarget.dataset.indexx//1
			let datak=JSON.parse(JSON.parse(sessionStorage.getItem('storemsg')).food)
			let datax=datak[indexx].content[indexz]
			datax.zhonglei=this.guige
			datax.amount=1
			console.log(this.foodsum)
			let datac;
			let shangjiadata=JSON.parse(sessionStorage.getItem('storemsg'))
			if(sessionStorage.getItem('shopcar')==null || sessionStorage.getItem('shopcar')=='' || sessionStorage.getItem('shopcar')=='[]')
			{
				sessionStorage.setItem('shopcar','[]')
				let sumdata={"username":shangjiadata.username,"storename":shangjiadata.storename,"bossname":shangjiadata.bossname,"peisongsetting":shangjiadata.peisongsetting,"phone":shangjiadata.phone,"storeaddress":shangjiadata.storeaddress,"content":[]}
				sumdata.content.push(datax)
				datac=JSON.parse(sessionStorage.getItem('shopcar'))
				datac.push(sumdata)
				sessionStorage.setItem('shopcar',JSON.stringify(datac))
			}
			else{
				datac=JSON.parse(sessionStorage.getItem('shopcar'))
				let flag=0;
				let flag2=0;
				for(let i=0;i<datac.length;i++)
				{
					if(datac[i].username==shangjiadata.username && datac[i].storename==shangjiadata.storename)
					{
						for(let j=0;j<datac[i].content.length;j++)
						{
							if(datac[i].content[j].content==datax.content && datac[i].content[j].jieshao==datax.jieshao && datac[i].content[j].price==datax.price)
							{
								datac[i].content[j].amount++
								flag2=1
								break
							}
						}
						if(flag2==0){
							datac[i].content.push(datax)
						}
						sessionStorage.setItem('shopcar',JSON.stringify(datac))
						flag=1
						break
					}
				}
				if(flag==0){
					let sumdata={"username":shangjiadata.username,"storename":shangjiadata.storename,"bossname":shangjiadata.bossname,"peisongsetting":shangjiadata.peisongsetting,"phone":shangjiadata.phone,"storeaddress":shangjiadata.storeaddress,"content":[]}
					sumdata.content.push(datax)
					datac.push(sumdata)
					sessionStorage.setItem('shopcar',JSON.stringify(datac))
				}
			}
			/*if(sessionStorage.getItem('shopcar')==null || sessionStorage.getItem('shopcar')=='')
			{
				sessionStorage.setItem('shopcar','[]')
			}
			let datac=JSON.parse(sessionStorage.getItem('shopcar'))
			datac.push(datax)
			sessionStorage.setItem('shopcar',JSON.stringify(datac))*/
			this.$emit('sendcarfood',JSON.stringify(datac))
			this.guige=''
		},
		join_shopcar(event){
			//console.log(event.currentTarget.dataset.index)
			//console.log(event.currentTarget.dataset.indexx)
			let indexz=event.currentTarget.dataset.index//2
			let indexx=event.currentTarget.dataset.indexx//1
			let datax=this.foodsum[indexx].content[indexz]
			let datac;
			datax.amount=1
			datax.zhonglei=""
			let shangjiadata=JSON.parse(sessionStorage.getItem('storemsg'))
			if(sessionStorage.getItem('shopcar')==null || sessionStorage.getItem('shopcar')=='' || sessionStorage.getItem('shopcar')=='[]')
			{
				sessionStorage.setItem('shopcar','[]')
				let sumdata={"username":shangjiadata.username,"storename":shangjiadata.storename,"bossname":shangjiadata.bossname,"peisongsetting":shangjiadata.peisongsetting,"phone":shangjiadata.phone,"storeaddress":shangjiadata.storeaddress,"content":[]}
				sumdata.content.push(datax)
				datac=JSON.parse(sessionStorage.getItem('shopcar'))
				datac.push(sumdata)
				sessionStorage.setItem('shopcar',JSON.stringify(datac))
			}
			else{
				datac=JSON.parse(sessionStorage.getItem('shopcar'))
				let flag=0;
				let flag2=0;
				for(let i=0;i<datac.length;i++)
				{
					if(datac[i].username==shangjiadata.username && datac[i].storename==shangjiadata.storename)
					{
						for(let j=0;j<datac[i].content.length;j++)
						{
							if(datac[i].content[j].content==datax.content && datac[i].content[j].jieshao==datax.jieshao && datac[i].content[j].price==datax.price)
							{
								datac[i].content[j].amount++
								flag2=1
								break
							}
						}
						if(flag2==0){
							datac[i].content.push(datax)
						}
						sessionStorage.setItem('shopcar',JSON.stringify(datac))
						flag=1
						break
					}
				}
				if(flag==0){
					let sumdata={"username":shangjiadata.username,"storename":shangjiadata.storename,"bossname":shangjiadata.bossname,"peisongsetting":shangjiadata.peisongsetting,"phone":shangjiadata.phone,"storeaddress":shangjiadata.storeaddress,"content":[]}
					sumdata.content.push(datax)
					datac.push(sumdata)
					sessionStorage.setItem('shopcar',JSON.stringify(datac))
				}
			}
			//console.log(datac)
			this.$emit('sendcarfood',JSON.stringify(datac))
		}
	},
	created(){
		//console.log(this.$route.params.foodcontent)
		let datas=JSON.parse(sessionStorage.getItem('storemsg'))
		this.foodsum=JSON.parse(datas.food)

	}
}
</script>
<style lang="scss" scoped>
	.store_foodye{
		width:100%;height:100%;position:relative;
		.food_sum{
		height:auto;
		width: 74%;
		position: relative;

	}
	.food_pic{
		height:100%;width: 25%;position: absolute;left:0;
	}
	.liebiao_btn{
		width: 17%;height:20px;margin-left:10px;font-size: 14px;
		padding-left: 10px;
		position: relative;
		float: left;
		margin-top:10px;
	}
	.liebiao_btn:hover{
		background:#e4e4e4;
	}
	.scroll_list{
		height:auto;
		width: 74%;
		position: relative;
	}
	.hover_store{
		width: 240px;
		border: 2px solid #d5d4d4;
		position: absolute;
		right:-265px;
		bottom:-110px;
		padding: 10px;
		background: white;height:auto;z-index: 999;
	}
	.zuosanjiao{
		height:10px;
		width: 10px;
		border-left: 2px solid #d5d4d4;
		border-bottom: 2px solid #d5d4d4;
		transform: rotate(45deg);
		position: absolute;
		background: white;
		top:10px;
		left:-7.5px;
	}
	}
</style>