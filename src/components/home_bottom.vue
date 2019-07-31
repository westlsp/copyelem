<template>
    <div class="home_bottom">
	<div class="home_contain">
		<div class="bottom_header midder_mine">
			<div class="erweima">
				
			</div>
			<div>
				<h3 style="color:#767676;">扫描二维码下载</h3>
				<h1 style="color:red;">最高立减30元</h1>
				<h3 style="color:#767676;">下载app立享优惠</h3>
			</div>
		</div>
		<div class="bottom_footer">
			<div class="bottom_footer_one">
				<a href="">我要开店</a>|
				<a href="">联系我们</a>|
				<a href="">关于我们</a>|
				<a href="">加入我们</a>|
				<a href="">服务条款和协议</a>|
				<a href="">营业执照</a>|
				<a href="">隐私政策</a>
			</div>
			<div class="bottom_footer_two">
				互联网药品信息服务资格证书:(沪)-经营性-2016-0011 | 增值电信业务许可证 : 沪B2-20150033 | 沪ICP备 09007032 | 上海工商行政管理 Copyright ©2008-2018 上海拉扎斯信息科技有限公司, All Rights Reserved.
			</div>
		</div>
	</div>
    </div>
</template>
<script>
export default {
    name:"home_bottom",
    data:{

    },
    props:{

    }
}
</script>
<style lang="scss" scoped>
	
     .home_bottom{
		width:100%;
		height:400px;
		background:white;
		position: relative;
		@mixin imgfunc($imgurl){
			background: url($imgurl);
			background-size: 100% 100%;
		}
	.bottom_header{
			width: 100%;
			height:70%;
			position: relative;
	}
	.erweima{
		height:200px;
		width: 200px;
		@include imgfunc('../assets/erweima.png');
		margin:0 20px;
	}
	.bottom_footer{
		width: 100%;
		height:30%;
	}
	.bottom_footer a{
		margin:0 10px;
		color:#767676;
	}
	.bottom_footer_one{
		height:auto;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
	}
	.bottom_footer_two{
		height:auto;
		width: 100%;
		position: relative;
		text-align:center;
		color:#767676;
		margin-top:5px;
	}
	}
	
</style>
