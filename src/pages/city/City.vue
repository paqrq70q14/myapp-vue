<template>
 <transition name="slide"> 
  <div class="container">
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list
      :cities="cities"
      :hot="hotCities"
      :letter="letter"
    ></city-list>
    <city-alphabet
      :cities="cities"
      @change="handleLetterChange"
    ></city-alphabet>
  </div>
 </transition>
</template>

<script>
import axios from 'axios'
import {mapState} from 'vuex' 
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: '',
      lastCity: ''
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getCityInfo () {
      axios.get('/static/mock/city.json?city=' + this.city)
        .then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    },
    handleLetterChange (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.lastCity = this.city
    this.getCityInfo()
  },
  //页面刷新时执行
  activated(){
    if(this.lastCity !== this.city){
      this.lastCity = this.city
      console.log("不相等")
      this.getCityInfo()
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
 position: fixed
 width: 100%
 background-color #fff
 top: 0
 bottom: 0
</style>
