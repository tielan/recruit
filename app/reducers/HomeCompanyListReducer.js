import * as types from '../actions/ActionTypes';

const initialState = {
    loading: false,
    data: [],
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
                data: undefined,
            });
        case types.RECEIVE_Home_getCompanyByParam_ACTION:
            return Object.assign({}, state, {
                logining: false,
                data: action.result,
                errMsg: action.errMsg,
            });
        default:
            return state;
    }
}