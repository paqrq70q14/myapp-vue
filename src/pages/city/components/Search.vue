<template>
    <div class="city-search">
     <input type="text" placeholder="请输入当前城市" class="search-input">
    </div>
</template>

<script>
export default {
 name:'CitySearch'
}
</script>

<style lang="stylus" scoped>
.city-search
 height: .72rem
 background-color:lime
 padding: 0 .15rem
 .search-input
  box-sizing:border-box
  width: 100%
  height: .62rem
  padding: 0 .1rem
  line-height: .62rem
  border-radius: .06rem
  text-align center
  color:#666

</style>
