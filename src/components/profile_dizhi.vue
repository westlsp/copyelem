<template>
    <div id="mine_address">
				<div class="ma_aller">
					<div class="recent_dingdan">
						<div class="midder_mine" style="height:100%;width: 120px;border-bottom: 2px solid #1e89e0;font-size: 15px;font-weight: 600;"> 
							地址管理
						</div>
					</div>
						<div class="address_block">
							<template v-for="addrsub in addresspp">
								<div class="small_block old_address">
								<p>{{addrsub.lianxiren}}&nbsp;&nbsp;先生(女士)</p>
                                <p style="height:20px;width: 90%;position: relative;margin:10px 0 5px 0;">{{addrsub.dizhi}}</p>
                                <p>{{addrsub.dianhua}}</p>
                                <span style="position: absolute;top:15px;right:50px;">修改</span>
                                <span style="position: absolute;top:15px;right:20px;">删除</span>
								</div>
							</template>

							<el-popover
  											placement="right"
  											width="400"
  											trigger="click">
								<div style="margin-bottom:20px;">
								<el-input placeholder="请输入" v-model="lianxiren">
    								<template slot="prepend">联系人</template>
  								</el-input>
								  </div>
								  <div style="margin-bottom:20px;">
								<el-input placeholder="请输入" v-model="dianhua">
    								<template slot="prepend">电话</template>
  								</el-input>
								  </div>
								  <div style="margin-bottom:20px;">
								  <el-input placeholder="请输入" v-model="dizhi">
    								<template slot="prepend">地址</template>
  								</el-input>
								  </div>
								  <el-button size="medium" type="primary" round @click="updateads">确认</el-button>
								<div class="small_block new_address" slot="reference">
                                <img src="../assets/add.svg" alt="" height="20px" width="20px">
                                添加新地址
								</div>
							</el-popover>
							

						</div>
				</div>
			</div>
</template>
<script>
export default {
	name:"profile_address",
	data() {
		return {
			lianxiren:'',
			dianhua:'',
			dizhi:'',
			addresspp:JSON.parse(this.GLOBAL.alldata.address)
		}
	},
	methods:{
		updateads(){
			var that=this
			var letbiao=[]
			//console.log(that.GLOBAL.alldata.address)
			if(that.GLOBAL.alldata.address!=null){
				//console.log(2222)
				letbiao=JSON.parse(that.GLOBAL.alldata.address)
			}
			let dataaddress={"lianxiren":that.lianxiren,"dianhua":that.dianhua,"dizhi":that.dizhi}
			letbiao.push(dataaddress)
				
			//console.log(JSON.stringify(letbiao))
			this.$axios({
				 method:'post',
				 url:'/insertlocation',
				 data:{
					 addressall:JSON.stringify(letbiao),
					 username:this.GLOBAL.alldata.username,
				 }
			 }).then(function(){
				 	//console.log(res.data)
					 that.GLOBAL.alldata.address=JSON.stringify(letbiao)
					 sessionStorage.setItem('alldata',JSON.stringify(that.GLOBAL.alldata))
					that.addresspp=letbiao
					that.lianxiren=''
					that.dianhua=''
					that.dizhi=''
			 })
		}
	}
}
</script>
<style lang="scss" scoped>
    #mine_address{
		width:100%;
		height:auto;
		position:relative;
	.ma_aller{
		width:100%;
		height:auto;
		max-height:700px;
		position: relative;
		background: white;
		border:1px solid #cccccc;
		margin-bottom: 20px;
		padding: 20px 0;
		overflow-y: scroll;
	}
	.address_block{
		width: 95%;
		height:auto;
		margin:0 auto;
		position: relative;
	}
	.small_block{
		height:70px;
		width: 220px;
		border: 1px solid #cccccc;
		position: relative;
		padding:15px;
		color:#999999;
		margin:0 10px;
		margin-top:20px;
	}
	.old_address{
			display:inline-block;
	}
	.new_address{
			display:flex;
			justify-content: center;
			align-items:center;
	}
	.small_block p{
		color:black;
	}
	.small_block:hover{
		border-color: #1e89e0;
		color:#1e89e0;
	}
	}
</style>