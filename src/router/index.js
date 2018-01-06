import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Shop from '../components/shop/shop'
import Goods from '../components/goods/goods'
import Shops from  '../components/shops/shops'
export default new Router({
    linkActiveClass:'active',
  routes: [
      {
          path:'/',
          component:Shop
      },
      {
        path:'/shop',
        component:Shop
      },
      {
          path:'/goods',
          component:Goods
      },
      {
          path:'/shops',
          component:Shops
      }
  ]
})
