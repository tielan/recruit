
import * as types from './ActionTypes';
import { FetchManger } from 'react-native-go'

//获取职位信息
export function zhiWeiShowAction(post_id) {

    let param = { post_id: post_id };
    return dispatch => {
        dispatch({
            type: types.START_zhiWeiShow_ACTION,
        });
        return FetchManger.getUri(types.API_getCompanyInfoById, param).then((responseData) => {
            if (responseData.result === '1') {
                dispatch({
                    type: types.SUCCESS_zhiWeiShow_ACTION,
                    result: responseData.data,
                });
            } else {
                dispatch({
                    type: types.ERROR_zhiWeiShow_ACTION,
                    errMsg: responseData.msg,
                });
            }

        }).catch((error) => {
            dispatch({
                type: types.ERROR_zhiWeiShow_ACTION,
                errMsg: error,
            });
        })
    };
}
