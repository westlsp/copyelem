<template>
    <div class="location_search">
	<div class="home_contain2">
		<p class="location_label">当前位置：<span style="color:black;">{{locateprop}}</span><router-link :to="{name:'home'}" style="margin-left:10px;color:#0089dc;">[切换地址]</router-link></p>
		<div class="search_click midder_mine">
			<el-input
   				 placeholder="搜索商家，美食..."
    				prefix-icon="el-icon-search"
    				v-model="search">
  			</el-input>
		</div>
	</div>
</div>
</template>
<script>
export default {
	name:"locatesearch",
	props:{
		
	},
	data() {
		return {
			search:'',
			locateprop:sessionStorage.getItem('located')
		}
	},
	methods:{
		
	}
}
</script>
<style lang="scss" scoped>
    .location_search{
		height:54px;
		width: 100%;
		position: relative;
		.search_click{
		width:auto;
		height: 100%;
		position: absolute;
		right:0;
		top:0;
	}
	.location_label{
		margin-top:20px;
		color:#999999;
		position: absolute;
		top:0;
		left: 0;
	} 
	}
</style>