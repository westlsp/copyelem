// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import axios from  'axios'
import VueAMap from 'vue-amap';
import VueSocketio from 'vue-socket.io'
//import VueResource from 'vue-resource'
import 'element-ui/lib/theme-chalk/index.css';
import globalvar from './api/globalvar'
axios.defaults.baseURL="http://localhost:3000"
axios.defaults.withCredentials = true;
Vue.prototype.GLOBAL=globalvar;
Vue.prototype.$axios= axios
Vue.config.productionTip = false
//Vue.use(VueResource)
Vue.use(new VueSocketio({
  debug: true,
  connection: 'http://localhost:3000',
  vuex: {
  }
}))
Vue.use(ElementUI)
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: 'bbad254d308c2b9cf19019e9bfc5b8c4',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
