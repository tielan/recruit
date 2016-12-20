/**
 * 进行定义请求Action类型
 */
export const STOP_loading_ACTION = 'STOP_loading_ACTION';  //开始登陆

//3.1.1 用户登录
export const API_personalLogin = 'personalLogin.do'
export const START_personalLogin_ACTION = 'START_personalLogin_ACTION';  //开始登陆
export const RECEIVE_personalLogin_ACTION = 'RECEIVE_personalLogin_ACTION'; //收到登陆结果
//3.1.2 用户注册
export const API_personalRegist = 'personalRegist.do'
export const START_personalRegist_ACTION = 'START_personalRegist_ACTION';  //开始登陆
export const RECEIVE_personalRegist_ACTION = 'RECEIVE_personalRegist_ACTION'; //收到登陆结果

//3.1.3 忘记密码
export const API_personalForgetPassWord = 'personalForgetPassWord.do'
export const START_personalForgetPassWord_ACTION = 'START_personalForgetPassWord_ACTION';  //开始登陆
export const RECEIVE_personalForgetPassWord_ACTION = 'RECEIVE_personalForgetPassWord_ACTION'; //收到登陆结果
//3.2.1 编辑个人简历信息
export const API_editPersoanlResume = 'editPersoanlResume.do'
export const START_editPersoanlResume_ACTION = 'START_editPersoanlResume_ACTION';  //开始登陆
export const RECEIVE_editPersoanlResume_ACTION = 'RECEIVE_editPersoanlResume_ACTION'; //收到登陆结果
//3.2.2  修改个人简历信息
export const API_getPersoanResumeInfoById = 'getPersoanResumeInfoById.do'
export const START_getPersoanResumeInfoById_ACTION = 'START_getPersoanResumeInfoById_ACTION';  //开始登陆
export const RECEIVE_getPersoanResumeInfoById_ACTION = 'RECEIVE_getPersoanResumeInfoById_ACTION'; //收到登陆结果


//3.2.3 搜索岗位信息
//根据不同的工作类型获取相应的岗位要求信息
export const API_getCompanyByParam = 'getCompanyByParam.do'
export const START_getCompanyByParam_ACTION = 'START_getCompanyByParam_ACTION';  //开始登陆
export const RECEIVE_getCompanyByParam_ACTION = 'RECEIVE_getCompanyByParam_ACTION'; //收到登陆结果

