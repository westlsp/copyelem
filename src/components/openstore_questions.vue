<template>
    <div class="kd_questions">
	<div class="home_contain">
			<h3 style="text-align: center;padding-top: 80px;font-size:16px;">常见问题</h3>
			<div class="ques_one">
				<div class="ques_oneli">
					<h4>1.开店是如何收费的？</h4>
					<p>开店本身不收取任何费用。 产⽣订单后会收取平台服务费，根据不同的地区、配送方案，大致如下:
· ⻔店⾃行配送：每笔订单金额的 5%~8%;
· 配送：每笔订单金额的 15%~25%;
申请提交后，会有市场经理与您详细沟通。</p>
				</div>
				<div class="ques_oneli">
					<h4>2.申请开店需要哪些材料？</h4>
					<p>门脸照片、店内照片、门店logo、身份证照片、营业执照、餐饮服务许可证（或其他食品流通许可证等有效证件）。</p>
				</div>
			</div>
			<div class="ques_one">
				<div class="ques_oneli">
					<h4>3.想找个市场经理帮我开店，如何联系？</h4>
					<p>您需先点击“我要开店”按钮申请开店，然后，将自动为您联系一位市场经理。</p>
				</div>
				<div class="ques_oneli">
					<h4>4.开店审核需要多久？</h4>
					<p>提交申请后，1~3个工作日内将会有市场经理线下审核店铺信息，如超时未处理，您可直接联系市场经理。</p>
				</div>
			</div>
			<div class="ques_one">
				<div class="ques_oneli">
					<h4>5.提交申请后，如何查询审核结果？</h4>
					<p>您可通过“饿了么商家版”App 查看当前审核状态。</p>
				</div>
				<div class="ques_oneli">
					<h4>6.店铺之前无效了，可以重新上线吗？</h4>
					<p>可以，实体店双证齐全可直接点击“我要开店”按钮申请开店。</p>
				</div>
			</div>
			<div class="ques_one">
				<div class="ques_oneli">
					<h4>7.无实体店或单证可以上线吗？</h4>
					<p>不可以，网上开店必须有线下实体门店，并且需要准备好营业执照与餐饮服务许可证（或其他类许可证等)。</p>
				</div>
				<div class="ques_oneli">
					
				</div>
			</div>
	</div>
</div>
</template>
<script>
export default {
    name:"openstore_questions"
}
</script>
<style lang="scss" scoped>
    .kd_questions{
		height:540px;
		width: 100%;
		position: relative;
		background: white;
		.ques_one{
		width:100%;
		height:auto;
		position:relative;
		display: flex;
		padding: 20px;
	}
	.ques_oneli{
		flex:1;
		margin:0 10px;
	}
	.ques_oneli p{
		margin-top: 10px;
	}
	}
</style>