<template>
    <div id="message_menu">
	<div class="home_contain2 mm_con">
		<div class="menu_left">
			<div class="midder_mine menu_left_sub">
                <p style="text-align: center;border-right:1px solid #cccccc;width: 100%;position: relative;"><router-link :to="{name:'storefoodye'}">所有商品</router-link></p>
            </div>
            <div class="midder_mine menu_left_sub">
                <p style="text-align: center;width: 100%;position: relative;"><router-link :to="{name:'storecomment'}">评价</router-link></p>
            </div>
            <div class="midder_mine menu_left_sub">
                <p style="text-align: center;border-left:1px solid #cccccc;width: 100%;position: relative;">商家资质</p>
            </div>

		</div>
		<div class="menu_midder">
			<div class="midder_mine menu_left_sub2">
				<div class="midder_mine" style="width: 100%;position: relative;">默认排序</div>
			</div>
			<div class="midder_mine menu_left_sub2">
				<div class="midder_mine" style="width: 100%;position: relative;"><span class="jiangxu_icon"></span>评分</div>
			</div>
			<div class="midder_mine menu_left_sub2">
				<div class="midder_mine" style="width: 100%;position: relative;"><span class="jiangxu_icon"></span>销量</div>
			</div>
			<div class="midder_mine menu_left_sub2">
				<div class="midder_mine" style="width: 100%;position: relative;"><span class="jiangxu_icon"></span>价格</div>
			</div>
			<div class="midder_mine switch_pailie">
				<div class="pailie plpp"></div>
				<div class="fanggepailie plpp"></div>
			</div>
		</div>
		<div class="menu_search">
			<input type="text" placeholder="搜索商家，美食...">
			<div class="search_icon midder_mine">
				<img src="../assets/search.svg" alt="" width="20px" height="20px">
			</div>
		</div>
	</div>
</div>
</template>
<script>
export default {
    name:"store_nav"
}
</script>
<style>
    #message_menu{
		height:50px;
		width: 100%;
		position: relative;
		background:white;
	}
	.menu_left{
		height:100%;
		width: 26%;
		position: absolute;
		left:0;
		display: flex;
		font-size: 15px;
	}
	.menu_left_sub{
		flex:1;border-bottom: 3px solid #0089dc;
	}
	.menu_left_sub2{
		flex:1;
	}
	.menu_midder{
		height:100%;
		width: 34%;
		position: absolute;
		left:450px;
		display: flex;
	}
	.jiangxu_icon{
		height:20px;
		width: 20px;
		position: relative;
		background: url(../assets/jiangxu.svg);
		background-size: 100% 100%;
	}
	.switch_pailie{
		flex:1;
	}
	.menu_search{
		height:100%;
		width: 26%;
		position: absolute;
		right:0;
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}
	.menu_search input{
		border-top:1px solid #cccccc;
		border-left:1px solid #cccccc;
		border-bottom:1px solid #cccccc;
		height:26px;
		width: 70%;
		position: relative;
		padding-left: 10px;
		outline: none;
	}
	.search_icon{
		height:26px;
		width: 26px;
		background: white;
		background-size: 100% 100%;
		border-top:1px solid #cccccc;
		border-right:1px solid #cccccc;
		border-bottom:1px solid #cccccc;
		cursor: pointer;
	}
	.plpp{
		border:1px solid #cccccc;height:20px;width:20px;
	}
	.pailie{
		background:url(../assets/pailie.svg);
		background-size: 100% 100%;
	}
	.fanggepailie{
		background:url(../assets/fangge.svg);
		background-size: 100% 100%;
	}
</style>
