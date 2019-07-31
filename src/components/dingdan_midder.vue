<template>
    <div id="dingdan_midder">
	<div class="dd_mm_con home_contain2">
		<div class="ddmm_left">
			<div class="ddmml_h">
				<div class="ddmml_hl hors_verc">
					订单详情
				</div>
				<div class="ddmml_hr hors_verc2">
					&laquo;返回商家修改
				</div>
			</div>

			<template v-for="foods in food">
			
			<div class="ddmml_m">
				<div class="ddmml_ml hors_verc">
					<div>
					<p style="margin-bottom: 20px;color:#999999;">商家</p>
					<p>{{foods.storename}}</p>
					</div>
				</div>
				<div class="ddmml_mm midder_mine" style="color:#999999;">
					份数
				</div>
				<div class="ddmml_mr hors_verc2" style="color:#999999;">
					小计(元)
				</div>
			</div>
			<template v-for="foodss in foods.content">
			<div class="ddmml_m2">
				<div class="ddmml_m2l">
					{{foodss.content}}({{foodss.zhonglei}})
				</div>
				<div class="ddmml_m2m midder_mine">
					<el-input-number size="mini" v-model="foodss.amount" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
				</div>
				<div class="ddmml_m2r hors_verc2">
					￥{{foodss.price}}
				</div>
			</div>
			</template>
			<div class="peisongf">
				<div class="peisongf_hl hors_verc">
					配送费
				</div>
				<div class="peisongf_hr hors_verc2">
					￥{{JSON.parse(foods.peisongsetting).peisong}}
				</div>
			</div>
			<div class="peisongf">
				<div class="peisongf_hl hors_verc">
					餐盒费
				</div>
				<div class="peisongf_hr hors_verc2">
					￥{{JSON.parse(foods.peisongsetting).canhe}}
				</div>
			</div>
			<div class="sum_price">
				<p style="color:red;padding-right: 20px;width: auto;position: relative;text-align: right;">￥<span style="font-size: 40px;">{{foods.sumprices}}</span></p>
				<!--<p style="color:#999999;padding-right: 20px;width: auto;position: relative;text-align: right;">共2件商品</p>-->
			</div>
	
		</template>
		</div>
		<div class="ddmm_right">
			<div class="address">
				收货地址
				<div class="address_msg hors_verc">
					<img src="../assets/address.svg" alt="" height="40px" width="40px" style="margin:0 20px;">
					<div class="address_msg_txt">
						<p>{{addresspp.lianxiren}}&nbsp;先生&nbsp;{{addresspp.dianhua}}</p>
						<p>{{addresspp.dizhi}}</p>
						<img src="../assets/gou.png" alt="" height="34px" width="34px" style="position: absolute;right:0;bottom: 0;">
						
						<el-popover
  							placement="bottom"
  							width="400"
  							trigger="click">
							  <div style="width:400px;height:500px;overflow-y:scroll;position:relative;border:1px solid black;">
								<template v-for="(ads,index) in addressall">
								<div class="small_block old_address" @click="addresschange($event)" :data-index="index">
									<p>{{ads.lianxiren}}&nbsp;&nbsp;先生(女士)</p>
                                	<p style="height:20px;width: 90%;position: relative;margin:10px 0 5px 0;">{{ads.dizhi}}</p>
                                	<p>{{ads.dianhua}}</p>
								</div>
								</template>
							</div>
  							<span style="color:#008de1;font-size: 14px;font-weight: 200;position: absolute;top:10px;right:10px;z-index:999;" slot="reference">修改地址</span>
						</el-popover>
					</div>
				</div>
				<router-link style="color:#008de1;font-size: 14px;font-weight: 200;text-decoration: underline;position: absolute;top:0;right:0;" :to="{name:'profiledizhi'}">添加新地址</router-link>
			</div>
			<div class="pay_way">
				付款方式&nbsp;&nbsp;<span style="font-size: 12px;font-weight: 200;color:orange;">推荐使用在线支付，不用找零，优惠更多</span>
				<div class="pay_wayh hors_verc">
					<div class="pay_way_txt">
						<p>在线支付</p>
						<p style="color:#999999;">支持微信、支付宝、QQ钱包及大部分银行卡</p>
					</div>
					<img src="img/gou.png" alt="" height="34px" width="34px" style="position: absolute;right:0;bottom: 0;">
				</div>
			</div>
			<div class="youhui">
				选择优惠
				<p style="font-size: 12px;font-weight: 200;margin-top: 15px;padding-left: 10px;">使用红包<span style="margin-left: 10px;">无可用红包</span></p>
			</div>
			<div class="other_msg">
				其他信息
				<p style="font-size: 12px;font-weight: 200;margin-top: 15px;padding-left: 10px;">配送方式<span style="margin-left: 10px;">本订单由 <a href="" style="color:blue;">[咭味哆炸鸡汉堡(大学城店)]</a> 提供配送</span></p>
				<p class="hors_verc" style="font-size: 12px;font-weight: 200;margin-top: 15px;padding-left: 10px;">送达时间
					 <el-select v-model="value1" placeholder="请选择">
    					<el-option class="sanzeng2"
      						v-for="item in options1"
      						:key="item.value"
      						:label="item.label"
      						:value="item.value">
    					</el-option>
  					</el-select>
				</p>
				<p class="hors_verc" style="font-size: 12px;font-weight: 200;margin-top: 15px;padding-left: 10px;">发票信息<span style="margin-left: 10px;display: inline-block;padding: 10px; background: #999999;color:white;">Pc端不支持</span></p>
				<p class="hors_verc" style="font-size: 12px;font-weight: 200;margin-top: 15px;padding-left: 10px;">订单备注<el-input class="sanzeng" v-model="input" placeholder="请输入内容"></el-input></p>
				<p class="hors_verc" style="font-size: 12px;font-weight: 200;margin-top: 15px;padding-left: 10px;">餐具份数
					<el-select v-model="value2" placeholder="请选择">
    					<el-option class="sanzeng2"
      						v-for="item in options2"
      						:key="item.value"
      						:label="item.label"
      						:value="item.value">
    					</el-option>
  					</el-select>
				</p>
			</div>
			<div class="submit">
				<div class="submit_clk midder_mine" @click="xiadanbtn">确认下单</div>
			</div>
		</div>
	</div>
