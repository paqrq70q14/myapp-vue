<template>
<transition name="slide">
     <div class="container">
        <div class="item-wrapper">
            <div class="item-title">通过地区搜索</div>
            <ul class="item-wrapper">
                <li class="item" 
                    v-for="item in list"
                    @click="clickItem(item)">
                    {{item}}
                </li>
            </ul>
        </div>
     </div>
</transition>
</template>

<script>
export default {
  props:{
      list:{
          type: Array,
          default: []
      },
      title: {
          type: String,
          default: ''
      }
  },
  methods: {
      clickItem(item) {
          this.$emit('selectItem',item)
      }
  }
}
</script>

<style lang="stylus" scoped>
&.slide-enter-active, &.slide-leave-active
 transition: all 0.3s
&.slide-enter, &.slide-leave-to
 transform: translate3d(100%, 0, 0)
.container
 position relative
 width: 100%
 .item-wrapper
  padding: 0.1rem 
  .title
   padding: 0.1rem 0.2rem
  .item-wrapper
   height: 2rem
   .item
     float: left;
     width: 22.3%;
     margin: .2rem 0.075rem .2rem
     line-height: 0.7rem;
     height: .7rem
     border: 0.005rem solid #ccc;
     text-align: center    
</style>
