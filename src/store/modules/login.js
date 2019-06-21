/**
 *登录页数据监管
 */
const login = {
    state: {
        userInfo: {}
    },
    getters: {
        getUserInfo: state => state.userInfo
    },
    mutations: {
        UPDATE_USERINFO(state, userInfo) {
            state.userInfo = userInfo;
        }
    },
    actions: {
        updateUserInfoAsync({
            commit
        }, val) {
            commit('UPDATE_USERINFO', val);
        }
    }
}
export default login;