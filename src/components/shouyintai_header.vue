<template>
    <div class="header">
	<div class="header_img midder_mine">
		<div class="header_imgg"></div>
		收银台
	</div>
</div>
</template>
<script>
export default {
    name:"shouyintai_header"
}
</script>
<style lang="scss" scoped>
    .header{
		height:80px;
		width: 100%;
		position: relative;
		background: #008de1;
		.header_img{
		height:100%;
		width: 240px;
		position: relative;
		color:white;
		font-size: 22px;
		}
		.header_imgg{
		height:60%;
		width: 120px;
		position: relative;
		background: url(../assets/mkm_logo1.png);
		background-size: 100% 100%;
		margin:0 20px;
		}
	}
</style>