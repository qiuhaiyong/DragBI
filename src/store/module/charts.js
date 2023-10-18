
export default {
    namespaced: true,
    state: () => ({
        chartsList: []
    }),
    mutations: {
        ADDCHARTS(state, charts) {
            state.chartsList.push(charts)
        },
        UNDATECHARTS(state, charts) {
            state.chartsList.forEach((element, index, arr) => {
                if (element.id === charts.id) {
                    this._vm.$set(state.chartsList, index, charts)
                }
            });
        }
    },
    actions: {
        addCharts({ commit }, charts) {
            commit('ADDCHARTS', charts)
        },
        updateCharts({ commit }, charts) {
            commit('UNDATECHARTS', charts)
        }
    }
}