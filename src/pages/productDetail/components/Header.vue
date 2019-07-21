<template>
  <div class="header" :style="opacityStyle">
    <div class="header-container">
      <!-- <router-link tag="div" to="/" class="back">
        <i class="icon icon-back"></i>
      </router-link> -->
      <div></div>
      <div class="title">整租房源</div>
      <div class="others"></div>
    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      opacityStyle: {
        opacity: 0.3
      }
    };
  },

  methods: {
    // handleScroll() {
    //   console.log('handle')
    //   const top = document.documentElement.scrollTop;
    //   if (top > 60) {
    //     let opacity = top / 140;
    //     opacity = opacity > 1 ? 1 : opacity;
    //     this.opacityStyle = {
    //       opacity
    //     };
    //     this.showTitle = false
    //   }else{
    //     this.showTitle = true
    //   }
    // }
  }
};
</script>




<style lang="stylus" scoped>
.header 
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 0.8rem;
  border-bottom: 0.02rem solid grey;
  background-color: #fff
  z-index: 99
  .header-container 
    padding: 0.1rem 0.1rem;
    align-items: center;
    height: 100%;
    display: flex;
    justify-content: space-between;
    .title
     color: black
    .back
     font-size: 0.4rem
     color: #fff

  

</style>
