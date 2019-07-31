<template>
    <div class="store_fenlei">
	<div class="home_contain2 fenlei_con">
		<p class="midder_mine" style="padding: 10px;float: left;">商家分类:</p>
		<a href="" class="select_two midder_mine">全部商家</a>
		<a href="" class="select_one midder_mine">美食</a>
		<a href="" class="select_one midder_mine">快餐便当</a>
		<a href="" class="select_one midder_mine">特色菜系</a>
		<a href="" class="select_one midder_mine">异国料理</a>
		<a href="" class="select_one midder_mine">小吃夜宵</a>
		<a href="" class="select_one midder_mine">甜品饮品</a>
		<a href="" class="select_one midder_mine">鲜花绿植</a>
		<a href="" class="select_one midder_mine">早餐</a>
		<a href="" class="select_one midder_mine">午餐</a>
		<a href="" class="select_one midder_mine">下午茶</a>
		<a href="" class="select_one midder_mine">晚餐</a>
		<a href="" class="select_one midder_mine">夜宵</a>
	</div>
</div>
</template>
<script>
export default {
    name:"index_select"
}
</script>
<style lang="scss" scoped>
   .store_fenlei{
		height:60px;
		width: 100%;
		position: relative;
		.fenlei_con{
		background: white;
		border:1px solid #cccccc;
		color:#999999;
		padding: 10px 0;
	}
	.select_two{
		padding: 10px;
		background: #f6f6f6;
		float: left;
		margin-left:10px;
	}
	.select_one{
		margin: 5px;
		padding: 5px;
		float: left;
		margin-left:10px;
	}
	.select_one:hover{
		background: #f6f6f6;
	} 
	}
</style>