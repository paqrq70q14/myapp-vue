<template>
  <div class="list-container">
    <div class="item-wrapper" >
      <div class="item-title">
        <div class="houseType">{{houseType}}</div>
        <div class="item-price">
          <span class="price">{{price}}/月</span>
          <span>随时入住</span>
          <span class="roomType">{{roomNum}}室</span>
        </div>
        <div class="hot-key">
          <span class="hotkey-item" v-for="hotkey in list.hotkey">{{hotkey}}</span>
        </div>

      </div>
      <div class="item-address">
        <h4 class="item-address-map">
          <span class="address">{{area}}-{{address}}</span>
          <span>查看地图</span>
        </h4>
        <div class="item-address-location">
          <span class="line">{{line}}</span>
           <span>   d步行5分</span>
        </div>
      </div>
      <div class="item-desc">
        <div class="desc-title">房源描述</div>
        <h4>出租人信息</h4>
        <div class="user-detail">
          <div class="user-wrapper">
            <div>
              <img src="/static/images/gg.jpg" class="img" width="40" height="40">
            </div>
          </div>
          <div class="desc">
            <div class>
              <p>哈哈哈</p>
              <span></span>
            </div>职业不知
          </div>
        </div>
        <div class="desc-content">
          {{desc}}
         <p>房间很大，最多可以住俩个人，租期为2年。现在还有1年，因为特殊原因不能继续租住。
           楼下24小时安保，非常安全。附近超市，药妆，商场都有，非常方便。
         </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    list:{
      type: Object
    }
  },
  computed:{
    area() {
     return this.list.area
    },
    price() {
      return this.list.rentPrice
    },
    desc() {
      return this.list.desc
    },
    houseType() {
      return this.list.houseType
    },
    roomNum() {
      return this.list.bedroom
    },
    address() {
      return this.list.address
    },
    line() {
      return this.list.line
    }
    
  }
};
</script>

<style lang="stylus" scoped>
.item-title 
  border-bottom: 0.01rem solid #ebebeb
  padding: 0.2rem
  margin-top: .3rem
  .houseType
   font-size: .4rem
.hot-key 
  margin-top: 0.2rem;
  .hotkey-item
    background-color: #f0fffd;
    color: #66d4c3;
    border: 1px solid #66d4c3;
    margin-left: .1rem
.item-price 
  margin-top: 0.2rem;
  color: red;
.item-address 
  padding: 0.2rem;
  .item-address-map 
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.2rem
    .address
     font-size: 0.3rem
     font-weight: 600
  .item-address-location
   display: flex
   justify-content: space-between


.item-desc 
  padding: 0.2rem;
  .desc-title 
   font-size 0.35rem
   margin-bottom: 0.2rem
  .user-detail 
    display: flex;
    padding: 0.1rem;
   .desc 
    margin-left: 0.3rem
  .desc-content 
    padding: 0.1rem;
  

</style>
