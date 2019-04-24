<template>
    <div class="city-header">
        <div class="city-back">
           选择城市  
         <router-link to="/">
            <i class="iconfont header-back">&#xe624; </i>   
         </router-link>   
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'City-Header'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varible.styl' 
.city-header
 overflow: hidden
 height 0.66rem
 line-height: .66rem
 background-color: #68d4c4
 padding: .24rem .3rem
 text-align: center
 font-size: .32rem
 .city-back
  position:relative
  .header-back
   position:absolute
   top:0
   left:0
   color: #fff
   width: .64rem
   text-align:center
   font-size: .4rem
</style>