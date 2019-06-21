/**
 * 首页数据监管
 */
const home = {
    state: {
        goodsList: []
    },
    getters: {
        getGoodsList: state => state.goodsList,
    },
    mutations: {
        UPDATE_GOODS(state, goodsList) {
            state.goodsList = goodsList;
        }
    },
    actions: {
        updateGoodsListAsync({
            commit
        }, val) {
            commit('UPDATE_GOODS', val);
        }
    }
};

export default home;