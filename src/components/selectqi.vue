<template>
  <el-select v-model="value" placeholder="请选择" style="margin-left:20px;" @change="foodtypeget">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      >
    </el-option>
  </el-select>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: '甜品饮品',
          label: '甜品饮品'
        }, {
          value: '鲜花绿植',
          label: '鲜花绿植'
        }, {
          value: '汉堡披萨',
          label: '汉堡披萨'
        }, {
          value: '包子粥铺',
          label: '包子粥铺'
        }, {
          value: '休闲零食',
          label: '休闲零食'
        },{
          value: '烧烤海鲜',
          label: '烧烤海鲜'
        },{
          value: '异国料理',
          label: '异国料理'
        },
        {
          value: "地方美食",
          label: '地方美食'
        }],
        value: ''
      }
    },
    methods:{
      foodtypeget(value){
          console.log(value);
          this.$emit('sendfoodtype',value)
      }
    }
  }
</script>