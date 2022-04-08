<template>
  <div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <renk></renk>
    <Like></Like>
    <Floor v-for="(floor) in floorList" :key="floor.id" :list='floor'></Floor>
    <Brand></Brand>
    <!-- <button @click="add">点击我加一</button>
    <div>{{count}}</div>
    <button>点我减一</button> -->
  </div>
</template>

<script>
import ListContainer from './ListContainer/index.vue'
import Recommend from './Recommend/index.vue'
import Renk from './Renk/index.vue'
import Like from './Like/index.vue'
import Floor from './Floor/index.vue'
import Brand from './Brand/index.vue'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  components: {
    ListContainer,
    Recommend,
    Renk,
    Like,
    Floor,
    Brand,
  },
  mounted(){
    this.$store.dispatch('getFloorList')
  },
  computed:{
    ...mapState({
      floorList:(state)=>state.home.floorList
    })
  },
}
</script>

<style>
</style>