<template>
    <div id="shop_car_right" style="position: fixed;height:200px;width: 280px;;bottom: 0;right:0;z-index:10000;">
	<div class="shopcar_t" v-bind:class="{mymoveverclass:showed}">
		<div class="shopcar_top">
		<div class="midder_mine" style="height:100%;width:100px;position: absolute;top:0;left: 0;">购物车<a href="" style="color:#0089dc;">[清空]</a></div>
		<div class="midder_mine" style="height:100%;width:50px;position: absolute;right: 0;">
			<img src="../assets/add.svg" alt="" width="20px" height="20px">
		</div>
		</div>
		<div style="width:100%;height:75%;position:absolute;background:white;bottom:0;overflow-y: scroll;">
			<template v-for="(foods,index) in food">
				<div class="car_food" >
					<p class="car_food_l">{{foods.content}}</p>
					<p class="car_food_r midder_mine">x{{foods.amount}}</p>
					<p class="car_food_r midder_mine">￥{{foods.price}}</p>
					<div class="deletebtn midder_mine" @click="delete_food($event)" :data-index="index">删除</div>
				</div>
			</template>
		</div>
	</div>
	<div style="position: absolute;height:20%;left:0;bottom: 0; width: 60%;background:#2c2c2c;z-index:1000;">
		<div class="midder_mine" style="height:100%;width: 40px;position:absolute;left:0;" v-on:click="showed=!showed"><span class="car_pic"></span>
		</div>
		<div class="midder_mine" style="height:100%;width: 100px;color:#999999;position:absolute;left:30px;">
			<p style="border-left: 1px solid #999999;padding-left: 10px;">配送费￥{{peisongjia.peisong}}</p>
		</div>
	</div>
	<div class="midder_mine" style="position: absolute;height:20%;right:0;bottom: 0; width: 40%;background: #e4e4e4;font-size: 14px;font-weight: 600;z-index:1000;" v-if="nohave">购物车是空的</div>
	<div class="midder_mine" style="position: absolute;height:20%;right:0;bottom: 0; width: 40%;background: #67C23A;font-size: 14px;font-weight: 600;z-index:1000;color:white" @click="jiesuanbtn" v-else>￥{{sumprice}}结算</div>
</div>
</template>
<script>
export default {
	name:"shopcar_fixed",
	data() {
		return {
			showed:false,
			food:[],
			nohave:true,
			peisongjia:'',
			sumprice:0
		}
	},
	props:{
		gfood:'',
	},
	methods:{
		jiesuanbtn(){
			this.$router.push({name:'dingdan'})
			let dataz=JSON.parse(sessionStorage.getItem('shopcar'))
			for(let i=0;i<dataz.length;i++)
			{
				dataz[i].sumprices=parseInt(JSON.parse(dataz[i].peisongsetting).peisong)+parseInt(JSON.parse(dataz[i].peisongsetting).canhe)
				for(let j=0;j<dataz[i].content.length;j++)
				{
					dataz[i].sumprices=dataz[i].sumprices+parseInt(dataz[i].content[j].price)*dataz[i].content[j].amount
				}
			}
			sessionStorage.setItem('shopcar',JSON.stringify(dataz))
		},
		delete_food(event){
			let sess=JSON.parse(sessionStorage.getItem('storemsg'))
			let datasum=JSON.parse(sessionStorage.getItem('shopcar'))
			let indexa=event.currentTarget.dataset.index;
			this.sumprice=this.sumprice-parseInt(this.food[indexa].price)
			if(this.food[indexa].amount==1)
			{
				this.food.splice(indexa,1)
				//console.log(JSON.stringify(this.food))
			}
			else
			{
				this.food[indexa].amount--
			}
			for(let i=0;i<datasum.length;i++)
			{
				if(datasum[i].username==sess.username && datasum[i].storename==sess.storename)
				{
					datasum[i].content=this.food
					if(JSON.stringify(this.food)=='[]')
					{
						datasum.splice(i,1)
						this.nohave=true;
						//console.log("dad")
					}
					break;
				}
			}
			sessionStorage.setItem('shopcar',JSON.stringify(datasum))
		},
	},
	created(){
		let datasum=JSON.parse(sessionStorage.getItem('shopcar'))
		let sess=JSON.parse(sessionStorage.getItem('storemsg'))
		//this.food =JSON.parse(val);
		for(let i=0;i<datasum.length;i++){
			if(datasum[i].username==sess.username && datasum[i].storename==sess.storename)
			{
				this.food=datasum[i].content
				this.peisongjia=JSON.parse(datasum[i].peisongsetting)
				if(datasum[i].contentl!='[]' && datasum[i].content!='' && datasum[i].content!=null  && datasum[i].content!=[]){
					this.nohave=false;
				}
				break
			}
		}
		this.sumprice=0
		for(let i=0;i<this.food.length;i++){
			this.sumprice=this.sumprice+parseInt(this.food[i].price)*this.food[i].amount
		}
		this.sumprice=this.sumprice+parseInt(this.peisongjia.peisong)
	},
	watch: {
		gfood(val) {
		let datasum=JSON.parse(val)
		let sess=JSON.parse(sessionStorage.getItem('storemsg'))
		//this.food =JSON.parse(val);
		for(let i=0;i<datasum.length;i++){
			if(datasum[i].username==sess.username && datasum[i].storename==sess.storename)
			{
				this.food=datasum[i].content
				this.peisongjia=JSON.parse(datasum[i].peisongsetting)
				if(datasum[i].contentl!='[]' && datasum[i].content!='' && datasum[i].content!=null && datasum[i].content!=[]){
					this.nohave=false;
				}
				break
			}
		}
		this.sumprice=0
		for(let i=0;i<this.food.length;i++){
			this.sumprice=this.sumprice+parseInt(this.food[i].price)*this.food[i].amount
		}
		this.sumprice=this.sumprice+parseInt(this.peisongjia.peisong)
		console.log("new")
	  },
	},
}
</script>
<style lang="scss" scoped>
	.mymoveverclass{
			animation:myvermove 1s ;
			animation-iteration-count: 1;
			animation-fill-mode:forwards;
		}
		@keyframes myvermove {
			from {top:120px;}
			to {top:0;}
		}
		#shop_car_right{
	.shopcar_t{
		position: absolute;height:80%;left:0;top: 120px; width: 100%;background:white;border-top: 2px solid #0089dc;z-index:999;
	}
	.shopcar_top{
		height:25%;width:100%;position:absolute;top:0;border-bottom:1px solid #cccccc;
	}
    .car_pic{
		height:20px;width: 20px;background: url(../assets/shopchar_white.svg);background-size: 100% 100%;position: relative;
	}
	.car_food{
		height:50px;
		width: 100%;
		position: relative;
		display: flex;
		.car_food_r{
			flex:1
		}
		.car_food_l{
			flex:3;
			padding-left:10px;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			border-bottom: 1px solid #EBEEF5;
		}
		.deletebtn{
			flex:1
		}
	}	
		}
</style>