<template>
    <div class="outer">
        <storeheader :headermsg="headermsgk" @usernamecallback="umcallbackfunc"></storeheader>
        <template v-if="username!=undefined && username!=''">  
            <storenavto></storenavto>
            <storefood :foodmsg="foodmsgk" @sendcarfoodz="getcarfood"></storefood>
            <shopcar :gfood="carfood"></shopcar>
        </template>
        <botder v-else></botder>
        <div class="waier"><indexfooter></indexfooter></div>
    </div>
</template>
<script>
import storeheader from './store_header'
import storenavto from './store_nav2'
import storefood from './store_food'
import indexfooter from './index_footer'
import shopcar from './shopcar_fixed'
import botder from './index_nologin'
export default {
    name:"store",
    data() {
        return {
            headermsgk:'',
            foodmsgk:'',
            username:sessionStorage.getItem('username'),
            carfood:sessionStorage.getItem('shopcar'),
        }
    },
    components:{
        storeheader,
        storenavto,
        storefood,
        indexfooter,
        shopcar,
        botder
    },
    methods:{
         umcallbackfunc(msg){
            this.username=msg;
        },
        getcarfood(msg){
            console.log(msg)
            console.log(1)
            this.carfood=msg
        }
    },
    created(){
        //var that=this
        //console.log(this.$route.params.foodcontent)
        let datas=JSON.parse(sessionStorage.getItem('storemsg'))
        let headerdata={"storename":datas.storename,"peisongsetting":datas.peisongsetting}
        let fooddata={"gonggao":datas.gonggao}
        this.headermsgk=JSON.stringify(headerdata)
        this.foodmsgk=JSON.stringify(fooddata)
        console.log(sessionStorage.getItem('shopcar'))
        console.log(2)
        //this.carfood=sessionStorage.getItem('shopcar')
    },
    destroyed(){
        sessionStorage.removeItem('storemsg')
		console.log('aaaa')
	}
}
</script>
<style lang="scss" scoped>
    .outer{
       height:100%;
       width: 100%;
       position:relative;
       background:#f7f7f7;
       .waier{
           height:auto;
           width: 100%;
           position: relative;
           background: #f5f5f5;
       }
   }
</style>