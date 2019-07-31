<template>
    <div class="outer">
        <indexheader @usernamecallback="umcallbackfunc"></indexheader>
        <locatesear></locatesear>
        <template v-if="username!=undefined && username!=''">
            <rightmenu></rightmenu>
            <profilemanger></profilemanger>
        </template>
        <botder v-else></botder>
        <div class="waier"><indexfooter></indexfooter></div>
        
    </div>
</template>
<script>
import indexheader from './index_nav'
import locatesear from './locate_search'
import profilemanger from './profile_manger'
import indexfooter from './index_footer'
import rightmenu from './right_menufixed'
import botder from './index_nologin'
export default {
    name:"profile",
    data(){
        return {
            username:sessionStorage.getItem('username'),
        }
    },
    components:{
        indexheader,
        locatesear,
        profilemanger,
        indexfooter,
        rightmenu,
        botder
    },
    methods: {
        umcallbackfunc(msg){
            this.username=msg;
        }
    },
    beforeCreate() {
        if(sessionStorage.getItem('alldata')!='' && sessionStorage.getItem('alldata')!=null){
           this.GLOBAL.alldata=JSON.parse(sessionStorage.getItem('alldata'))
       }
    },
}
</script>
<style lang="scss" scoped>
    .outer{
       height:100%;
       width: 100%;
       position:relative;
       background:#f5f5f5;
       .waier{
           height:auto;
           width: 100%;
           position: relative;
           background: #f5f5f5;;
       }
   }
</style>