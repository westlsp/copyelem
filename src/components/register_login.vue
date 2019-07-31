<template>
    <div class="outer">
        <registercon></registercon>
        <loginresfooter></loginresfooter>
    </div>
</template>
<script>
import registercon from '@/components/register_con.vue'
import loginresfooter from '@/components/login_resfooter.vue'
export default {
    name:"register_login",
    components:{
        registercon,
        loginresfooter
    }
}
</script>
<style lang="scss" scoped>
    .outer{
       height:100%;
        width: 100%;
       position: relative;
       background:white;
   }
</style>