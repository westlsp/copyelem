<template>
    <div class="outer">
        <shengheheader></shengheheader>
        <shenghemidder></shenghemidder>
        <shenghemsg></shenghemsg>
    </div>
</template>
<script>
import shengheheader from './shenghe_header'
import shenghemidder from './shenghe_midder'
import shenghemsg from './shenghe_msg'
export default {
    name:"shenghe",
    components:{
        shengheheader,
        shenghemidder,
        shenghemsg
    }
}
</script>
<style lang="scss" scoped>
    .outer{
       height:100%;
       width: 100%;
       position:relative;
       background:white;
   }
</style>