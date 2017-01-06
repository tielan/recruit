
import * as types from './ActionTypes';
import { FetchManger } from 'react-native-go'

//获取职位信息
export function companyMessageListAction(personal_id) {

    let param = { status:'3',personal_id: personal_id };
    return dispatch => {
        dispatch({
            type: types.START_companyMessageList_ACTION,
        });
        return FetchManger.getUri(types.API_getResumeStatus, param).then((responseData) => {
            if (responseData.result === '1' || responseData.result === 1) {
                dispatch({
                    type: types.SUCCESS_companyMessageList_ACTION,
                    result: responseData.data,
                });
            } else {
                dispatch({
                    type: types.ERROR_companyMessageList_ACTION,
                    errMsg: responseData.msg,
                });
            }

        }).catch((error) => {
           console.log(error)
        })
    };
}
