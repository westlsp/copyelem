<template>
    <div class="right_menu" v-bind:class="{mymoveclass:showed}">
	<div class="menu_con midder_mine">
		<div class="menu_con_con ">
		<div class="midder_mine menu_icon1 icon_hover"><router-link :to="{name:'profiledingdan'}"><img src="../assets/menu.svg" alt="" width="26px" height="26px;" style="position: relative;margin"></router-link></div>
		<div class="car_icon icon_hover" v-on:click="showed=!showed">
			<img src="../assets/shopcar.svg" alt="" width="22px" height="22px;">
			<span style="color:#cccccc;writing-mode: vertical-lr;">购物车</span>
		</div>
		<div class="midder_mine message_icon icon_hover"><img src="../assets/message.svg" alt="" width="22px" height="22px;" style="position: relative;margin"></div>
		<div class="erweima_con midder_mine icon_hover">
			<img src="../assets/erweima_icon.svg" alt="" width="22px" height="22px;" style="position: relative;margin">
		</div>
		</div>
	</div>
	<div class="right_menu_sb">
		<div class="right_menu_sbtop midder_mine">
			购物车
			<i class="el-icon-caret-bottom"></i>
		</div>
		<div style="height:80%;width:100%;position:relative;overflow-y:scroll;">
			<template v-for="(foods,indexz) in kfood">
				<div>{{foods.storename}}</div>
		<template v-for="(foodss,index) in foods.content">
				<div class="car_food" >
					<p class="car_food_l">{{foodss.content}}</p>
					<p class="car_food_r midder_mine">x{{foodss.amount}}</p>
					<p class="car_food_r midder_mine">￥{{foodss.price}}</p>
					<div class="deletebtn midder_mine" @click="delete_food($event)" :data-index="index" :data-indexz="indexz">删除</div>
				</div>
			</template>
				<div>{{JSON.parse(foods.peisongsetting).peisong}}</div>
			</template>
		<div >
		</div>
		</div>
		<div class="jiesuan midder_mine" v-if="nohave">
			购物车是空的
		</div>
		<div class="jiesuan_suc midder_mine" @click="jiesuanbtn" v-else>
			￥{{sumprice}}结算
		</div>
	</div>
</div>
</template>
<script>
export default {
	name:"right_menu",
	data() {
		return {
			showed:false,
			food:'',
			kfood:'',
			nohave:true,
			sumprice:0
		}
	},
	methods: {
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
			let indexa=event.currentTarget.dataset.index;
			let indexz=event.currentTarget.dataset.indexz;
			this.sumprice=this.sumprice-parseInt(this.kfood[indexz].content[indexa].price)
			if(this.kfood[indexz].content[indexa].amount==1)
			{
				this.kfood[indexz].content.splice(indexa,1)
			}
			else{
				this.kfood[indexz].content[indexa].amount--
			}
			if(this.kfood[indexz].content==[] ||this.kfood[indexz].content=='')
			{
				this.kfood.splice(indexz,1)
			}
			sessionStorage.setItem('shopcar',JSON.stringify(this.kfood))
			console.log(sessionStorage.getItem('shopcar'))
			console.log(this.food)
			if(sessionStorage.getItem('shopcar')=='[]' || sessionStorage.getItem('shopcar')=='')
			{
				this.nohave=true
			}
		}
	},
	created() {
		if(sessionStorage.getItem('shopcar')!=null && sessionStorage.getItem('shopcar')!='' && sessionStorage.getItem('shopcar')!='[]'){
			this.nohave=false;
			/*let dataz=JSON.parse(sessionStorage.getItem('shopcar'))
			for(let i=0;i<dataz.length;i++)
			{
				this.sumprice=this.sumprice+parseInt(dataz[i].price)
			}*/
			let datasum=JSON.parse(sessionStorage.getItem('shopcar'))
			this.kfood=datasum
			for(let i=0;i<datasum.length;i++)
			{
				this.sumprice=this.sumprice+parseInt(JSON.parse(datasum[i].peisongsetting).peisong)
				for(let j=0;j<datasum[i].content.length;j++)
				{
					this.sumprice+=parseInt(datasum[i].content[j].price)*datasum[i].content[j].amount
				}
			}
			/*let foodda=[]
			for(let i=0;i<datasum.length;i++){
				
				for(let j=0;j<datasum[i].content.length;j++)
				{
					foodda.push(datasum[i].content[j])
				}
				//this.peisongjia=JSON.parse(datasum[i].peisongsetting)
			}
			this.food=foodda
			this.sumprice=0
			for(let i=0;i<this.food.length;i++){
				this.sumprice=this.sumprice+parseInt(this.food[i].price)
			}
			this.sumprice=this.sumprice+parseInt(this.peisongjia.peisong)*/
		}
		//this.food =JSON.parse(val);
	},
	beforeCreate(){
		if(sessionStorage.getItem('shopcar')==null || sessionStorage.getItem('shopcar')=='' )
		{
			sessionStorage.setItem('shopcar','[]')
		}
	}
}
</script>
<style lang="scss" scoped>
		.mymoveclass{
			animation:mymove 1s ;
			animation-iteration-count: 1;
			animation-fill-mode:forwards;
		}
		@keyframes mymove {
			from {right:-170px;}
			to {right:0px;}
		}
    .right_menu{
		position: fixed;
		right:-170px;
		top:0;
		height:100%;
		width:200px;
		background: #504d53;
		z-index: 999;
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
		.right_menu_sb{
			height:100%;
			width: 170px;
			position:absolute;
			right:0;
			background: #EBEEF5;
		}
		.right_menu_sbtop{
			background: white;
			font-size: 16px;
			height:30px;
			border-bottom:1px solid #cccccc;
		}
		.jiesuan{
			height:50px;
			width: 100%;
			background: #e4e4e4;
			position:absolute;
			bottom: 0;
			font-size: 16px;
		}
		.jiesuan_suc{
			height:50px;
			width: 100%;
			background: #67C23A;
			position:absolute;
			bottom: 0;
			font-size: 16px;
			color:white;
		}
	.menu_con{
		height:100%;
		width: 30px;
		position: absolute;
		left:0;
	}
	.menu_con_con{
		height:300px;
		width: 100%;
		position: relative;
	}
	.menu_icon1{
		width: 30px;
		height:30px;
		position: relative;
	}
	.car_icon{
		padding: 10px 5px;
		width: 30px;
		height:auto;
		border-top:1px solid #737074;
		border-bottom:1px solid #737074;
		cursor: pointer;
	}
	.message_icon{
		width: 30px;
		height:30px;
		position: relative;
		margin-bottom: 80px;
	}
	.erweima_con{
		width: 30px;
		height:30px;
		position: relative;
	}
	.icon_hover:hover{
		background: #1e89e0;
	}
	}
	
</style>