<template>
    <el-cascader
    v-model="value"
    :options="options"
    @change="handleChange">
    </el-cascader>
</template>
<script>
export default {
    data() {
      return {
            value: [],
            options: [{
                value: '浙江省',
                label: '浙江省',
                    children: [{
                        value: '杭州市',
                        label: '杭州市',
                        children:[{
                            value: '上城区',
                            label: '上城区',
                        },{
                            value: '下城区',
                            label: '下城区',
                        },{
                            value: '江干区',
                            label: '江干区',
                        },{
                            value: '拱墅区',
                            label: '拱墅区',
                        },{
                            value: '西湖区',
                            label: '西湖区',
                        },{
                            value: '滨江区',
                            label: '滨江区',
                        },{
                            value: '萧山区',
                            label: '萧山区',
                        },{
                            value: '余杭区',
                            label: '余杭区',
                        },{
                            value: '桐庐县',
                            label: '桐庐县',
                        },{
                            value: '淳安县',
                            label: '淳安县',
                        },{
                            value: '建德市',
                            label: '建德市',
                        },{
                            value: '富阳市',
                            label: '富阳市',
                        },{
                            value: '临安市',
                            label: '临安市',
                        },]
                    },{
                        value: '宁波市',
                        label: '宁波市',
                    },{
                        value: '温州市',
                        label: '温州市',
                    },{
                        value: '嘉兴市',
                        label: '嘉兴市',
                    },{
                        value: '湖州市',
                        label: '湖州市',
                    },{
                        value: '绍兴市',
                        label: '绍兴市',
                        children:[{
                            value: '越城区',
                            label: '越城区'
                        },{
                            value: '绍兴县',
                            label: '绍兴县'
                        },{
                            value: '新昌县',
                            label: '新昌县'
                        },{
                            value: '诸暨市',
                            label: '诸暨市'
                        },{
                            value: '上虞市',
                            label: '上虞市'
                        },{
                            value: '嵊州市',
                            label: '嵊州市'
                        }]
                    },{
                        value: '金华市',
                        label: '金华市',
                    },{
                        value: '衢州市',
                        label: '衢州市',
                    },{
                        value: '舟山市',
                        label: '舟山市',
                    },{
                        value: '台州市',
                        label: '台州市',
                    },{
                        value: '丽水市',
                        label: '丽水市',
                    }]
            }]
      }
    },
    methods: {
      handleChange(value) {
          this.$emit('getlocation',this.value);
          console.log(value);
      }
    }
  }
</script>