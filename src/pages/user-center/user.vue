<template>
  <transition name="slide"> 
      <div class="user-center">
          <div class="user-title">
              <router-link to="/" class="back">后退</router-link>
              <div class="content">收藏/关注</div>
              <div class="hidden"></div>
          </div>
          <div class="switches-wrapper">
            <switches @switch="switchItem" :switches="switches" :currentIndex="currentIndex"> </switches>
          </div>
      <div class="list-wrapper">
        <scroll ref="favoriteList" class="list-scroll" v-if="currentIndex===0" :data="favoriteList">
            <product-list :houseInfo="favoriteList"></product-list>
        </scroll>
        <!-- <scroll ref="playList" class="list-scroll" v-if="currentIndex===1" >
          <div class="list-inner">
             <product-list :houseInfo="searchHistory" v-if="currentIndex===1" :data="searchHistory"> </product-list>
          </div>
        </scroll> -->
      </div>
    </div>
  </transition>    
</template>

<script>
import {mapGetters} from 'vuex'
import Switches from 'base/switches/switches'
import productList from "pages/product-list/product-list";
import Scroll from 'base/scroll/scroll'

export default {
  computed: {
    ...mapGetters([
      'favoriteList'
     
    ])
  },
    data() {
        return {
            currentIndex: 0,
            switches: [
              {
                name: '收藏的房源'
              },
              {
                name: '关注的人'
              }
            ]
        }
    },
    methods: {
      switchItem(index) {
        this.currentIndex = index
      },
      toHouseDetails() {
        console.log(this.favoriteList)
       
      }
      
    },
    created() {
      console.log('fa', this.favoriteList)
  
    },
    components: {
        productList,
        Switches,
        Scroll
    },
}
</script>

<style lang="stylus" scoped> 
.user-center
  position: fixed
  top: 0
  bottom: 0
  z-index: 22
  width: 100%
  background-color #fff
  &.slide-enter-active, &.slide-leave-active
    transition: all 0.3s
  &.slide-enter, &.slide-leave-to
    transform: translate3d(100%, 0, 0)
  .user-title
    padding: .1rem .25rem
    background #66d4c3
    display: flex
    height: 0.7rem
    line-height: 0.7rem
    justify-content:space-between
    align-items:center
  .switches-wrapper
    margin: 10px 0 30px 0
  .list-wrapper
    position: fixed
    top: 2rem
    bottom: 0
    width: 100%
    .list-scroll
     height: 100%
     overflow: hidden
</style>

