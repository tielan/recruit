import React, {
  ListView,
} from 'react-native';

import * as types from '../actions/ActionTypes';

var dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
const initialState = {
    listData: dataSource.cloneWithRows([]),
    canLoadMore:false,
    loadMore: false,
    loading: false,
    errMsg: undefined,
    isShowLoading: true,
    headTabList: [{
        name: '全职',
        icon: 'e675',
        color: '#ffba00',
        work_type:'1',
        size: 24
    }, {
        name: '兼职',
        icon: 'e681',
        color: '#83d130',
        work_type:'2',
        size: 24
    }, {
        name: '实习',
        icon: 'e680',
        color: '#fe7442',
        work_type:'3',
        size: 26
    }],
}

export default function homeCompanyList(state = initialState, action) {
    switch (action.type) {
        case types.START_Home_getCompanyByParam_ACTION:
            return Object.assign({}, state, {
                logining: true,
                errMsg: undefined,
            });
        case types.RECEIVE_Home_getCompanyByParam_ACTION:
            return Object.assign({}, state, {
                logining: false,
                listData:dataSource.cloneWithRows(action.result ? action.result : []),
                errMsg: action.errMsg,
            });
        default:
            return state;
    }
}