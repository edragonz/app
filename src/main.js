import Vue from 'vue'
import App from './App.vue'
import TypeNav from '@/components/TypeNav'
Vue.component(TypeNav.name, TypeNav)
import Carousel from '@/components/Carousel'
Vue.component(Carousel.name, Carousel)
//引入路由
import VueRouter from 'vue-router'
import router from './router/index';
//引入mockServe.js---mock数据
import '@/mock/mockServe'
import store from './store'

import {
  reqCategoryList
} from '@/api'
import "swiper/css/swiper.css"

Vue.use(VueRouter)
new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  router,
  store
}).$mount('#app')