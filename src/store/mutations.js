import * as types from './mutation-types'
import Vue from 'vue'

const mutations = {
    changeCity(state, city) {
        state.city = city
        try {
          localStorage.city = city  
        }
        catch(e) {}    
    },
    addOptions(state,opt) {
      state.Options.push(opt);
    },

    // 设置'位置搜索'
    [types.SET_SEARCH](state, item) {
      state.search = item
    },
    [types.SET_AREA](state, area) {
      state.area = area
    },
    [types.SET_LINE](state, line) {
      state.line = line
    },

    // 设置户型
    [types.SET_ROOMTYPES](state, roomType) {
      state.roomType = roomType
    }, 


    // 搜索历史
    [types.SET_SEARCH_HISTORY](state,item) {
      state.searchHistory = item
    },
    // 搜藏列表
    [types.SET_FAVORITE_LIST](state, list) {
      state.favoriteList = list
    },

    // 设置房屋细节
    [types.SET_HOUSE_DETAILS](state, item) {
      state.houseDetails = item
    },
    // 设置筛选数量
    [types.SET_OPTIONS_NUM](state, number) {
      state.optionNum = number
    },
    // 设置筛选结果
    [types.SET_OPTIONS](state, options) {
      state.options = options
    },
    // 设置性别选择
    [types.SET_SELECT_SEX](state, sex) {
      state.Sex = sex
    },   
    [types.SET_SELECT_FEATURE](state, item) {
      state.Features = item
    },
    // 设置房屋类型选择
    [types.SET_SELECT_TYPE](state, item) {
      state.Types = item
    },

}
export default mutations

