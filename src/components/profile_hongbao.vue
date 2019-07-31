<template>
    <div id="mine_hongbao">
				<div class="minehb_aller">
					<div class="recent_dingdan">
						<div class="midder_mine" style="height:100%;width: 120px;border-bottom: 2px solid #1e89e0;font-size: 15px;font-weight: 600;"> 
							可用红包
						</div>
					</div>
					<div class="midder_mine" style="height:300px;width: 95%;position: relative;">
						<img src="../assets/wudingdan_img.png" alt="" height="100px" width="80px">
						<p style="color:#999999;">暂无可用红包</p>
					</div>
				</div>
			</div>
</template>
<script>
export default {
    name:"profile_hongbao"
}
</script>
<style lang="scss" scoped>
    #mine_hongbao{
		width:100%;
		height:auto;
		position:relative;
		.minehb_aller{
		width:100%;
		height:auto;
		position: relative;
		background: white;
		border:1px solid #cccccc;
		margin-bottom: 20px;
		padding: 20px 0;
	}
	}
</style>