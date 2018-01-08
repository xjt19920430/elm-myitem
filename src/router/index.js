import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Shop from '../components/shop/shop'
import Goods from '../components/goods/goods'
import Shops from  '../components/shops/shops'
import GoodselectAll from '../components/goodselectall/goodselectall'
import GoodselectTrue from '../components/goodselecttrue/goodselecttrue'
import GoodselectFalse from '../components/goodselectfalse/goodselectfalse'
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
          component: Goods,
          children: [
              {
                  path: '/goods',
                  component: GoodselectAll
              },
              {
                  path: '/goods/yes',
                  component: GoodselectTrue
              },
              {
                  path: '/goods/no',
                  component: GoodselectFalse
              }
          ]
      },
      {
          path:'/shops',
          component:Shops
      }

  ]
})
