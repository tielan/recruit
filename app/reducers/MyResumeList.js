import React, {
    ListView,
} from 'react-native';

import * as types from '../actions/ActionTypes';

var dataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
const initialState = {
    listData: dataSource.cloneWithRows([]),//数据源
    loading: false,//显示loading
    errMsg: undefined,//请求错误显示
}

export default function MyResumeList(state = initialState, action) {
    switch (action.type) {
        case types.START_MyResumeList_ACTION:
            return Object.assign({}, state, {
                loading: true,
                errMsg: undefined,
            });
        case types.SUCCESS_MyResumeList_ACTION:
            return Object.assign({}, state, {
                loading: false,
                listData: dataSource.cloneWithRows(action.result ? action.result : []),
            });
        case types.ERROR_MyResumeList_ACTION:
            return Object.assign({}, state, {
                loading: false,
                listData: dataSource.cloneWithRows([]),
                errMsg: action.errMsg,
            });
        default:
            return state;
    }
}