<template>
	<div style="height:auto;width:100%;position:relativer">
		<template v-for="dingdan in dingdanmsg">
			<div style="height:auto;width:100%;position:relativer">
				<p class="paa">店面:{{dingdan.storename}}</p>
				<p class="paa">商家老板:{{dingdan.bossname}}</p>
				<p class="paa">电话:{{dingdan.phone}}</p>
				<p class="paa">商店地址:{{dingdan.storeaddress}}</p>
				<p class="paa">配送费:{{JSON.parse(dingdan.peisongsetting).peisong}}元 起送费:{{JSON.parse(dingdan.peisongsetting).qisong}}元 餐盒费:{{JSON.parse(dingdan.peisongsetting).canhe}}元</p>
				<template v-for="dingdans in dingdan.content">
			<div class="recent_dingdan_sum">
						<div class="rds_imgmsg hors_verc">
							<img src="../assets/test.jpg" alt="" height="80px" width="80px">
							<div class="rds_imgmsg_div">
								<p class="rds_imgmsg_p1">{{dingdans.content}}</p>
								<p class="rds_imgmsg_p2">{{dingdans.zhonglei}}</p>
								<p class="rds_imgmsg_p3">共<span class="rds_imgmsg_p3_span">{{dingdans.amount}}</span>件</p>
							</div>
						</div>
						<div class="rds_next1 midder_mine rds_next-time">
							2019-07-17 12:56
						</div>
						<div class="rds_next1 midder_mine">
							{{dingdans.amount*parseInt(dingdans.price)}}
						</div>
						<div class="rds_next1 midder_mine">
							<p>订单进行中<a href="" class="rds_next1_p_a">[订单详情]</a></p>
						</div>
			</div>
			</template>
			<p class="pas">￥{{dingdan.sumprices}}</p>
			</div>
		</template>
		</div>
</template>
<script>
export default {
	data() {
		return {
			dingdanmsg:JSON.parse(JSON.parse(sessionStorage.getItem('alldata')).dingdan)
		}
	},
}
</script>
<style lang="scss" scoped>
	.paa{
		height:auto;
		width: 95%;
		position: relative;
		margin:0 20px;
	}
	.pas{
		height:auto;
		width: 95%;
		position: relative;
		margin:0 20px;
		font-size: 22px;
		text-align: right;
		color:red;
	}
    .recent_dingdan_sum{
		height:100px;
		width: 95%;
		position: relative;
		border-bottom:1px solid #cccccc;
		margin:0 20px;
		display: flex;
        .recent_dingdan_div{
		height:100%;width: 80px;border-bottom: 2px solid #1e89e0;font-size: 15px;font-weight: 600;float: left;
	}
	.rds_imgmsg{
		flex:3;
	}
	.rds_imgmsg_div{
		margin-left:20px;
	}
	.rds_imgmsg_p1{
		font-size: 14px;font-weight: 600;
	}
	.rds_imgmsg_p3{
		color:#999999;padding: 5px 0;
	}
	.rds_imgmsg_p3{
		color:#999999;
	}
	.rds_imgmsg_p3_span{
		color:red;
	}
	.rds_next1{
		flex:1;
	}
	.rds_next-time{
		color:#999999;
		font-size: 12px;
	}
	.rds_next1_p_a{
		color:blue;
	}
	}
</style>