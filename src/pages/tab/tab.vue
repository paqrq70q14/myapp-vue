<template>
<div>
   <div class="tab">
      <div class="tab-wrapper">
    <div class="tab-item" @click="clickSearch">
      <span class="tab-link">
        {{search}}
        <i></i>
      </span>
    </div>
    <div class="tab-item">
      <span class="tab-link" @click="showTypeContainer" 
            :class="{'active': this.showTypes === true || this.roomType !== '户型'}">
        {{roomType}}
      </span>
    </div>
    <div class="tab-item">
      <span class="tab-link" 
            @click="showOptions"
            >
          {{optionNum}}</span>
    </div>
    <router-link to="/search" tag="span" class="tab-item">
      <span class="tab-link">我要找房</span>
    </router-link>
      </div>

  </div> 
  
   <room-type :showTypes="showTypes" ></room-type>
   <room-options :showOpts="showOpts" @setFalse="setFalse"></room-options>
</div>


</template>

<script>
import roomType from "@/pages/roomType/roomType"
import roomOptions from '@/pages/roomOptions/roomOptions'
import { mapGetters } from 'vuex'
import { upload } from '../../api/getInfo';


export default {
  props:{
    
  },
  data(){
    return{
      showTypes: false,
      showOpts: false
    }
  },
  computed: {
    ...mapGetters([
      'roomType',
      'search',
      'optionNum'
    ])
  },
  watch:{
    // 户型选择改变
    roomType() {
      this.showTypes = false
    },
    optionNum() {
    }
  },
  methods: {
    clickSearch() {
      this.showTypes = false
      this.showOpts = false
      this.$router.push('/location')
    },
    showTypeContainer() {
      this.showTypes = !this.showTypes
      this.showOpts = false
    },
    showOptions() {
      
     this.showOpts = !this.showOpts

     this.showTypes = false
    
    },
    setFalse() {
      this.showOpts = !this.showOpts

    }
  },
  components:{
    roomType,
    roomOptions
  }
};
</script>

<style lang="stylus" scoped>
.tab 
  position: fixed
  width: 100%
  height: 0.6rem
  top: .8rem
 .tab-wrapper
  display: flex
  height: 100%
  border-bottom: 0.01rem solid #eee;
  align-items: center
  padding-top: .1rem
  padding-bottom: .15rem
  font-size: .2rem
  .tab-item 
    flex: 1;
    text-align: center;
    border-right: 0.025rem solid #ebebeb;
    .tab-link
     padding-bottom: 5px  
     &.active
      color: blue

</style>
