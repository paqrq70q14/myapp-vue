<template>
  <div class="header">
    <div class="header-wrapper">
      <router-link 
       class="header-location"
       to="/city"
       >{{this.$store.state.city}}
      </router-link>
      <div class="header-title">
          <!-- <i class=""> -->
          东京白领租房
      </div>
      <div class="header-block"></div>
    </div>
    <div class="header-topbar">
        <div class="topbar-search">
            位置搜索
            <i></i>
        </div>
        <div class="topbar-houseType">户型</div>
        <div class="topbar-houseOptions">筛选</div>
        <div class="topbar-houseVideo">有视频</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeHeader'
};
</script>

<style lang="stylus" scoped>

.header 
  background-color: #fff;
  .header-wrapper
    background-color:#66d4c3 
    max-width: 75rem
    width:100%
    padding: .25rem .3rem
    display: flex
    justify-content: space-between
    align-items: center
    .header-block
     width: .7rem;
  .header-topbar
    display:flex
    justify-content: space-between
    align-items: center
    height: .5rem
    padding: .25rem .3rem
    border-bottom: 0.01rem solid #eee
    font-size: .26rem
    color: #333


</style>
