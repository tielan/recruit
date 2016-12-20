
import * as types from './ActionTypes';
import { FetchManger } from 'react-native-go'

//获取职位信息
export function getMyCollectionListAction(personal_id) {

    let param = { personal_id: personal_id };
    return dispatch => {
        dispatch({
            type: types.START_MyCollectionList_ACTION,
        });
        return FetchManger.getUri(types.API_getCollectionInfo, param).then((responseData) => {
            if (responseData.result === '1' || responseData.result === 1) {
                dispatch({
                    type: types.SUCCESS_MyCollectionList_ACTION,
                    result: responseData.data,
                });
            } else {
                dispatch({
                    type: types.ERROR_MyCollectionList_ACTION,
                    errMsg: responseData.msg,
                });
            }

        }).catch((error) => {
            dispatch({
                type: types.ERROR_MyCollectionList_ACTION,
                errMsg: error,
            });
        })
    };
}
