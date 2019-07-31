<template>
    <div id="food">
	<div class="home_contain2 food_con">
		<div class="shangjia">
			<div class="gonggao" style="width: 100%;height:auto;position: relative;">
				<div style="width: 100%;height:20px;background: #0089dc;position: relative;color:white;padding: 10px 0;font-size: 15px;"><span style="margin-left: 20px;">商家公告</span></div>
				<div style="width: 100%;height:auto;background: white;position: relative;color:black;padding: 10px 0;"><span style="margin-left: 20px;">{{gonggao}}</span></div>
				<div style="width: 100%;height:20px;background: #f5f5f5;position: relative;color:black;padding: 10px 0;border: 1px solid #cccccc;"><p style="padding-left: 20px;"><span style="font-weight: 600;font-size: 14px;">配送说明：</span>上新品啦！</p></div>
				<div style="width: 100%;height:auto;background: white;position: relative;color:black;padding: 10px 0;border-bottom: 1px solid #cccccc;"><p style="padding-left: 20px;"><span style="color:#999999;border:1px solid #999999;">保</span>上新品啦！</p></div>
				<div class="midder_mine" style="width: 100%;height:auto;background: white;position: relative;color:black;padding: 10px 0;border-bottom: 1px solid #cccccc;"><a href="" style="color:black;font-size: 15px;">举报商家</a></div>
			</div>
		</div>
        <router-view @sendcarfood="getcarfood"></router-view>
	</div>
</div>
</template>
<script>
export default {
	name:"store_food",
	data() {
		return {
			gonggao:JSON.parse(this.foodmsg).gonggao
		}
	},
	props:{
		foodmsg:''
	},
	methods: {
		 getcarfood(msg){
			//console.log(msg)
			this.$emit('sendcarfoodz',msg)
        }
	},
}
</script>
<style lang="scss" scoped>
    #food{
		height:800px;
		width: 100%;
		position: relative;
		background: #f7f7f7;
		.food_con{
		padding-top:20px;
	}
	.shangjia{
		height:auto;
		width: 24%;
		position: absolute;
		right:0;
		top:20px;
	}
	}
	
</style>