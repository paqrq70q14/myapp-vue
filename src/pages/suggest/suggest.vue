<template>
   <scroll class="suggest" 
          :data="list" 
          >
     <ul class="suggest-list">
       <li class="suggest-item" v-for="item in list" @click="clickItem(item)">
         <!-- <div class="icon">
           <i></i>
         </div> -->
         <div class="name">
           <p class="title">{{item.title}}</p>
         </div>
        </li>
    </ul>
    <!-- 垂直居中容器 -->
   <div class="no-result-wrapper">
    <no-result :title="noResultTitle" v-show="!list.length"> </no-result>
   </div>
   </scroll>
</template>

<script type="text/ecmascript-6">
import axios from 'axios'
import Scroll from 'base/scroll/scroll'
import NoResult from 'base/no-result/no-result'
export default {
 props: {
   query: {
     type: String,
     default: ''
   }
 },
 data() {
   return {
     list: [],
     pullup: true,
     noResultTitle:'抱歉没有搜索结果'
   }
 },
 watch: {
   // 监听query的变化,请求服务端
   query(newQuery) {
     console.log('变了',newQuery)
     this.search(newQuery)
   }
 },
 methods:{
   search(keyword) {
     let url = '/api/getInfoKeyword'
     axios.post(url,{
       params: keyword
     }).then((res) =>{
       this.list = res.data.data
       console.log('list=', this.list)
     })
   },
   clickItem(item){
     console.log(item.id)
     // 派发事件
     this.$emit('select')     
     this.$router.push({
       path:`/detail/${item.id}`
     })

   },
   handleScroll() {
     console.log('scoll')
   }
 },
 components:{
   Scroll,
   NoResult
 }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .suggest
    height: 100%
    overflow: hidden
    .suggest-list
      padding: 0 30px
      .suggest-item
        border-bottom: 0.01rem solid #ebebeb
        height: .8rem
        line-height: .8rem
        .name
          overflow: hidden
          // flex-direction: column;
          justify-content: center
        .text
          no-wrap()
    .no-result-wrapper
      position: absolute
      width: 100%
      top: 50%
      transform: translateY(-120%)
</style>