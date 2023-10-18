import Vue from 'vue'
import Vuex from 'vuex'
import toolbar from '@/store/module/toolbar'
import charts from './module/charts'
Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        toolbar,
        charts
    }
})

