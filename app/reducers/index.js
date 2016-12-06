import {combineReducers} from 'redux';

import personalLogin from './LoginReducer';
import personalRegist from './RegisterReducer';
import homeCompanyList from './HomeCompanyListReducer';
import getPersonSendResumeInfo from './GetPersonSendResumeInfo';


import collectionPost from './CollectionPost';
import editPersoanlResume from './EditPersoanlResume';
import personalForgetPassWord from './ForgetPassWord';
import getCollectionInfo from './GetCollectionInfo';
import getCompanyByParam from './GetCompanyByParam';
import getCompanyInfo from './GetCompanyInfo';
import getCompanyInfoById from './GetCompanyInfoById';
import getCompanyInviteInfo from './GetCompanyInviteInfo';
import getPersoanResumeInfoById from './GetPersoanResumeInfo';
import getResumeStatus from './GetResumeStatus';
import sendResume from './SendResume';

const rootReducer = combineReducers({
      personalLogin,
      personalRegist,
      collectionPost,
      editPersoanlResume,
      personalForgetPassWord,
      getCollectionInfo,
      getCompanyByParam,
      getCompanyInfo,
      getCompanyInfoById,
      getCompanyInviteInfo,
      getPersoanResumeInfoById,
      getPersonSendResumeInfo,
      getResumeStatus,
      sendResume,
      homeCompanyList
      
});

export default rootReducer;