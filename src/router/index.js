/*
路由器对象
 */
import Vue from 'vue'
import VueRouter from 'vue-router'


import MSite from '../pages/MSite/MSite'
import Order from '../pages/Order/Order'
import Profile from '../pages/profile/Profile'
import Search from '../pages/Search/Search'
import Login from '../pages/Login/Login'

//使用插件
Vue.use(VueRouter)

export default new VueRouter({
  //所有路由
  routes: [

    {
      path: '/msite',
      component: MSite,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      redirect: '/msite',
    },
  ]


})
