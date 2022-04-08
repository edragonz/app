import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
import home from './home'
import search from './search'
// //  state:仓库储存数据的地方
// const state ={
//   count:1
// }
// //  mutations：修改state的唯一手段
// const mutations ={
//   ADD(state){
//     state.count++;
//   }
// }
// //  actions：处理action，可以书写组件的业务逻辑，也可以处理异步
// const actions ={
//   //这里可以书写业务逻辑，但是不能修改state
//   add({commit}){
//     commit("ADD")
//   }
// }
// //  getters：理解为计算属性，用于简化仓库属性，让组件获取仓库的数据更加方便
// const getters ={}
export default new Vuex.Store({
  // state,
  // mutations,
  // actions,
  // getters
  modules:{
    home,
    search
  }
});
