
import React, { Component, } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TextInput,
    TouchableHighlight,
    Alert,
    TouchableWithoutFeedback,
    Dimensions,
    ImageButton,
    ScrollView,
    TouchableOpacity,
    Picker,
    DatePickerAndroid
} from 'react-native';

import { Iconfont, LineView, LoginInfo, Toast } from 'react-native-go';
import Spinner from '../../comm/Spinner';
import NavigationBar from '../../comm/NavigationBar';
import EditViewContainer from './EditViewContainer';
import DatePicker from 'react-native-datepicker'

import { connect } from 'react-redux';
import { getPersoanResumeInfoByIdAction, editPersoanlResume } from '../../actions/GetPersoanResumeInfoByIdAction';
//1:待业，2:已入职，3:待定
let items = [
    { name: '姓名', key: 'cn_name', type: 'text' },
    { name: '性别', key: 'sex', type: 'select', values: [{ value: 1, name: '男' }, { value: 2, name: '女' }] },
    { name: '出生日期', key: 'birthday', type: 'date', format: 'YYYY/MM/DD' },
    { name: '学历', key: 'xl', type: 'select', values: [{ value: 0, name: '高中/中专' }, { value: 1, name: '大专' }, { value: 2, name: '本科' }, { value: 3, name: '研究生' }, { value: 4, name: '博士' }] },
    { name: '工作年限', key: 'gznf', type: 'number', },
    { name: '残联证编号', key: 'cardno', type: 'number', },
    { name: '联系电话', key: 'mobile', type: 'number', },
    { name: '求职状态', key: 'qzzt', type: 'select', values: [{ value: 1, name: '目前正在找工作' }, { value: 2, name: '观望有好机会会考虑' }, { value: 3, name: '我目前不想换工作' }] },
    { name: '居住地', key: 'jzd', type: 'text', },
    { name: '电子邮件', key: 'email', type: 'text', },
    { name: '微信', key: 'weixin', type: 'text', },
    { name: 'QQ', key: 'qq', type: 'number', },
    { name: '身份证', key: 'jtdz', type: 'text', },
    { name: '家庭地址', key: 'gzdd', type: 'text', },
    { name: '期望薪资(最少)', key: 'qwxz', type: 'number', },
    { name: '期望薪资(最多)', key: 'qwxz1', type: 'number', },
    { name: '工作类型', key: 'gzlx', type: 'select', values: [{ value: 1, name: '实习生' }, { value: 2, name: '兼职' }, { value: 3, name: '全职' }, { value: 4, name: '全/兼职' }] },
    { name: '教育经历', key: 'jyjl', type: 'multiline', },
    { name: '工作经历', key: 'gzjl', type: 'multiline', },
    { name: '自我介绍', key: 'zwpj', type: 'multiline', },
    { name: '技能特长', key: 'jntcms', type: 'multiline', },
];

/**
 * 我的简历
 * "birthday":"1994/10/16","sex":"2","cn_name":"谢曼林","cardno":"43022319620403655122","personal_id":"9106"
 * 
 * 
 */
class MyCVPage extends React.Component {

    constructor(props) {
        super(props);
        this.onRenderItems = this.onRenderItems.bind(this);
        this.onRightButtonPress = this.onRightButtonPress.bind(this);
        const userInfo = LoginInfo.getUserInfo();
        this.state = {
            inputValue: {
                resume_id: 0,
                birthday: userInfo.birthday,
                sex: userInfo.sex,
                cn_name: userInfo.cn_name,
                cardno: userInfo.cardno,
                user_id: userInfo.personal_id
            }
        }
    }
    componentDidMount() {
        const { dispatch, router, getPersoanResumeInfoById } = this.props;
        const userInfo = LoginInfo.getUserInfo();
        dispatch(getPersoanResumeInfoByIdAction(userInfo.personal_id));
    }

