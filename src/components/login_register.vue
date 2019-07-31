<template>
    <div class="outer">
        <logincon></logincon>
        <loginresfooter></loginresfooter>
    </div>
</template>
<script>
import logincon from '@/components/login_con.vue'
import loginresfooter from '@/components/login_resfooter.vue'
export default {
    name:"login_register",
    components:{
        logincon,
        loginresfooter
    },
    methods:{
        
    }
}
</script>
<style lang="scss" scoped>
    .outer{
       height:100%;
        width: 100%;
       position: relative;
       background: white;
   }
</style>