import axios from 'axios'

import state from '../store/state'


// 获取所有房屋数据
export function getInfo() {
  console.log('getinfo了')
 const url = "/api/queryProducts"

   return axios.get(url)
}

// 筛选
export function upload() {
  let url = '/api/upload'

     return axios
     .post(url, {
       city: '东京',
       area: state.area == '位置搜索' ? '' : state.area,
       line: state.line,
       bedroom: state.roomType.indexOf('户型') == -1 ? state.roomType : '',
       sex: state.Sex.length == 0 ? '' : state.Sex[0],
       features: state.Features.length == 0 ? '' : state.Features[0],
       types: state.Types.length == 0 ? '' : state.Types[0]

     })
    
}

