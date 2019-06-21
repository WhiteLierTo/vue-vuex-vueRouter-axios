/**
 * 首页接口请求以及逻辑
 */
import { Get } from '../../axios/http';
import { GET_GOODS_LIST } from '../../axios/api';
import store from '../../store/store'

export const getRoleList = async() => {
    let params = {};
    let res = await Get(GET_GOODS_LIST, params);
    let result = res.data.result.list;
    store.dispatch('updateGoodsListAsync', result);
}