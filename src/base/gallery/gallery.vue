<template>
<transition name="slide">
  <div class="container"  ref='galleryContainer'
                         @click.stop="handleClick($event)"
    >
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(item, index) of imgs" :key='index'>
          <img class="gallery-img" :src="'/'+item" width="375px" height="285px">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</transition>
</template>

<script>

export default {
  props:{
   imgs: {
       type: Array,
       default:[]
   }
  },
  methods:{
    handleClick(e) {
      if(e.target.nodeName !== 'IMG'){
        this.$emit('close')
      }
    }
  },
  data () {
     return {
       swiperOptions: {
           pagination: '.swiper-pagination',
           paginationType:'fraction',
           observeParents: true,
           observer:true
       }
     }
 }
}

</script>

<style lang="stylus" scoped>
  &.slide-enter-active, &.slide-leave-active
    transition: all 0.3s
  &.slide-enter, &.slide-leave-to
    transform: translate3d(100%, 0, 0)
.container 
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #000;
  z-index: 999
  .wrapper 
    width:100%
    height: 0
    overflow: hideen
    padding-bottom: 70%
    .gallery-img
     width: 100%
     text-align: center
    .swiper-pagination
     color:#fff

</style>
