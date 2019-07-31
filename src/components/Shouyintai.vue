<template>
    <div class="outer">
        <shouyintaiheader></shouyintaiheader>
        <shouyintaimidder></shouyintaimidder>
    </div>
</template>
<script>
import shouyintaiheader from './shouyintai_header'
import shouyintaimidder from './shouyintai_midder'
export default {
    name:"shouyintai",
    components:{
        shouyintaiheader,
        shouyintaimidder
    }
}
</script>
<style lang="scss" scoped>
    .outer{
       height:100%;
       width: 100%;
       position:relative;
       background:#f5f5f5;
   }
</style>
