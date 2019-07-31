<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
.recent_dingdan{
		height:30px;
		width: 95%;
		position: relative;
		border-bottom:2px solid #cccccc;
		margin:0 20px;
}
#app{
    height:100%;
    width: 100%;
    position:relative;
}
.midder_mine{
	display: flex;
	justify-content: center;
	align-items: center;
}
.double_flexstart{
	display: flex;justify-content: flex-start;align-items: flex-start;
}
.input_mine{
	height:42px;
	width: 260px;
	border:1px solid rgba(201,195,195,1.00);
	font-size: 14px;
	padding-left: 10px;
}
.home_contain{
		height:100%;
		position: relative;
		margin:0 auto;
}
@media (min-width: 1260px){
		.home_contain{
			width:1260px;
		}
}
@media (max-width: 1260px) {
		.home_contain{
			width: 100%;
		}
}
@media (max-width: 768px) {
		.home_contain{
			width: 768px;
		}
}
.hors_verc{
	display: flex;justify-content: flex-start;align-items: center;
}
.hors_verc2{
	display: flex;justify-content:flex-end;align-items: center;
}
.home_contain2{
		height:100%;
		width: 1080px;
		margin: 0 auto;
		position: relative;
}
.home_contain3{
		height:100%;
		width: 1260px;
		margin: 0 auto;
		position: relative;
}
html,body,a,div,input,p,h1,h2,h3,h4,h5,ul,li,img,nav,span{
		margin:0;
		padding:0;
}
html,body{
		width:100%;
		height:100%;
}
body{
		position: relative;
		background:white;
}
div,p{
    font-size: 12px;
}
a{
	text-decoration: none;
	color:black;
	font-size: 12px;
}
a:hover{
	text-decoration: none;
}
ul,li{
	list-style: none;
	list-style-type: none;
}
img{
	background: rgba(255,255,255,0);
}
input,textarea{
	border:0;
	/*outline: none;/*点击不会出现蓝色边框*/
	appearance: none;
	-webkit-appearance: none;
    -moz-appearance: none;
}
input{
		padding-left: 20px;
}
select{
	border: none;
    outline: none;
	appearance: none;
	-webkit-appearance: none;
    -moz-appearance: none;
}
input[disabled]{
    background-color:white;
    color:#ACA899;
	opacity: 1;
}
input:-webkit-input-placeholder { /* WebKit browsers */
　color:#cccccc;/*#d1d1d1*/
}
　　input:-ms-input-placeholder { /* Internet Explorer 10+ */
　　color:#cccccc;
}
</style>