</div>
</template>
<script>
export default {
	name:"dingdanmidder",
	data() {
		return {
			food:JSON.parse(sessionStorage.getItem('shopcar')),
			addresspp:JSON.parse(JSON.parse(sessionStorage.getItem('alldata')).address)[0],
			addressall:JSON.parse(JSON.parse(sessionStorage.getItem('alldata')).address),

			options1: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
		}], 
		 value1:'',
		 options2: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
		}], 
		 value2:'',
		}
	},
	methods:{
		addresschange(event){
			console.log(event.currentTarget.dataset.index);
			let xiabiao=event.currentTarget.dataset.index
			this.addresspp=this.addressall[xiabiao]
			sessionStorage.setItem('chooseads',JSON.stringify(this.addressall[xiabiao]))
		},
		xiadanbtn(){
			this.$router.push({name:'shouyintai'})
			if(sessionStorage.getItem('chooseads')==null || sessionStorage.getItem('chooseads')=='')
			{
				sessionStorage.setItem('chooseads',JSON.stringify(this.addresspp))
			}	
		}
	},
	created() {
		if(sessionStorage.getItem('chooseads')!=null && sessionStorage.getItem('chooseads')!='')
		{
			this.addresspp=JSON.parse(sessionStorage.getItem('chooseads'));
		}	
	},
}
</script>
<style lang="scss" scoped>
    #dingdan_midder{
		height:auto;
		width: 100%;
		background: #f5f5f5;
		padding-bottom: 20px;
		.sanzeng{
		margin-left: 10px;height:30px;width: 200px;
	}
	.sanzeng2{
		margin-left: 10px;height:30px;width: 150px;
	}
	.dd_mm_con{
		display: flex;
		margin-top: 10px;
	}
	.small_block{
		height:70px;
		width: 220px;
		border:1px solid blue;
		padding:15px;
		color:#999999;
		position: relative;
		margin:0 10px;
		margin-top:20px;
	}
	.old_address{
			display:inline-block;
	}
	.ddmm_left{
		height:auto;
		background: white;
		position: relative;
		flex: 34;
		margin-right: 20px;
		border: 1px solid #cccccc;
		padding-bottom: 10px;
	}
	.ddmm_right{
		flex:64;
		height:auto;
		background: white;
		position: relative;
		border: 1px solid #cccccc;
		padding: 20px 0;
	}
	.ddmml_h{
		height:30px;
		width: 100%;
		padding:10px 0;
		position: relative;
		display: flex;
	}
	.ddmml_hl{
		flex:1;
		padding-left: 20px;
		font-size: 15px;
		font-weight: 600;
	}
	.ddmml_hr{
		flex:1;
		padding-right: 20px;
		color:#999999;
	}
	.ddmml_m{
		height:60px;
		width: 100%;
		padding:10px 0;
		border-top: 1px solid #cccccc;
		border-bottom: 1px solid #cccccc;
		position: relative;
		display: flex;
	}
	.ddmml_ml{
		flex:2;
		padding-left: 20px;
	}
	.ddmml_mm{
		flex:2;
	}
	.ddmml_mr{
		flex:1;
		padding-right: 20px;
	}
	.ddmml_m2{
		height:20px;
		width: 100%;
		padding:10px 0;
		border-bottom: 1px solid #cccccc;
		position: relative;
		display: flex;
		background: #f5f5f5;
	}
	.ddmml_m2l{
		flex:2;
		padding-left: 20px;
		color:#999999;
	}
	.ddmml_m2m{
		flex:2;
	}
	.jian{
		height:16px;
		width: 16px;
		border-bottom: 1px solid #cccccc;
		border-top: 1px solid #cccccc;
		border-left: 1px solid #cccccc;
	}
	.sum{
		height:16px;
		width: 16px;
		border: 1px solid #cccccc;
	}
	.jia{
		height:16px;
		width: 16px;
		border-bottom: 1px solid #cccccc;
		border-top: 1px solid #cccccc;
		border-right: 1px solid #cccccc;
	}
	.ddmml_m2r{
		flex:1;
		padding-right: 20px;
	}
	.peisongf{
		height:30px;
		width: 100%;
		padding:10px 0;
		position: relative;
		display: flex;
	}
	.peisongf_hl{
		flex:1;
		padding-left: 20px;
	}
	.peisongf_hr{
		flex:1;
		padding-right: 20px;
	}
	.sum_price{
		height:60px;
		width: 100%;
		padding:10px 0;
		position: relative;
	}
	.address{
		height:100px;
		width: 94%;
		position: relative;
		margin: 0 auto;
		font-size: 15px;
		font-weight: 600;
		margin-bottom: 30px;
	}
	.address_msg{
		height:70%;
		width: 100%;
		position: relative;
		margin-top:10px;
		border: 1px solid #008de1;
	}
	.address_msg:hover{
		background:#f5f5f5;
	}
	.address_msg_txt{
		font-weight: 200;
		font-size: 14px;
		padding: 10px;
	}
	.pay_way{
		height:100px;
		width: 94%;
		position: relative;
		margin: 0 auto;
		font-size: 15px;
		font-weight: 600;
		margin-bottom: 30px;
	}
	.pay_wayh{
		height:70%;
		width: 47%;
		margin-top:10px;
		border: 1px solid #008de1;
		position: relative;
	}
	.pay_way_txt{
		font-size: 12px;
		padding-left: 10px;
		font-weight: 200;
	}
	.youhui{
		height:150px;
		width: 94%;
		position: relative;
		margin: 0 auto;
		font-size: 15px;
		font-weight: 600;
		margin-bottom: 30px;
	}
	.other_msg{
		height:260px;
		width: 94%;
		position: relative;
		margin: 0 auto;
		font-size: 15px;
		font-weight: 600;
		margin-bottom: 30px;
	}
	.submit{
		height:40px;
		width: 94%;
		position: relative;
		margin: 0 auto;
		font-size: 15px;
		margin-bottom: 30px;
	}
	.submit_clk{
		height:100%;
		width: 120px;
		position: relative;
		background: #999999;
		color:white;
		border-radius: 2px;
	}
	}
</style>