<template>
  <div class="container" v-show="this.showTypes">
    <div class="type-wrapper">
      <div class="type-wrapper-content">
        <div class="roomNumber">
          <div class="title">整租</div>
          <div class="item-wrapper">
            <div class="item" 
                 v-for="(item) in roomNumber"

                 @click="selectItem($event,item)"
                 :class="{'active': isActive(item) !== -1 ? 'active' : ''}"                 
            >
              {{item}}
            </div>
          </div>

        </div>
      </div>

     <div class="type-wrapper-content">
      <div class="roomNumber">
        <div class="title">合租</div>
        <div class="item-wrapper">
          <div class="item"
               v-for="item in typeList"
               @click="selectItem($event,item)"
              :class="{'active': isActive(item) == -1 ? '' : 'active'}"  
          >
            {{item}}
          </div>
        </div>
      </div>
    </div>

        <div class="noLimit" @click="noTypes">不限</div>
    </div>  
 
</div>

</template>

<script>
import axios from 'axios';
import qs from 'qs'
import {mapGetters, mapMutations} from 'vuex'
import {upload, upLoad} from '../../api/getInfo'

export default {
 props:{
   showTypes:{
     type: Boolean
   }
 },
 computed: {
 ...mapGetters([
   'HouseTypes'
 ]),
 houseType(){
   return this.HouseTypes
 } 
 },
 data() {
     return{
        roomNumber:['1室','2室','3室','4+室'],
        typeList:['独立房间','床位'],
        activeArr:[]     
     }
 },
 methods: {
   isActive(item) {
    let index = this.activeArr.indexOf(item)
    return index 
   },

   selectItem(e, item) {
     if(this.activeArr.length !== 0){   
       // 有元素 
       if(this.isActive(item) !== -1) {
         this.activeArr = [] 
         return
       }
       this.activeArr = []
       this.activeArr.push(item)
       this.setRoomType(item)
       return
     }
     this.activeArr.push(item)
     this.setRoomType(item)
   },
    
   noTypes() {
     this.setRoomType('户型')
     this.activeArr = []
     this.showTypes = false
   },
   ...mapMutations({
     setRoomType: 'SET_ROOMTYPES',
     setOptions: 'SET_SELECTED'
   })
 }
}
</script>

<style lang="stylus" scoped>

.container
 position: fixed
 width:100%
 height: 100%
 top: 1.8rem
 left: 0 
 z-index: 99
 background-color: rgba(0,0,0,.5)
 .type-wrapper
  background-color: #fff
  position: relative
  .type-wrapper-content
   position:relative
   padding: .1rem .3rem
   .item-wrapper
    margin: 0.3rem 0
    width: 100%
    display: flex
    .item 
     width: 23%
     margin-right: 0.1rem
     border: 0.01rem solid #ccc;
     color: #999;
     text-align:center
     line-height: .6rem
     height: .6rem
 .noLimit
   border-top: 1px solid #eee;
   height: 1rem
   display:flex;
   justify-content:center
   align-items:center;
   font-size: .3rem
.active 
  border: 1px solid #66d4c3;
  color: #66d4c3;
  background-color: #f0fffd;
  border-radius: 3px;

</style>
