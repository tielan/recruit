import React, {
    ListView,
} from 'react-native';

import * as types from '../actions/ActionTypes';

var dataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
const initialState = {
    loading: false,
    user_name: '',
    user_password: '',
    listData: dataSource.cloneWithRows([]),//数据源
    errMsg: undefined,
}

export default function login(state = initialState, action) {
    switch (action.type) {
        case types.START_personalLogin_ACTION:
            return Object.assign({}, state, {
                logining: true,
                errMsg: undefined,
                data: undefined,
            });
        case types.RECEIVE_personalLogin_ACTION:
            return Object.assign({}, state, {
                logining: false,
                data: action.result,
                errMsg: action.errMsg,
            });
        default:
            return state;
    }
}