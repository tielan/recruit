import React, {
    ListView,
} from 'react-native';

import * as types from '../actions/ActionTypes';

var dataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
const initialState = {
    loading: false,
    listData: dataSource.cloneWithRows([]),//数据源
    errMsg: undefined,
    typeChange:false,
    addr_area: undefined,
    industry: undefined,
    post_name: undefined,
    salary_type: undefined,
}

export default function ZhiWeiList(state = initialState, action) {
    switch (action.type) {
        case types.START_zhiweilist_ACTION:
            return Object.assign({}, state, {
                logining: true,
                errMsg: undefined,
                data: undefined,
                typeChange:false,
            });
            case types.ERROR_zhiweilist_ACTION:
            return Object.assign({}, state, {
                logining: true,
                errMsg: action.errMsg,
                data: undefined,
                typeChange:false,
            });
        case types.SUCCESS_zhiweilist_ACTION:
            return Object.assign({}, state, {
                logining: false,
                typeChange:false,
                listData:dataSource.cloneWithRows(action.result ? action.result : []),
                errMsg: action.errMsg,
            });
        case types.Update_zhiweilist_ACTION:
            return Object.assign({}, state, {
                logining: false,
                typeChange:true,
                data: undefined,
                errMsg: undefined,
                addr_area: action.addr_area ? action.addr_area : state.addr_area,
                industry: action.industry  ? action.industry : state.industry,
                post_name: action.post_name  ? action.post_name : state.post_name,
                salary_type: action.salary_type  ? action.salary_type : state.salary_type,
            });
        default:
            return state;
    }
}