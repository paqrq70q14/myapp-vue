<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list 
      :cities="cities" 
      :hotCities="hotCities"
      :changedLetter = "ChangedLetter"
    ></city-list>
    <city-alphabet 
       :cities="cities"
       @change="handleLetterchange"
    ></city-alphabet>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from "./components/Header";
import CitySearch from "./components/Search";
import CityList from "./components/List";
import CityAlphabet from "./components/Alphabet";
export default {
  name: "City",
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return{
      //城市详情
      cities:{},
      //热门城市
      hotCities: [],
      ChangedLetter: ''
    }
  },
  methods: {
    getCityInfo() {
      axios.get('/static/mock/city.json')
       .then(this.handleCityInfo)
    },
    handleCityInfo(res) {
      res = res.data
      if(res.ret && res.data){
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
        console.log(this.cities)
        // console.log(this.hotCities)
      }
     
    },
    handleLetterchange(letter) {
      this.ChangedLetter = letter;
    }
  },
  mounted() {
    this.getCityInfo()
  }
};
</script>

<style lang="stylus" scoped></style>
