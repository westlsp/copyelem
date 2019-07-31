<template>
    <div class="all_store">
	<div class="home_contain2 store_con">
		<template v-for="(foods,index) in contentfood">
			<el-popover
  				placement="right"
  				width="400"
  				trigger="hover">
                <span style="position: relative;color:black;font-weight: 600;font-size: 14px;">{{foods.storename}}</span>
                <p style="position: relative;;color:#999999;font-size: 11px;padding: 10px 0;border-bottom: 1px solid #d5d4d4;margin-bottom: 10px;">{{foods.foodtype}}</p>
                <p style="color:black;margin-bottom: 10px;"><span style="border: 1px solid #999999;color:#999999;margin-right:4px;">保</span>爱空间三打两建埃里克SD卡建设路口</p>
                <div style="background: #f2f2f2;padding: 5px;margin-bottom: 10px">
                     <span style="margin:0 10px;color:black;">配送费￥{{JSON.parse(foods.peisongsetting).peisong}}</span>| <span style="margin:0 30px;color:black;">平均44分钟送达</span>
                </div>
                <p style="color:black;">跑楼正常开始</p>

  			<el-button  slot="reference" style="width:25%;position:relative;border-color:white;" @click="route_store($event)" :data-index="index">
			  <div class="store_msg" >
				  <img src="../assets/test.jpg" alt="" width="60px" height="60px">
            <span style="position: absolute;left:90px;color:black;font-weight: 600;font-size: 14px;">{{foods.storename}}</span>
            <div style="position: absolute;width:100%;height:20px;left:43px;top:36px;">
                <el-rate
                    v-model="value"
                    disabled
                    show-score
                    text-color="#ff9900"
                    >
                </el-rate>
            </div>
            <span style="position: absolute;left:90px;color:#999999;font-size: 11x;top:64px;">配送费￥{{JSON.parse(foods.peisongsetting).peisong}}</span>
            <span style="position: absolute;left:24px;color:#999999;font-size: 11px;top:90px;">{{index}}分钟</span>

			  </div>
		  </el-button>
		</el-popover>
		</template>
	</div>
</div>
</template>
<script>
export default {
	name:"inde_container",
	data() {
      return {
		value: 3.7,
		contentfood:[]
      }
	},
	methods:{
		route_store(event){
			let index=event.currentTarget.dataset.index
			let datac=this.contentfood[index]
			//---------------let datas=JSON.stringify(this.contentfood[index])
			//console.log(datac)
			/*--if(sessionStorage.getItem('storemsg')=='' || sessionStorage.getItem('storemsg')==null)
			{
				sessionStorage.setItem('storemsg','[]')
			}*/
			//--let storemsgdata=JSON.parse(sessionStorage.getItem('storemsg'))
			//--storemsgdata.push(datac)
			sessionStorage.setItem('storemsg',JSON.stringify(datac));
			//--console.log(storemsgdata)
			console.log("89")
			//---------------this.$router.push({name:'storefoodye',params:{foodcontent:datas}});
			this.$router.push({name:'storefoodye'});
			
		}
	},
	created(){
		var that=this
		this.$axios({
			method:'post',
			url:'/getstorecon',
		}).then(function(res){
			console.log(res.data)
			that.contentfood=res.data
		})
	},
}
</script>
<style lang="scss" scoped>
    .all_store{
		height:800px;
		width: 100%;
		position: relative;
		padding:40px 0 20px;
		.store_con{
		background: white;
		border:1px solid #cccccc;
		color:#999999;
	}
	.store_msg{
		height:85px;
		width: 100%;
		position: relative;
		float: left;
		border-bottom: 1px solid #cccccc;
		padding: 20px 0;
	}
	.store_msg img{
		position: absolute;
		left:15px;
	}
	.hover_store{
		width: 240px;
		border: 2px solid #d5d4d4;
		position: absolute;
		right:-265px;
		top:1px;
		padding: 10px;
	}
	.zuosanjiao{
		height:10px;
		width: 10px;
		border-left: 2px solid #d5d4d4;
		border-bottom: 2px solid #d5d4d4;
		transform: rotate(45deg);
		position: absolute;
		background: white;
		top:10px;
		left:-7.5px;
	}
	#right_menu{
		position: fixed;
		right:0;
		height:100%;
		width: 30px;
		background: #504d53;
		z-index: 999;
	}
	.menu_con{
		height:300px;
		width: 100%;
		position: relative;
	}
	.menu_icon1{
		width: 30px;
		height:30px;
		position: relative;
	}
	.car_icon{
		padding: 10px 5px;
		width: 30px;
		height:auto;
		border-top:1px solid #737074;
		border-bottom:1px solid #737074;
	}
	.message_icon{
		width: 30px;
		height:30px;
		position: relative;
		margin-bottom: 80px;
	}
	.erweima_con{
		width: 30px;
		height:30px;
		position: relative;
	}
	.icon_hover:hover{
		background: #1e89e0;
	}
	}
</style>