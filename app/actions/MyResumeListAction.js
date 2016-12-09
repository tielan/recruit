
import * as types from './ActionTypes';
import { FetchManger } from 'react-native-go'

//获取职位信息
export function getMyResumeListAction(personal_id) {

    let param = { user_id: personal_id };
    return dispatch => {
        dispatch({
            type: types.START_MyResumeList_ACTION,
        });
        return FetchManger.getUri(types.API_getPersonSendResumeInfo, param).then((responseData) => {
            if (responseData.result === '1' || responseData.result === 1) {
                dispatch({
                    type: types.SUCCESS_MyResumeList_ACTION,
                    result: responseData.data,
                });
            } else {
                dispatch({
                    type: types.ERROR_MyResumeList_ACTION,
                    errMsg: responseData.msg,
                });
            }

        }).catch((error) => {
            dispatch({
                type: types.ERROR_MyResumeList_ACTION,
                errMsg: error,
            });
        })
    };
}
