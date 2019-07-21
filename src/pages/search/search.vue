<template>
  <transition name="slide"> 
  <div class="container">
    <div class="header">
     <div class="header-wrapper">
          <i class="back" @click="back">返回 </i> 
          <div class="title">找房需求</div>
          <div class="hidden-box"></div> 
      </div>
    </div>
   <div class="content">
     <div class="city">敬请期待！</div>
   </div>
   <div class="address">

   </div>
  </div>
  </transition>
</template>

<script>
import SearchBox from "base/search-box/search-box";
import Searchlist from 'pages/search-list/search-list'
import axios from "axios";

export default {
  props: {},
  data() {
    return {
      placeholder: "请输入搜索关键字",
      hotkey: [],
      query: ''
    };
  },
  components: {
    SearchBox,
    Searchlist
  },
  created() {
    axios.get("/api/getHotkey").then(res => {
        this.hotkey = res.data.data.data.hotkey
        console.log('hotkey=', this.hotkey)
    });
  },
  methods: {
      addQuery(query){
          this.query = query
      },
      back() {
        this.$router.push('/')
      }
  }
};
</script>

<style lang="stylus" scoped>
// @import "~common/stylus/variable"
// @import "~common/stylus/mixin"
  &.slide-enter-active, &.slide-leave-active
    transition: all 0.3s
  &.slide-enter, &.slide-leave-to
    transform: translate3d(100%, 0, 0)
.container 
  position: fixed;
  width: 100%;
  top: 0;
  bottom: 0;
  background-color: #fff;
  .header
   position: relative
   height: 0.8rem
   background-color yellow
   .header-wrapper
    width: 100%
    height: 100%
    padding: 0.1rem
    display: flex
    justify-content: space-between

</style>
