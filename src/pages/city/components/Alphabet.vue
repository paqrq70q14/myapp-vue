<template>
  <ul class="item-list" >
    <li class="item"
        v-for="item of letters" 
        :key="item"
        :ref='item'
        @click="handleLetterChange"
        @touchstart = "handleTouchStart"
        @touchmove = "handleTouchMove"
        @touchend = "handleTouchEnd"
    >
      {{item}}
    </li>
  </ul>
</template>

<script>
export default {
  name: "CityAlphabet",
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: 'none'
    }
  },
  updated () {
     // 获取A距离顶部的Y值
    this.startY = this.$refs['A'].offsetTop;
  },
  computed: {
    // 需要一个数组['A','B','C'...]
   letters () {
     const letters = [];
     for(let i in this.cities) {
       letters.push(i);
     }
     
     return letters
   }
  },
  methods: {
    handleLetterChange(e){
      // 把字母信息传递给父组件 -- 传递给list组件
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart() {
      this.touchStatus = true;
    },
    handleTouchMove(e){
     if(this.timer) {
       clearTimeout(this.timer)
     }
     this.timer = setTimeout( () =>{
      const touchY = e.touches[0].clientY - 93;
      const index = Math.floor((touchY - this.startY) / 22 );
      if(index >= 0 && index< this.letters.length) {
          this.$emit('change', this.letters[index]);
      }
     },16)

    },
    handleTouchEnd() {
      this.touchStatus = false;
    }
  }
};
</script>

<style lang="stylus" scoped>
.item-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  line-height: 0.44rem;
  position: absolute;
  right: 0;
  top: 2.08rem;
  bottom: 0;
  width: 0.4rem;
}
</style>
