import React, {
    ListView,
} from 'react-native';

import * as types from '../actions/ActionTypes';

const initialState = {
    loading: false,
    errMsg: undefined,
    result: undefined,
    loadData: false,
    update: false,
}

export default function getPersoanResumeInfoById(state = initialState, action) {
    switch (action.type) {
        case types.START_getPersoanResumeInfoById_ACTION:
            return Object.assign({}, state, {
                loading: true,
                errMsg: undefined,
                result: undefined,
                loadData: false,
            });
        case types.RECEIVE_getPersoanResumeInfoById_ACTION:
            return Object.assign({}, state, {
                loading: false,
                loadData: true,
                result: action.result,
                errMsg: action.errMsg,
            });
        case types.START_editPersoanlResume_ACTION:
            return Object.assign({}, state, {
                loading: true,
                loadData: false,
                update:false,
                result: undefined,
                errMsg: undefined,
            });
        case types.ERROR_editPersoanl_ACTION:
            return Object.assign({}, state, {
                loading: false,
                loadData: false,
                update:true,
                result: undefined,
                errMsg: action.errMsg,
            });
        case types.SUCCESS_editPersoanl_ACTION:
            return Object.assign({}, state, {
                loading: false,
                update:true,
                loadData: false,
                result: action.result,
                errMsg: undefined,
            });
        default:
            return state;
    }
}