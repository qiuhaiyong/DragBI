export default {
    namespaced: true,
    state: () => ({
        showToolBar: false,
        toolBarInfo: {}
    }),
    mutations: {
        SHOWTOOLBAR(state) {
            state.showToolBar = true
        },
        UPDATETOOLBARINFO(state, toolBarInfo) {
            state.toolBarInfo = toolBarInfo
        }
    },
    actions: {
        showtoolbar({ commit }) {
            commit('SHOWTOOLBAR', null)
        },
        updatetoolbarinfo({ commit }, toolBarInfo) {
            commit('UPDATETOOLBARINFO', toolBarInfo)
        }
    }
}