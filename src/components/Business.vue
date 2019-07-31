<template>
    <div class="outer">
        <busheader></busheader>
        <busleftmenu></busleftmenu>
    </div>
</template>
<script>
import busheader from './business_header'
import busleftmenu from './business_leftmenu'
export default {
    name:"Business",
    data() {
        return {
            
        }
    },
    components:{
        busheader,
        busleftmenu,
    },
    methods:{
        
    },
    beforeCreate() {
       if(sessionStorage.getItem('alldata2')!='' && sessionStorage.getItem('alldata2')!=null){
           this.GLOBAL.alldata2=JSON.parse(sessionStorage.getItem('alldata2'))
       }
        //this.GLOBAL.alldata2=
    },
}
</script>
<style lang="scss" scoped>
    .outer{
       height:100%;
       width: 100%;
       position:relative;
       background:#f7f7f7;
   }
</style>