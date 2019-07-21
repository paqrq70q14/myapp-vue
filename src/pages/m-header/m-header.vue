<template>
    <div class="m-header">
        <div class="header-wrapper">
            <router-link class="header-location" to="/city">{{this.$store.state.city}}</router-link>
            <div class="header-title">
                <!-- <i class=""> -->
                东京白领租房
            </div>
            <div class="header-block"></div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'm-header'
}
</script>

<style lang="stylus" scoped>
//  @import "~common/stylus/variable"
//  @import "~common/stylus/mixin"

 .m-header 
  height: .8rem
  background-color: #66d4c3
  max-width: 75rem
  width: 100%;
  .header-wrapper
   padding: .2rem .3rem
   display: flex
   justify-content:space-between
   align-items: center
   .header-block 
    width: .7rem
</style>
