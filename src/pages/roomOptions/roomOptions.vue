<template>
  <div class="container" v-show="this.showOpts">
    <div class="type-wrapper">
      <div class="type-wrapper-content">
        <div class="sex">
          <div class="title">性别限制</div>
          <div class="item-wrapper">
            <div class="item" 
                 v-for="(item) in sexList" 
                 @click="selectSex($event,item)"
              :class="{'active': isinSex(item) !== -1 ? 'active': ''}"
            >{{item}}</div>
          </div>
        </div>

        <div class="room_feature">
          <div class="title">房源特色</div>
          <div class="item-wrapper">
            <div
              class="item"
              v-for="(item) in featureList"
              @click="selectFeature($event,item)"
              :class="{'active': isinFeature(item) !== -1 ? 'active': ''}"
            >{{item}}</div>
          </div>
        </div>

        <div class="room_types">
          <div class="title">房源类型</div>
          <div class="item-wrapper">
            <div
              class="item"
              v-for="(item, index) in typeList"
              @click="selectType($event,item)"
              :class="{'active': isinType(item) !== -1 ? 'active':''}"
            >{{item}}</div>
          </div>
        </div>
      </div>
      <div class="makesure">
        <div class="clear" @click="removeAll">清除</div>
        <div class="enter" @click="enter">确定</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import {upload} from '../../api/getInfo'

export default {
  computed: {
    ...mapGetters([
      'Sex',
      'Types'
    ]),
    length() {
     let number = this.sexArr.length + this.featureArr.length + this.typeArr.length 
      if(number !== 0) {
         return '筛选'+ number + '项'
      }
       return '筛选'
      }    
    
  },
  props: {
    showOpts: {
      type: Boolean
    }
  },
  data() {
    return {
      sexList: ["男性", "女性"],
      featureList: ["可短租", "独卫"],
      typeList: ["室友合租", "转租房源", "业主出租", "长租房源"],
      
      sexArr: [],
      featureArr: [],
      typeArr: []
    };
  },
  methods: {
    ...mapMutations({
     setType: 'SET_SELECT_TYPE',
     setSex: 'SET_SELECT_SEX',
     setFeatures:'SET_SELECT_FEATURE',
     setOptNum: 'SET_OPTIONS_NUM'
    }),
    // 筛选性别
    selectSex(e, item) {
      let index = this.isinSex(item)
     if(this.sexArr.length !== 0){
       // 有元素
       if(index !== -1) {
         this.sexArr = [] 
         return
       }
       this.sexArr = []
       this.sexArr.push(item)
       return
     }
     this.sexArr.push(item) 
    },
    // 筛选房屋特点
    selectFeature(e, item) {
      // 有元素
      if (this.isinFeature(item) !== -1) {
        this.featureArr.splice(this.isinFeature(item), 1);
        return;
      }
      this.featureArr.push(item);

    },
    // 筛选房屋类型
    selectType(e, item) {
      if (this.isinType(item) !== -1) {
        this.typeArr.splice(this.isinType(item), 1);
        return;
      }
      this.typeArr.push(item);
    },

    // 点击确定
    enter() {
      this.setSex(this.sexArr)
      this.setFeatures(this.featureArr)
      this.setType(this.typeArr)
      this.setOptNum(this.length)
      this.$emit('setFalse')
    },

    // 清除
    removeAll() {
      this.sexArr = []
      this.featureArr = []
      this.typeArr = []
      this.setOptNum('筛选')
    },

    isinSex(item) {
     return this.sexArr.indexOf(item)    
    },
    isinType(item) {
      return this.typeArr.indexOf(item);
    },
    isinFeature(item) {
      return this.featureArr.indexOf(item);
    },
    hasClass(el, cls) {
      let arrCls = el.className.split(" ");

      let index = arrCls.findIndex(val => {
        return val === cls;
      });
      if (index == -1) {
        return false;
      } else {
        // hasClass
        return true;
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.container {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 1.8rem;
  left: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.5);

  .type-wrapper {
    background-color: #fff;
    position: relative;

    .type-wrapper-content {
      position: relative;
      padding: 0.1rem 0.3rem;

      .item-wrapper {
        margin: 0.3rem 0;
        width: 100%;
        display: flex;

        .item {
          width: 22%;
          margin-right: 0.1rem;
          border: 0.01rem solid #ccc;
          color: #999;
          text-align: center;
          line-height: 0.6rem;
          height: 0.6rem;
        }
      }
    }
  }
}

.active {
  border: 1px solid #66d4c3;
  color: #66d4c3;
  background-color: #f0fffd;
  border-radius: 3px;
}

.makesure {
  border-top: 1px solid #eee;
  height: 1rem;
  display: flex;
  padding: 0.2rem;
  justify-content: space-between;
  align-items: center;
  font-size: 0.3rem;

  .clear {
    width: 30%;
    line-height: 0.8rem;
    background-color: #f3f4f5;
    font-size: 0.2rem;
    text-align: center;
    color: #999;
  }

  .enter {
    width: 65%;
    line-height: 0.8rem;
    background-color: #66d4c3;
    color: #fff;
    font-size: 0.24rempx;
    text-align: center;
  }
}

.active {
  border: 1px solid #66d4c3;
  color: #66d4c3;
  background-color: #f0fffd;
  border-radius: 3px;
}
</style>
