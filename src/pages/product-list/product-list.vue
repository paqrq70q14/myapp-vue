<template>
  <div class="product-list">
    <ul class="list-content">
      <li
        class="item border-bottom"
        v-for="(item,index) of houseInfo"
        :key="index"
        @click="toHouseDetails(item)"
      >

        <img class="item-img" :src="'/'+item.picAddr[0]">
        <div class="item-info">
          <p class="item-title">{{item.title}}-{{item.line}}</p>
          <div class="houseType">{{item.types}}.{{item.bedroom}}</div>
          <ul class="hotkey" >
            <li v-for="key in item.hotkey" class="key-item">{{key}}</li>
          </ul>
          <span class="item-price">{{item.rentPrice}}/月</span>
        </div>
      </li>
    </ul>
    <div class="loading" v-show="!this.houseInfo">
      <loading></loading>
    </div>
  </div>
</template>

<script>
import loading from "common/loading/loading";
import { mapMutations } from "vuex";

export default {
  props: {
    houseInfo: Array
  },

  methods: {
    ...mapMutations({
      setHouse: "SET_HOUSE_DETAILS"
    }),
    
    toHouseDetails(item) {
      this.$router.push({
        path: `/detail/${item._id}`
        
      });
      this.setHouse(item);
    
    }

  },
  components: {
    loading
  },
};
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';
.product-list
  z-index: 1
  .list-content
   width: 100%
   line-height: .5rem
   padding: .1rem .15rem
   .item 
    padding: .15rem 0
    display: flex;
    overflow: hidden;
    height: 1.8rem
    // border-right: 0.025rem solid #ebebeb;
    .item-img 
      width: 2.4rem;
    .item-info
     margin-left: .2rem
     display: flex
     flex-direction: column
     .houseType
      font-size: 0.2rem
     .item-price
      margin-top: .1rem
      color: red
      font-size: .3rem
     .hotkey
      display: flex
      height: .3rem 
      line-height: .3rem
      width: 100%
      .key-item
       margin-right: 0.15rem
       font-size: 0.1rem;
       padding: 0 0.1rem
       height: 0.4rem
       line-height: 0.4rem
       text-align center
       color: #68d4c4;
       text-align: center
       border:  0.01rem solid #68d4c4;
</style>