export const START_Home_getCompanyByParam_ACTION = 'START_Home_getCompanyByParam_ACTION';  //开始登陆
export const RECEIVE_Home_getCompanyByParam_ACTION = 'RECEIVE_Home_getCompanyByParam_ACTION'; //收到登陆结果
//3.2.4 获取公司信息
export const API_getCompanyInfoById = 'getCompanyInfoById.do'
export const START_getCompanyInfoById_ACTION = 'START_getCompanyInfoById_ACTION'; 
export const RECEIVE_getCompanyInfoById_ACTION = 'RECEIVE_getCompanyInfoById_ACTION'; 
//3.2.5 投递简历
export const API_sendResume = 'sendResume.do'
export const START_sendResume_ACTION = 'START_sendResume_ACTION';  //开始登陆
export const RECEIVE_sendResume_ACTION = 'RECEIVE_sendResume_ACTION'; //收到登陆结果
//3.2.6 简历状态通知
export const API_getResumeStatus = 'getResumeStatus.do'
export const START_getResumeStatus_ACTION = 'START_getResumeStatus_ACTION';  //开始登陆
export const RECEIVE_getResumeStatus_ACTION = 'RECEIVE_getResumeStatus_ACTION'; //收到登陆结果
//3.2.7 简历数据，可以查看相应的投递岗位信息
export const API_getCompanyInfo = 'getCompanyInfo.do'
export const START_getCompanyInfo_ACTION = 'START_getCompanyInfo_ACTION';  //开始登陆
export const RECEIVE_getCompanyInfo_ACTION = 'RECEIVE_getCompanyInfo_ACTION'; //收到登陆结果
//3.2.8 我投递的简历查询
export const API_getPersonSendResumeInfo = 'getPersonSendResumeInfo.do'
export const START_getPersonSendResumeInfo_ACTION = 'START_getPersonSendResumeInfo_ACTION';  //开始登陆
export const RECEIVE_getPersonSendResumeInfo_ACTION = 'RECEIVE_getPersonSendResumeInfo_ACTION'; //收到登陆结果
//3.2.9 企业邀请通知
export const API_getCompanyInviteInfo = 'getCompanyInviteInfo.do'
export const START_getCompanyInviteInfo_ACTION = 'START_getCompanyInviteInfo_ACTION';  //开始登陆
export const RECEIVE_getCompanyInviteInfo_ACTION = 'RECEIVE_getCompanyInviteInfo_ACTION'; //收到登陆结果
//3.2.11 收藏 用户收藏职位信息
export const API_collectionPost = 'collectionPost.do'
export const START_collectionPost_ACTION = 'START_collectionPost_ACTION';  //开始登陆
export const RECEIVE_collectionPost_ACTION = 'RECEIVE_collectionPost_ACTION'; //收到登陆结果
//3.2.12 收藏列表展示
export const API_getCollectionInfo = 'getCollectionInfo.do'
export const START_getCollectionInfo_ACTION = 'START_getCollectionInfo_ACTION';  //开始登陆
export const RECEIVE_getCollectionInfo_ACTION = 'RECEIVE_getCollectionInfo_ACTION'; //收到登陆结果

//职位列表
export const START_zhiweilist_ACTION = 'START_zhiweilist_ACTION';
export const ERROR_zhiweilist_ACTION = 'ERROR_zhiweilist_ACTION';
export const SUCCESS_zhiweilist_ACTION = 'SUCCESS_zhiweilist_ACTION';

//职位详情
export const START_zhiWeiShow_ACTION = 'START_zhiWeiShow_ACTION';
export const ERROR_zhiWeiShow_ACTION = 'ERROR_zhiWeiShow_ACTION';
export const SUCCESS_zhiWeiShow_ACTION = 'SUCCESS_zhiWeiShow_ACTION';
//公司详情
export const START_gongShiShow_ACTION = 'START_gongShiShow_ACTION';
export const ERROR_gongShiShow_ACTION = 'ERROR_gongShiShow_ACTION';
export const SUCCESS_gongShiShow_ACTION = 'SUCCESS_gongShiShow_ACTION';
//简历被查看 消息
export const START_resumeMessageList_ACTION = 'START_resumeMessageList_ACTION';
export const SUCCESS_resumeMessageList_ACTION = 'SUCCESS_resumeMessageList_ACTION';
export const ERROR_resumeMessageList_ACTION = 'ERROR_resumeMessageList_ACTION';
//公司邀请 消息
export const START_companyMessageList_ACTION = 'START_companyMessageList_ACTION';
export const SUCCESS_companyMessageList_ACTION = 'SUCCESS_companyMessageList_ACTION';
export const ERROR_companyMessageList_ACTION = 'ERROR_companyMessageList_ACTION';

//我的收藏列表
export const START_MyCollectionList_ACTION = 'START_MyCollectionList_ACTION';
export const SUCCESS_MyCollectionList_ACTION = 'SUCCESS_MyCollectionList_ACTION';
export const ERROR_MyCollectionList_ACTION = 'ERROR_MyCollectionList_ACTION';

//我的投递的岗位列表
export const START_MyResumeList_ACTION = 'START_MyResumeList_ACTION';
export const SUCCESS_MyResumeList_ACTION = 'SUCCESS_MyResumeList_ACTION';
export const ERROR_MyResumeList_ACTION = 'ERROR_MyResumeList_ACTION';