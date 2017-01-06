
import * as types from './ActionTypes';
import { FetchManger } from 'react-native-go'

//获取职位信息
export function resumeMessageListAction(personal_id) {

    let param = { status:'1',personal_id: personal_id };
    return dispatch => {
        dispatch({
            type: types.START_resumeMessageList_ACTION,
        });
        return FetchManger.getUri(types.API_getResumeStatus, param).then((responseData) => {
            if (responseData.result === '1' || responseData.result === 1) {
                dispatch({
                    type: types.SUCCESS_resumeMessageList_ACTION,
                    result: responseData.data,
                });
            } else {
                dispatch({
                    type: types.ERROR_resumeMessageList_ACTION,
                    errMsg: responseData.msg,
                });
            }

        }).catch((error) => {
            console.log(error)
        })
    };
}
