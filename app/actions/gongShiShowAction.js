
import * as types from './ActionTypes';
import { FetchManger } from 'react-native-go'

//获取职位信息
export function gongShiShowAction(company_id) {

    let param = { company_id: company_id };
    return dispatch => {
        dispatch({
            type: types.START_gongShiShow_ACTION,
        });
        return FetchManger.getUri(types.API_getCompanyInfoById, param).then((responseData) => {
            if (responseData.result === '1') {
                dispatch({
                    type: types.SUCCESS_gongShiShow_ACTION,
                    result: responseData.data,
                });
            } else {
                dispatch({
                    type: types.ERROR_gongShiShow_ACTION,
                    errMsg: responseData.msg,
                });
            }

        }).catch((error) => {
            dispatch({
                type: types.ERROR_gongShiShow_ACTION,
                errMsg: error,
            });
        })
    };
}
