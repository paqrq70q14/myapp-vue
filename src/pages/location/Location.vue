<template>
 <transition name="slide"> 
  <div class="container">
    <div class="header">
        <div class="header-wrapper">
           <div class="icon-back" @click="back"></div>
            <div class="content">
                选择位置  
            </div>
            <p class="noLimit" @click="Nolimit">不限</p>            
        </div>
    </div> 
    
    <div class="search-box-wrapper">
        <searchbox  :placeholder="placeholder" @query="queryChange"></searchbox>
    </div>
    <searchlist :list="locationList" @selectItem="selectArea"></searchlist>
    <searchlist :list="lineList" @selectItem="selectLine"></searchlist>
    <div class="search-history" v-show="searchHistory">
      <h1 class="title">
        <span class="text">搜索历史</span>
        <span class="clear" @click="deleteAll">
          <i class="icon-clear"></i>
        </span>
      </h1>
     <searchHistoryList :searches="searchHistory" 
                        @delete="deleteHistory" 
                        @select="queryChange">
    </searchHistoryList>
   </div>
    <div class="search-list-layer" v-show="showLayer">
        <suggest :query="newQuery" @select="saveSearch" ></suggest>
    </div>
  </div>
 </transition>                    

</template>

<script>
import {upload} from '../../api/getInfo'
import Searchbox from 'base/search-box/search-box'
import searchlist from 'pages/search-list/search-list'
import suggest from 'pages/suggest/suggest'
import searchHistoryList from 'base/searchHistory-list/searchHistory-list'
import {mapMutations, mapActions, mapGetters} from 'vuex'
export default {
    computed:{
      ...mapGetters([
        'searchHistory',
        'location'
      ])
    },
    data() {
        return {
            locationList:['新宿区','涩谷区','池袋区','目黑区','文京区','中央区','练马区','港区'],
            lineList: ['山手线','中央线','新宿线','东上线','西武线','小田急线','东阳线'],
            placeholder:'输入地址查找房源',
            showLayer: false,
            newQuery: ''
        }
    } ,
 
    methods: {
        back() {
         this.showLayer = false
         console.log('空了')
         this.$router.push('/')
        },
        Nolimit() {
          this.noLimit()
          this.$router.push('/')
        },
        selectArea(item) {
          this.setArea(item)
          this.$router.push('/')
        },
        selectLine(item) {
          this.setLine(item)
          this.$router.push('/')
        },
        queryChange(newQuery) {
          this.newQuery = newQuery
          this.showLayer = true
          if(newQuery == '') {
            this.showLayer = false
          }
        },
        // 将某条搜索记录添加到搜索框
        // 接收suggest组件派发的事件 -- 保存浏览历史和缓存
        saveSearch() {
          this.saveSearchHistory(this.newQuery)
          console.log('save=', this.searchHistory)
        },
        // 删除某条历史纪录
        deleteHistory(query) {
          console.log('new=', query)
          this.deleteSearchHistory(query)
        },
        // 删除所有记录
        deleteAll() {
          this.clearSearchHistory()
        },
         ...mapMutations({
          setSearch: 'SET_SEARCH',
      }),
         ...mapActions([
           'saveSearchHistory',
           'deleteSearchHistory',
           'clearSearchHistory',
           'setArea',
           'setLine',
           'noLimit'
         ])
    },
    components:{
     searchlist,
     Searchbox,
     suggest,
     searchHistoryList
 }
}
</script>

<style lang="stylus" scoped>
  &.slide-enter-active, &.slide-leave-active
    transition: all 0.3s
  &.slide-enter, &.slide-leave-to
    transform: translate3d(100%, 0, 0)
.container
 position:fixed
 top: 0
 bottom: 0
 width: 100%
 background-color: #fff
 .header
  width: 100%
  height: .8rem
  border-bottom: 0.005rem solid #e6e6e6
  .header-wrapper
   height: 100%
   display: flex
   justify-content: space-between
   align-items: center
   padding: 0 .2rem
   .noLimit
    color: #66d4c3   
 .search-box-wrapper
  width: 100%
  height: 1rem
 .search-history
  margin-top: .3rem
  .title
   display: flex
   align-items: center
   height: .8rem
   padding: 0 .2rem
   .text
    flex: 1
   .clear
    extend-click()
 .search-list-layer
  position: fixed
  top: 1.8rem
  left: 0
  height: 100%
  width: 100%
  z-index: 100
  background-color #fff
</style>