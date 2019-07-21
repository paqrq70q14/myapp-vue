import * as types from './mutation-types'
import {saveFavorite, deleteFavorite, saveSearch,deleteSearch, clearSearch} from '../common/js/cache'


// 保存搜索历史记录
export const saveSearchHistory = function({commit}, query) {

    commit(types.SET_SEARCH_HISTORY, saveSearch(query))
}
// 删除某条历史纪录
export const deleteSearchHistory = function({commit}, query) {
    commit(types.SET_SEARCH_HISTORY, deleteSearch(query))
}

// 设置地区选择
export const setArea = function({commit}, item) {

    commit(types.SET_SEARCH, item)
    commit(types.SET_AREA, item)
    commit(types.SET_LINE, '')
}
// 设置线路选择
export const setLine= function({commit}, item) {
    commit(types.SET_SEARCH, item)
    commit(types.SET_AREA, '')
    commit(types.SET_LINE, item)
}
// 不设置位置
export const noLimit= function({commit}) {
    commit(types.SET_SEARCH, '位置搜索')
    commit(types.SET_AREA, '')
    commit(types.SET_LINE, '')
}


// 删除所有历史纪录
export const clearSearchHistory = function({commit}) {
    commit(types.SET_SEARCH_HISTORY, clearSearch())
}

// 收藏房屋
export const saveFavoriteList = function({commit}, item) {    
    commit(types.SET_FAVORITE_LIST, saveFavorite(item))
}

// 取消收藏
export const delFavoriteList = function({commit}, item){
    commit(types.SET_FAVORITE_LIST, deleteFavorite(item))
}

// 设置房屋筛选
export const setHouseOptions = function({commit}, item) {
    
}
