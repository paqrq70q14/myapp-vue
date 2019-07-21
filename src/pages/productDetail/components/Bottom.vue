<template>
    <div class="bottom">
        <div class="bottom-wrapper">
            <div class="collect" @click="handleClick">
                收藏
                <i class="icon" :class="getFavorite()" @click="toggleFavorite()"></i>
            </div>
            <div class="private-message" @click="messageMe">私信联系</div>
            <div class="private-contract">签订合同/协议</div>         
        </div>
    
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
    computed:{
     ...mapGetters([
         'favoriteList',
         'houseDetails'
     ]) 
    },

 methods: {
     handleClick() {
       console.log(this.houseDetails)
     },
     getFavorite(item) {
      //判断是否在favoritelist中
      // 在 -- 显示icon-not-favorite
       if(this.isFavorite(this.houseDetails)) {
           return 'icon-favorite'
       }
       return 'icon-not-favorite'
     },
     messageMe() {
         console.log('联系我！')
     },
     toggleFavorite(item) {
         if(this.isFavorite(this.houseDetails)) {
             this.delFavoriteList(this.houseDetails)
         }else{
             this.saveFavoriteList(this.houseDetails)
         }
     },
     // 判断方法
     isFavorite(house) {
         const index = this.favoriteList.findIndex((item)=>{
             return house._id === item._id
         })
         return index > -1
     },
     ...mapActions([
         'saveFavoriteList',
         'delFavoriteList'
     ])
 }
}
</script>

<style lang="stylus" scoped>
.bottom 
 position: fixed
 width: 100%
 bottom: 0
 left: 0
 border-top: 0.02rem solid #efefef
 z-index: 99
 .bottom-wrapper
  padding: 0.1rem 0.2rem
  display: flex
  justify-content: space-between
  align-items: center
  background-color #fff
  .collect
   height: .5rem
   line-height: .5rem
   .icon
    font-size: .3rem
    padding: 0.15rem 0
  .private-contract
  .private-message
   height: 0.7rem
   width: 2.5rem
   line-height: 0.7rem
   background-color orange
   text-align: center
   color: #fff
  .private-contract
   background-color #66d4c3
</style>
