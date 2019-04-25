<template>
  <div class="list-area" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hotCities" :key="item.id">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" 
           v-for="(item, key) of cities" 
           :key="key"
           :ref="key"
      >
        <div class="title border-topbottom">{{key}}</div>   
          <div class="item-list">
            <div 
              class="item border-bottom" 
              v-for="innerItem of item"
              :key='innerItem.id'>
              {{innerItem.name}}
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
export default {
  name: "CityList",
  props: {
    cities: Object,
    hotCities: Array,
    changedLetter: String
  },
  watch: {
    changedLetter() {
      if(this.changedLetter) {
        // 通过refs获取到字母对应的区域
        const element = this.$refs[this.changedLetter][0]
        this.scroll.scrollToElement(element)
      }
     
    }
  },
  // dom挂载完毕执行
  mounted() {
    // console.log(this.$refs) // wrapper: div {list-area}
    this.scroll = new Bscroll(this.$refs.wrapper);
  }
};
</script>

<style lang="stylus" scoped>
.border-topbottom {
  &:before {
    border-color: #ccc;
  }

  &:after {
    border-color: #ccc;
  }
}
.border-bottom
  &:before
   border-color: #ccc

.list-area {
  overflow: hidden;
  position: absolute;
  top: 2.08rem;
  left: 0;
  right: 0;
  bottom: 0;
}

.title {
  line-height: 0.54rem;
  background-color: #eee;
  padding-left: 0.2rem;
  font-size: 0.26rem;
  color: #666;
}

.button-list {
  padding: 0.1rem 0.6rem 0.1rem 0.1rem;
  overflow: hidden;

  .button-wrapper {
    float: left;
    width: 33.33%;

    .button {
      text-align: center;
      margin: 0.1rem;
      line-height: 0.44rem;
      border: 0.02rem solid #d9d9d9;
      padding: 0.1rem 0;
      border-radius: 0.01rem;
      color: #888;
    }
  }
}

.item-list {
  .item {
    line-height: 0.44rem;
    padding: 0.2rem;
  }
}
</style>
