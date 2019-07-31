<template>
    <div class="outer">
        <navindex @usernamecallback="umcallbackfunc"></navindex>
        <locatesear></locatesear>
        <template v-if="username!=undefined && username!=''">
            <rightmenu></rightmenu>
            <selectindex></selectindex>
            <containerindex></containerindex>
        </template>
        <botder v-else></botder>
        <div class="waier"><footerindex></footerindex></div>
    </div>
</template>
<script>
import navindex from './index_nav'
import locatesear from './locate_search'
import selectindex from './index_select'
import containerindex from './index_container'
import footerindex from './index_footer'
import rightmenu from './right_menufixed'
import botder from './index_nologin'
export default {
    name:"index",
    data(){
        return {
            username:sessionStorage.getItem('username'),
        }
    },
    components:{
        navindex,
        locatesear,
        selectindex,
        containerindex,
        footerindex,
        rightmenu,
        botder
    },
    methods:{
        umcallbackfunc(msg){
            this.username=msg;
        }
    },
    watch:{

    }
}
</script>
<style lang="scss" scoped>
   .outer{
       height:100%;
       width: 100%;
       position:relative;
       background: white;
       .waier{
           height:auto;
           width: 100%;
           position: relative;
           background: white;
       }
   }
</style>