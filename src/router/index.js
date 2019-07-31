import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home'
import loginregister from '@/components/login_register'
import registerlogin from '../components/register_login'
import index from '../components/index'
import openstore from '../components/openstore'
import dingdan from '../components/dingdan'
import shouyintai from '../components/shouyintai'
import shenghe from '../components/shenghe'
import store from '../components/store'
import profile from '../components/profile'
import profilecenter from '../components/profile_center'
import profiledingdan from '../components/profile_dingdan'
import profilehongbao from '../components/profile_hongbao'
import profileyue from '../components/profile_yue'
import profilejinbi from '../components/profile_jinbi'
import profileziliao from '../components/profile_ziliao'
import profiledizhi from '../components/profile_dizhi'
import storefoodye from '../components/store_foodye'
import storecomment from '../components/store_comment'
import business from '../components/business'
import busdingdan from '../components/bus_dingdanguanli'
import busgenghuanmima from '../components/bus_genghuanmima'
import busjibenpeisong from '../components/bus_jibenpeisong'
import busjichuguanli from '../components/bus_jichuguanli'
import busjinetixian from '../components/bus_jinetixian'
import busshipinguanli from '../components/bus_shipinguanli'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path:"/login",
      name:'login_register',
      component:loginregister
    },
    {
      path:"/register",
      name:'register_login',
      component:registerlogin
    },
    {
      path:"/index",
      name:'index',
      component:index
    },
    {
      path:"/openstore",
      name:'openstore',
      component:openstore
    },
    {
      path:"/dingdan",
      name:'dingdan',
      component:dingdan
    },
    {
      path:"/shouyintai",
      name:'shouyintai',
      component:shouyintai
    },
    {
      path:"/shenghe",
      name:'shenghe',
      component:shenghe
    },
    {
      path:"/store",
      name:'store',
      component:store,
      redirect:'storefoodye',
      children:[
        {
          path: '/storefoodye',
          name: 'storefoodye',
          component: storefoodye
        },
        {
          path: '/storecomment',
          name: 'storecomment',
          component: storecomment
        }
      ]
    },
    {
      path:"/profile",
      name:'profile',
      component:profile,
      redirect:'profilecenter',
      children:[
        {
          path: '/profilecenter',
          name: 'profilecenter',
          component: profilecenter
        },
        {
          path: '/profiledingdan',
          name: 'profiledingdan',
          component: profiledingdan
        },
        {
          path: '/profilehongbao',
          name: 'profilehongbao',
          component: profilehongbao
        },
        {
          path: '/profileyue',
          name: 'profileyue',
          component: profileyue
        },
        {
          path: '/profilejinbi',
          name: 'profilejinbi',
          component: profilejinbi
        },
        {
          path: '/profileziliao',
          name: 'profileziliao',
          component: profileziliao
        },
        {
          path: '/profiledizhi',
          name: 'profiledizhi',
          component: profiledizhi
        }
      ]
    },
    {
      path: '/business',
      name: 'business',
      component: business,
      redirect:'busjichuguanli',
      children:[
        {
          path: '/busdingdan',
          name: 'busdingdan',
          component: busdingdan
        },
        {
          path: '/busgenghuanmima',
          name: 'busgenghuanmima',
          component: busgenghuanmima
        },
        {
          path: '/busjibenpeisong',
          name: 'busjibenpeisong',
          component: busjibenpeisong
        },
        {
          path: '/busjichuguanli',
          name: 'busjichuguanli',
          component: busjichuguanli
        },
        {
          path: '/busjinetixian',
          name: 'busjinetixian',
          component: busjinetixian
        },
        {
          path: '/busshipinguanli',
          name: 'busshipinguanli',
          component: busshipinguanli
        }
      ]
    },
  ]
})
