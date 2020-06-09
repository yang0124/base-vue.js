import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{ //为vuex设置数据包
        num:100,
        arr:[1,2,3]
    },
    mutations:{  //为vuex设置mutations，一旦指定的mutation被触发了，它会修改对应state值
        plusNumMut(state){
            state.num++
        }
    }
})