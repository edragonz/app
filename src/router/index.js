import Vue from 'vue'
// import { turn } from 'core-js/core/array'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Search from '../pages/Search'
export default new VueRouter({
  routes:[
    {
      path:"/home",
      component:Home,
      meta:{show:true}
    },
    {
      path:"/login",
      component:Login,
      meta:{show:false}
    },
    {
      path:"/register",
      component:Register,
      meta:{show:false}
    },
    {
      name:'search',
      path:"/search/:keyword?",
      component:Search,
      meta:{show:true}
    },
    //重定向，在项目跑起来的时候  访问/，立马让他定向到首页 
    {
      path:'*',
      redirect:"/home"
    }
  ]
})
