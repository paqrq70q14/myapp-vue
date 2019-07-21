<template>
  <div class="container">
      <router-link tag="div" to="/" class="back">
        <i class="icon icon-back"></i>
      </router-link> 
     <Detail-banner :imgs="imgs" ref="bgImage" ></Detail-banner>  
        <div class="bg-layer" ref="layer"></div>     
       <scroll :data="this.houseDetail" 
              class="scroll-list" ref="scroll"
              :probe-type="probeType"
              :listen-scroll="listenScroll"
              @scroll="scroll"
              >
        <div>   
          <list :list="this.houseDetail"></list>
        </div>
       </scroll>  
    
    <bottom @click="handleClick"></bottom>
  </div>
</template>

<script>
import Gallery from "base/gallery/gallery";
import DetailBanner from "./components/Banner";
import Header from "./components/Header";
import Bottom from "./components/Bottom";
import List from './components/List'
import Scroll from 'base/scroll/scroll'
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {

  computed:{
    houseDetail(){
      return this.houseDetails
    },
    imgs() {
      return this.houseDetails.picAddr
    },
    ...mapGetters([
      'houseDetails'
    ])

  },

   data() {
    return {
      scrollY: 0, 
      showHeader: false,
      data: this.houseDetail,
      showGarrery: false
    };
  },
  watch: {
    scrollY(newY) {

      this.$refs.layer.style['transform'] = `translate3d(0,${newY}px,0)`
      this.$refs.layer.style['webkit-Transform'] = `translate3d(0,${newY}px,0)`

    }
  },  
   created() {
   if(!this.houseDetail._id){
     this.$router.push('/')
   }
   // 监听滚动
   this.probeType = 3
   this.listenScroll = true

   
 },

  methods: {
    ...mapActions({
      saveFav:'saveFavoriteList'
    }),
    handleClick() {
      this.saveFav(this.list)
      
    },
    scroll(pos) {
      this.scrollY = pos.y
    }
  },

  components: {
    Header,
    Bottom,
    Scroll,
    DetailBanner,
    Gallery,
    List
  },
};
</script>

<style lang="stylus" scoped>
.container 
  position: fixed;
  top: 0
  left: 0
  bottom: 0
  right: 0
  width: 100%;
  background-color: #fff;
  .back
    position: fixed 
    top: 0.3rem
    left: 0.2rem
    z-index: 50
    color: #fff
  .scroll-list
    position: fixed
    top: 4.8rem
    left: 0
    right: 0
    bottom: 0
    width: 100%
   .bg-layer
    position: relative
    height: 100%
    background-color #fff

</style>
