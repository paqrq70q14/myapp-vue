<template>
     <div class="home-product-wrapper">
       <ul>
           <router-link tag="li" to="/detail" class="item border-bottom">
                <img src="/static/images/dd.jpg" alt="" class="item-img">
               <div class="item-info">
                   <p class="item-title">转租房源-池袋1丁目好房</p>
                   <p class="item-desc">整套 1室1厅1卫</p>
                   <span class="item-price">3300/月</span>
               </div>
           </router-link>
       </ul>
     </div>
</template>

<script>
export default {
 name: 'HomeProduct'
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.home-product-wrapper 

 .item 
  display flex
  overflow hidden
  height: 1.9rem
  .item-img
   width: 2.4rem
   padding: .1rem
  .item-info
   min-width: 0
   flex: 1
   padding: .1rem
   .item-title
    font-size: .32rem
    line-height:.32rem
    margin-bottom: .2rem
    ellipsis()
   .item-desc 
    font-size: .28rem
    margin-bottom: .4rem
    line-height:.32rem
    ellipsis()
   .item-price 
    color: red
</style>
