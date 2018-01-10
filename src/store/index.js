import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

let store = new Vuex.Store({
    state:{
        select:{},
        ifShow:'',
        goodsContent:{},
        totalPrice: [],
        unOFF: false,
        selectIndex: 2

    },
    mutations:{
        addSelect (state,list){
            state.select = list.seller
            state.goodsContent = list.goods
        },
        ifShowSupports (state,list){
          state.ifShow=list
        },
        addTotalPrice(state,list){
            state.totalPrice=list
        },
        contextShow(state) {
            state.unOFF = !state.unOFF
        },
        getSelectIndex(state, list) {
            state.selectIndex = list
        }

    },
    actions:{
        getSelect (context){
            axios({
                method:'get',
                url:'/static/data.json'
            })
                .then((rsp)=> {
                    context.commit('addSelect',rsp.data)
                })
        }
    }
})

export default store