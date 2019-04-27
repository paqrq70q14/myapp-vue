<template>
<div class="container">
    <div class="banner" @click="handleImgClick">
        <img src="/static/images/dd.jpg" alt class="banner-info">
        <div class="img-num">
        <span class="iconfont">&#xe632;</span>
        <span>5</span>
        </div>
    </div>
    <common-gallery 
      :imgs="imgs" 
      v-show="showGallery"
      @close="handleGalleryClose"
    ></common-gallery>
</div>
</template>

<script>
import CommonGallery from "common/gallery/gallery";
export default {
  name: "DetailBanner",
  components: {
    CommonGallery
  },
  methods:{
    handleImgClick(){
      this.showGallery = true
    },
    handleGalleryClose() {
    this.showGallery = false
}
  },
  data() {
     return {
         showGallery:false,
         imgs:["/static/images/dd.jpg", 
               "/static/images/cc.jpg", 
               "/static/images/gg.jpg"]
     }
 }
};
</script>

<style lang='stylus' scoped>
.banner {
  position: relative;
  padding: 0.2rem 0.1rem;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;

  .banner-img {
    width: 100%;
  }

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
</style>
