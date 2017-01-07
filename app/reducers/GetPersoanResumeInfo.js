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
    saveItem: false,
}

export default function getPersoanResumeInfoById(state = initialState, action) {
    state.loadData = false;
    state.update = false;
    state.saveItem = false;
    state.errMsg = undefined;
    switch (action.type) {
        case types.START_getPersoanResumeInfoById_ACTION:
            return Object.assign({}, state, {
                loading: true,
                errMsg: undefined,
                result: undefined,
            });
        case types.RECEIVE_getPersoanResumeInfoById_ACTION:
            return Object.assign({}, state, {
                loadData: true,
                result: action.result,
                errMsg: action.errMsg,
            });
        case types.START_editPersoanlResume_ACTION:
            return Object.assign({}, state, {
                loading: true,
                result: undefined,
                errMsg: undefined,
            });
        case types.ERROR_editPersoanl_ACTION:
            return Object.assign({}, state, {
                update: true,
                result: undefined,
                errMsg: action.errMsg,
            });
        case types.SUCCESS_editPersoanl_ACTION:
            return Object.assign({}, state, {
                update: true,
                result: action.result,
                errMsg: undefined,
            });
        case types.START_editItemSave_ACTION:
            return Object.assign({}, state, {
                saveItem: true,
                item: action.item,
                value: action.value
            });
        default:
            return state;
    }
}