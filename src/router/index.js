import Vue from 'vue'
import Router from 'vue-router'
import City from '@/pages/city/City'
import Detail from '@/pages/productDetail/Detail'
import Location from '@/pages/location/Location'
import userCenter from '@/pages/user-center/user'
import Search from '@/pages/search/search'


Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/city',
        name: 'City',
        component: City
    },   
    {
        path: '/location',
        name: 'Location',
        component: Location
    },
    {
        path: '/user',
        name: 'userCenter',
        component: userCenter    
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail,
      children: [
        {
          path: ':id'
        }
      ]  
  },
    {
      path: '/search',
      component: Search
    }
  ]
})





