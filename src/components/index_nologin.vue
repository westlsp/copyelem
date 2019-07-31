<template>
    <div class="botder midder_mine">
        请先 <router-link :to="{name:'login_register'}">[登录]</router-link>
    </div>
</template>
<style lang="scss" scoped>
    .botder{
        height:150px;
        width: 100%;
        position: relative;
        font-size: 14px;
        background: #f5f5f5;
        a{
            font-size: 14px;
            color:blue;
        }
    }
</style>