    componentWillReceiveProps(nextProps) {
        const { dispatch, route, getPersoanResumeInfoById } = nextProps;
        if (getPersoanResumeInfoById.loadData) {
            if (getPersoanResumeInfoById.result && getPersoanResumeInfoById.result.result === 1) {//result
                this.setState({
                    inputValue: getPersoanResumeInfoById.result.data
                });
            }
        }
        if (getPersoanResumeInfoById.update) {
            if (getPersoanResumeInfoById.errMsg) {
                Toast.show(getPersoanResumeInfoById.errMsg);
                return;
            }
            nextProps.navigator.pop();
        }
        if (getPersoanResumeInfoById.saveItem) {
            let inputValue = this.state.inputValue;
            inputValue[getPersoanResumeInfoById.item.key] = getPersoanResumeInfoById.value;
            this.setState({
                inputValue: inputValue
            });
        }
    }
    //基本信息
    onRenderItems() {
        return (<View style={{ backgroundColor: '#fff' }}>
            {
                items.map((item, i) => this.rendItem(item, i))
            }
        </View>);
    }
    onRightButtonPress() {
        const { dispatch, router, getPersoanResumeInfoById } = this.props;
        const userInfo = LoginInfo.getUserInfo();
        let inputValue = this.state.inputValue;
        inputValue.User_id = userInfo.personal_id
        dispatch(editPersoanlResume(inputValue));
    }
    onRightItemPress(item, value) {
        this.props.navigator.push({
            name: "EditViewContainer",
            component: EditViewContainer,
            item: item,
            defaultValue: value,
        });
    }
    rendItem(item, i) {
        let inputValue = this.state.inputValue;
        let defaultValue = inputValue ? inputValue[item.key] : undefined;

        if ('text' === item.type) {
            return (<TouchableOpacity onPress={this.onRightItemPress.bind(this, item, defaultValue)} key={i}>
                <View style={{ height: 44 }}>
                    <View style={styles.row}>
                        <View style={styles.text}>
                            <View style={{ flex: 1 }} />
                            <Text style={styles.titles}>{item.name}</Text>
                            <View style={{ flex: 1 }} />
                        </View>
                        <View style={styles.rightTextView}>
                            <View style={{ flex: 1 }} />
                            <Text style={styles.rightText}>{defaultValue ? defaultValue : '请输入' + item.name}</Text>
                            <View style={{ flex: 1 }} />
                        </View>
                        <View style={styles.right} >
                            <Iconfont fontFamily={'OAIndexIcon'}
                                icon='e657' // 图标
                                iconColor='#a3a3a3'
                                iconSize={20}
                                />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>);
        }

        if ('select' === item.type) {
            let showTxt = defaultValue;
            if (defaultValue != undefined) {
                for (var iv of item.values) {
                    if (defaultValue == iv.value) {
                        showTxt = iv.name;
                        break;
                    }
                }
            }
            return (<TouchableOpacity onPress={this.onRightItemPress.bind(this, item, defaultValue)} key={i}>
                <View style={{ height: 44 }} >
                    <View style={styles.row}>
                        <View style={styles.text}>
                            <View style={{ flex: 1 }} />
                            <Text style={styles.titles}>{item.name}</Text>
                            <View style={{ flex: 1 }} />
                        </View>
                        <View style={styles.rightTextView}>
                            <View style={{ flex: 1 }} />
                            <Text style={styles.rightText}>{showTxt ? showTxt : '请选择' + item.name}</Text>
                            <View style={{ flex: 1 }} />
                        </View>
                        <View style={styles.right} >
                            <Iconfont fontFamily={'OAIndexIcon'}
                                icon='e657' // 图标
                                iconColor='#a3a3a3'
                                iconSize={20}
                                />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>);
        }
        if ('number' === item.type) {
            return (<TouchableOpacity onPress={this.onRightItemPress.bind(this, item, defaultValue)} key={i}>
                <View style={{ height: 44 }}>
                    <View style={styles.row}>
                        <View style={styles.text}>
                            <View style={{ flex: 1 }} />
                            <Text style={styles.titles}>{item.name}</Text>
                            <View style={{ flex: 1 }} />
                        </View>
                        <View style={styles.rightTextView}>
                            <View style={{ flex: 1 }} />
                            <Text style={styles.rightText}>{defaultValue ? defaultValue : '请输入' + item.name}</Text>
                            <View style={{ flex: 1 }} />
                        </View>
                        <View style={styles.right} >
                            <Iconfont fontFamily={'OAIndexIcon'}
                                icon='e657' // 图标
                                iconColor='#a3a3a3'
                                iconSize={20}
                                />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>);
        }

        if ('date' === item.type) {
            return (
                <View style={{ height: 44 }} key={i}>
                    <View style={styles.row}>
                        <View style={styles.text}>
                            <View style={{ flex: 1 }} />
                            <Text style={styles.titles}>{item.name}</Text>
                            <View style={{ flex: 1 }} />
                        </View>
                        <View style={{ flex: 1 }} />
                        <View style={styles.rightTextView}>
                            <DatePicker
                                style={{ flex: 1 }}
                                date={defaultValue}
                                mode="date"
                                placeholder={"请选择日期"}
                                format="YYYY/MM/DD"
                                confirmBtnText="确定"
                                cancelBtnText="取消"
                                showIcon={false}
                                customStyles={{
                                    dateInput: {
                                        borderColor: '#ffffff',
                                    },
                                    dateText: {
                                        textAlign: 'right',
                                        color: '#999',
                                    },
                                    placeholderText: {
                                        textAlign: 'right',
                                        color: '#999',
                                    }
                                }}
                                onDateChange={(date) => {
                                    let inputValue = this.state.inputValue;
                                    inputValue[item.key] = date;
                                    this.setState({
                                        inputValue: inputValue
                                    });
                                } }
                                />
                        </View>
                        <View style={styles.right} >
                            <Iconfont fontFamily={'OAIndexIcon'}
                                icon='e657' // 图标
                                iconColor='#a3a3a3'
                                iconSize={20}
                                />
                        </View>
                    </View>
                </View>);
        }

        if ('multiline' === item.type) {
            return (
                <View style={{ height: 124 }} key={i}>
                    <TouchableOpacity onPress={this.onRightItemPress.bind(this, item, defaultValue)} >
                        <View style={{ height: 44, backgroundColor: '#f2f2f2', justifyContent: 'center', flexDirection: 'row', }}>
                            <View style={styles.text}>
                                <View style={{ flex: 1 }} />
                                <Text>{item.name}</Text>
                                <View style={{ flex: 1 }} />
                            </View>
                            <View style={styles.rightTextView}>
                                <View style={{ flex: 1 }} />
                                <Text style={{ textAlign: 'right', color: '#42beff' }}>{'编辑'}</Text>
                                <View style={{ flex: 1 }} />
                            </View>
                            <View style={styles.right} >
                                <Iconfont fontFamily={'OAIndexIcon'}
                                    icon='e657' // 图标
                                    iconColor='#a3a3a3'
                                    iconSize={20}
                                    />
                            </View>
                        </View>

                    </TouchableOpacity>
                    <View style={{ flex: 1, backgroundColor: '#fff' }}>
                        <Text style={{ color: '#999' }}>{defaultValue}</Text>
                    </View>
                </View>);
        }

    }

