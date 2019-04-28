<template>
  <div>
    <router-link  tag="div" to="/" class="Header-abs">
         <div class="iconfont header-back">&#xe624;</div>
    </router-link>
    <div class="Header-fixed"></div>
  </div>
</template>

<script>
export default {
  name: "DetailHeader"
};
</script>

<style lang="stylus" scoped>
.Header-abs 
  position: absolute;
  top: .3rem;
  left: .2rem;
  height: .8rem;
  width: .8rem;
  border-radius: .4rem
  background: rgba(0, 0, 0 .8);
  text-align: center
  line-height: .8rem
  .header-back
   color: #fff;

</style>
