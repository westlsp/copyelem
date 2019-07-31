<template>
    <div class="outer">
        <dingdanheader @usernamecallback="umcallbackfunc"></dingdanheader>
            <dingdanmidder v-if="username!=undefined && username!=''"></dingdanmidder>
            <botder v-else></botder>
        <div class="waier"><indexfooter></indexfooter></div>
    </div>
</template>
<script>
import dingdanheader from './dingdan_header'
import dingdanmidder from './dingdan_midder'
import indexfooter from './index_footer'
import botder from './index_nologin'
export default {
    name:"dingdan",
    data() {
        return {
            username:sessionStorage.getItem('username'),
        }
    },
    methods:{
        umcallbackfunc(msg){
            this.username=msg;
        }
    },
    components:{
        dingdanheader,
        dingdanmidder,
        indexfooter,
        botder
    }
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
           background: #f5f5f5;
       }
   }
</style>