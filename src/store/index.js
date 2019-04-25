import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
    //state:存放公用数据
    state:{
        city:'北京'
    },
    actions: {
        changeCity(ctx, city) {
            ctx.commit('changeCity', city)
        }
    },
    mutations: {
        changeCity(state, city) {
            state.city = city
        }
    }
})