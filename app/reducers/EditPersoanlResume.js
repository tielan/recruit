import * as types from '../actions/ActionTypes';

const initialState = {
    loading: false,
    data: undefined,
    errMsg: undefined,
    resume_id:'',//	Int	简历id
	cn_name:'',//	String	姓名
	sex	:'',//string	性别
	birthday:'',//	string	出生日期
	xl:'',//	string	学历（0:高中/中专，1:大专，2:本科,3:研究生,4:博士）
	gznf:'',//	Int	工作年限
	cardno:'',//	string	残疾证编号
	mobile:'',//	string	联系电话
	qzzt:'',//	Int	求职状态（1: 目前正在找工作，2: 观望有好机会会考虑，3: 我目前不想换工作）
	jzd:'',//	string	居住地
	email:'',//	string	电子邮件
	weixin:'',//	string	微信
	qq:'',//	string	QQ
	sfz	:'',//string	身份证
	jtdz:'',//	string	家庭地址
	gzdd:'',//	string	工作地点(选择,湖南省的所有市州)
	qzzw:'',//	string	求职职位
	qwxz:'',//	string	期望薪资(薪资范围的最小值)
	qwxz1:'',//	string	期望薪资(薪资范围的最大值)
	gzlx:'',//		工作类型(1:实习生,2: 兼职,3:全职,4:全/兼职)
	jyjl:'',//	string	教育经历
	gzjl:'',//	string	工作经历
	zwpj:'',//	String	自我介绍
	jntcms:'',//	string	技能特长
}

export default function register(state = initialState, action) {
    switch (action.type) {
        case types.START_editPersoanlResume_ACTION:
            return Object.assign({}, state, {
                loading: true,
                data: undefined,
                errMsg: undefined,
            });
        case types.RECEIVE_editPersoanlResume_ACTION:
            return Object.assign({}, state, {
                loading: false,
                data: action.result,
                errMsg: action.errMsg,
            });
        default:
            return state;
    }
}