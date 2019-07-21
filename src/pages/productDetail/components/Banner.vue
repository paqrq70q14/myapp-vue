<template>
  <div>
    <div class="banner" @click="handleImgClick" height="350px">
      <img :src="'/'+titleImg" @load="imageLoad" class="banner-img"  >
      <!-- <div class="img-num">
        <span class="iconfont">&#xe632;</span>
        <span>5</span>
      </div> -->
    </div>
    <common-gallery 
      :imgs="imgs" 
      v-show="showGallery"
      @close="handleGalleryClose"
    ></common-gallery>
  </div>
</template>

<script>
import CommonGallery from "base/gallery/gallery";
export default {
  props:{
      imgs:{
        type: Array,
        default: []
      }
  },
  computed:{
    titleImg() {
      return this.imgs[0]
    }
  },
  components: {
    CommonGallery
  },
  methods: {
    handleImgClick() {
      this.showGallery = true;
    },
    handleGalleryClose() {
      this.showGallery = false;
    },
    imageLoad() {
      this.$emit('load')
    }
  },
  data() {
    return {
      showGallery: false
    };
  }
};
</script>

<style lang='stylus' scoped>
.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 70%;

  .banner-img {
    width: 100%;
    
    .img-num {
      position: absolute;
      bottom: 0.2rem;
      left: 0.2rem;
      line-height: 0.4rem;
      padding: 0.1rem;
      border-radius: 0.2rem;
      height: 0.4rem;
      background: rgba(0, 0, 0, 0.5);
      color: #fff;
    }
  }
}
</style>
