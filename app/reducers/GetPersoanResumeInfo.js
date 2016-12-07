import React, {
  ListView,
} from 'react-native';

import * as types from '../actions/ActionTypes';

var dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

const initialState = {
    listDataSource: dataSource.cloneWithRows([]),
    loading: false,
    errMsg: undefined,
	personal_id	:''//,Int	个人id
}

export default function getPersoanResumeInfoById(state = initialState, action) {
    switch (action.type) {
        case types.START_getPersoanResumeInfoById_ACTION:
            return Object.assign({}, state, {
                loading: true,
                errMsg: undefined,
            });
        case types.RECEIVE_getPersoanResumeInfoById_ACTION:
            return Object.assign({}, state, {
                loading: false,
                result: action.result,
                errMsg: action.errMsg,
            });
        default:
            return state;
    }
}