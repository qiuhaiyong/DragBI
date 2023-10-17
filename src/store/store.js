import Vue from 'vue'
import Vuex from 'vuex'
import toolbar from '@/store/module/toolbar'
Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        toolbar
    }
})

