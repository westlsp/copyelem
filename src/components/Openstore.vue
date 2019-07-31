<template>
    <div class="outer">
        <openstoreheader></openstoreheader>
        <liucheng></liucheng>
        <questions></questions>
        <footeros></footeros>
    </div>
</template>
<script>
import openstoreheader from './openstore_header'
import liucheng from './openstore_liucheng'
import questions from './openstore_questions'
import footeros from './openstore_footer'
export default {
    name:"openstore",
    components:{
        openstoreheader,
        liucheng,
        questions,
        footeros
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