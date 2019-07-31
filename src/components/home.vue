<template>
    <div class="outer">
        <headerok></headerok>
        <bottomok></bottomok>
    </div>
</template>
<script>
import headerok from '@/components/home_header.vue'
import bottomok from '@/components/home_bottom.vue'
export default {
    name:"home",
    components:{
        headerok,
        bottomok,
    },
    sockets:{
        connect(){
            console.log('success')
        }
    }
}
</script>
<style lang="scss" scoped>
   .outer{
       height:100%;
       width: 100%;
       position:relative;
   }
</style>