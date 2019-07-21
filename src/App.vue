<template>
  <div class="app">
    <m-header></m-header>
     <tab></tab>
     <div class="productlist-wrapper">
       <scroll :data="houseInfo" 
                class="scroll-list" 
               @scollToEnd='searchMore'
               >
        <product-list :houseInfo="houseInfo"></product-list>
        <div class="loading-container" v-show="!houseInfo.length"> 
         <loading></loading>          
        </div>
      </scroll>

     </div>
    <m-bottom></m-bottom>

     <keep-alive>
       <router-view></router-view>
     </keep-alive>
  </div>
</template>

<script>
import {getInfo, upload} from 'api/getInfo'
import MHeader from "./pages/m-header/m-header";
import MBottom from './pages/m-bottom/m-bottom'
import Tab from "./pages/tab/tab";
import productList from "./pages/product-list/product-list";
import Scroll from "base/scroll/scroll";
import loading from 'base/loading/loading'
import { mapGetters } from 'vuex'

export default {
  data: {
    show: true,
    houseInfo: []
  },
  components: {
    MHeader,
    Tab,
    productList,
    MBottom,
    Scroll,
    loading
  },
 created() {
   this._getInfo()
 },
  methods:{
    searchMore() {
      console.log(3232)
    },
    //获取房屋信息数据
    _getInfo(){
      upload().then((res) =>{

        this.houseInfo = res.data
      })

    }
  },
  data() {
    return {
      houseInfo: []
    };
  },
  computed:{
    ...mapGetters([
      'roomType',
      'search'
    ])
  },
  watch:{
  // 位置搜索
  search(newL) {
    upload().then((res) =>{
      this.houseInfo = res.data

    })
  },
  // 户型
   roomType() {
    upload().then((res) =>{
      console.log(res)
     this.houseInfo = res.data
    })
   }


},
};
</script>

<style lang="stylus" scoped>
.productlist-wrapper
  position: fixed
  width: 100%
  top: 2rem
  bottom: .8rem
  z-index: -1
  .loading-container
   position: absolute
   width: 100%
   top: 50%
   transform: translateY(-50%)
  .scroll-list
   height:100%
   overflow hidden

</style>


