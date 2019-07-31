<template>
    <div class="midder_header">
	<div class="home_contain2" style="background: #f5f5f5;margin-top: 10px;display: flex;">
		<div class="onestep midder_mine">
			<img src="../assets/success.svg" alt="" height="20px" width="20px">
			<p>信息提交</p>
		</div>
		<div class="twostep midder_mine">
			<span style="position: absolute;left:0;height:auto;width:auto;color:#999999;">&raquo;</span>
			<img src="../assets/two.svg" alt="" height="20px" width="20px">
			<p>信息审核</p>
		</div>
	</div>
</div>
</template>
<script>
export default {
    name:"shenghe_midder"
}
</script>
<style lang="scss" scoped>
    .midder_header{
		height:50px;
		width: 100%;
		position: relative;
		.onestep{
		flex:1;
		color:#5fb97c;
		font-size: 16px;
		position: relative;
	}
	.twostep{
		flex:1;
		color:#999999;
		font-size: 16px;
		position: relative;
	}
	}
</style>