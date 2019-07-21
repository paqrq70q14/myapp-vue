import storage from 'good-storage'

const SEARCH_KEY = '_search_'
const SEARCH_MAX_LEN = 15

const FAVORITE_KEY = '__favorite__'
const FAVORITE_MAX_LEN = 20

//插入数组方法(compare--function)
const insertArr = function(arr, val, compare, maxLen) {
  
  const index = arr.findIndex(compare)
  //第一条数据
  if(index === 0) {
   return
  }
  if(index > 0) {
    arr.splice(index, 1)   
  }
  // 放在第一个位置
  arr.unshift(val)
  // 判断长度 
  if(maxLen && arr.length > maxLen) {
    // 删除最后一个
    arr.pop()
  }
}
// findIndex (es6)
  // index === 0   -- 第一条数据
  // index  > 0    -- 有数据，但不在第一条

// 从数组删除
function deleteFromArray(arr, compare) {
  const index = arr.findIndex(compare)
  if (index > -1) {
    arr.splice(index, 1)
  }
}

// 保存浏览记录
export function saveSearch(query) {
  // 1- 读取数据
  let searches  = storage.get(SEARCH_KEY, [])
  // 2 insertArr插入数组
  insertArr(searches, query, (item)=>{
    return item === query 
  } ,SEARCH_MAX_LEN)
  // 3 放回去
  storage.set(SEARCH_KEY, searches)
  // 4 返回
  console.log(searches)
  return searches
}

// 删除浏览记录
export function deleteSearch(query) {
 
  let searches = storage.get(SEARCH_KEY, [])
  deleteFromArray(searches, (item) =>{
    return item === query
  })
    // 3 放回去
    storage.set(SEARCH_KEY, searches)
    // 4 返回
    return searches
}

// 删除所有记录
export function clearSearch() {
  let searches = storage.get(SEARCH_KEY, [])
  storage.clear(searches)
  return []
}

export function saveFavorite(song) {
    let songs = storage.get(FAVORITE_KEY, [])
    insertArr(songs, song, (item) => {
      return song._id === item._id
    }, FAVORITE_MAX_LEN)
    storage.set(FAVORITE_KEY, songs)
    return songs
  }

export function deleteFavorite(song) {
  let songs = storage.get(FAVORITE_KEY, [])
  deleteFromArray(songs, (item) => {
    return item._id === song._id
  })
  storage.set(FAVORITE_KEY, songs)
  return songs
}


export function loadSearch() {
  return storage.get(SEARCH_KEY, [])
}

export function loadFavorite() {
  return storage.get(FAVORITE_KEY, [])
}