    render() {
        return (<View style={styles.container} >
            <NavigationBar title='我的简历' navigator={this.props.navigator} rightButtonTitle="提交" onRightButtonPress={this.onRightButtonPress} />
            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                <View style={{ flex: 1, backgroundColor: '#F2F2F2' }}>
                    <View style={{ height: 44, backgroundColor: '#f2f2f2', justifyContent: 'center' }}>
                        <Text style={{ color: '#051b28', marginLeft: 16 }}>{'基本信息'}</Text>
                    </View>
                    {
                        this.onRenderItems()
                    }
                </View >
            </ScrollView >
        </View >);
    }

}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    row: {
        flexDirection: 'row',
        borderColor: '#D4D4D4',
        borderBottomWidth: StyleSheet.hairlineWidth,
        backgroundColor: '#fff',
        height: 44,
    },
    text: {
        flex: 1,
        marginLeft: 10,
    },
    inputText: {
        height: 44,
        color: '#999',
        flex: 1,
        paddingLeft: 8,
        textAlign: 'right'
    },
    rightTextView: {
        height: 44,
        flex: 1,
        paddingLeft: 8,
    },
    rightText: {
        textAlign: 'right',
        color: '#999',
    },
    right: {
        paddingRight: 8,
        paddingLeft: 0,
    },
    rightImg: {
        width: 10,
        height: 10,
        alignSelf: 'center',
    },

});

class MyCVContainer extends Component {

    render() {
        return (
            <MyCVPage {...this.props} />
        );
    }
}

function mapStateToProps(state) {
    const { getPersoanResumeInfoById } = state;
    return {
        getPersoanResumeInfoById,
    }
}

export default connect(mapStateToProps)(MyCVContainer);