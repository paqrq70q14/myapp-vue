<template>
  <div class="header">
    <div class="header-wrapper">
      <div class="icon-back header-back" @click="goBack"></div>      
      <div class="title">城市选择</div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CityHeader',
  methods:{
    goBack() {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .header
    position: relative
    width: 100%
    height: 0.7rem
    .header-wrapper
     padding: 0.1rem
     display: flex
     width: 100%
     height: 100%
     justify-content: space-between
     align-items: center

</style>
