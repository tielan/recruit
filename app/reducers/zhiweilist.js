import React, {
    ListView,
} from 'react-native';

import * as types from '../actions/ActionTypes';

var dataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
const initialState = {
    listData: dataSource.cloneWithRows([]),//数据源
    canLoadMore: false,//是否可以加载更多
    loadMore: false,//显示加载更多
    loading: false,//显示loading
    errMsg: undefined,//请求错误显示
    addr_area: undefined,
    industry: undefined,
    post_name: undefined,
    salary_type: undefined
}

export default function zhiweilist(state = initialState, action) {
    switch (action.type) {
        case types.START_zhiweilist_ACTION:
            return Object.assign({}, state, {
                logining: true,
                errMsg: undefined,
            });
        case types.SUCCESS_zhiweilist_ACTION:
            return Object.assign({}, state, {
                logining: false,
                listData: dataSource.cloneWithRows(action.result ? action.result : []),
            });
        case types.ERROR_zhiweilist_ACTION:
            return Object.assign({}, state, {
                logining: false,
                listData: dataSource.cloneWithRows([]),
                errMsg: action.errMsg,
            });
        default:
            return state;
    }
}