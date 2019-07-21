import {loadSearch, loadFavorite} from '../common/js/cache'


const state = {
    city: '东京',
    search: '位置搜索',   
    area:'',     
    line:'',    
    roomType: '户型',
    optionNum: '筛选',
    station: '',

    options: [],
    Sex: [],
    Features: [],
    Types: [],
    houseDetails: {},
    searchHistory: loadSearch(),
    favoriteList: loadFavorite()
}

export default state



