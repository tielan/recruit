
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
import { connect } from 'react-redux';
import { getPersoanResumeInfoByIdAction, editPersoanlResume } from '../../actions/GetPersoanResumeInfoByIdAction';
//1:待业，2:已入职，3:待定
let items = [
    { name: '姓名', key: 'cn_name', type: 'text' },
    { name: '性别', key: 'sex', type: 'select', values: [[1, '男'], [2, '女']] },
    { name: '出生日期', key: 'birthday', type: 'date', format: 'YYYY/MM/DD' },
    { name: '学历', key: 'xl', type: 'select', values: [[0, '高中/中专'], [1, '大专'], [2, '本科'], [3, '研究生'], [4, '博士']] },
    { name: '工作年限', key: 'gznf', type: 'number', },
    { name: '残联证编号', key: 'cardno', type: 'number', },
    { name: '联系电话', key: 'mobile', type: 'number', },
    { name: '求职状态', key: 'qzzt', type: 'select', values: [[1, '目前正在找工作'], [2, '观望有好机会会考虑'], [3, '我目前不想换工作']] },
    { name: '居住地', key: 'jzd', type: 'text', },
    { name: '电子邮件', key: 'email', type: 'text', },
    { name: '微信', key: 'weixin', type: 'text', },
    { name: 'QQ', key: 'qq', type: 'number', },
    { name: '身份证', key: 'jtdz', type: 'text', },
    { name: '家庭地址', key: 'gzdd', type: 'text', },
    { name: '期望薪资(最少)', key: 'qwxz', type: 'number', },
    { name: '期望薪资(最多)', key: 'qwxz1', type: 'number', },
    { name: '工作类型', key: 'gzlx', type: 'select', values: [[1, '实习生'], [2, '兼职'], [3, '全职'], [4, '全/兼职']] },
    { name: '教育经历', key: 'jyjl', type: 'multiline', },
    { name: '工作经历', key: 'gzjl', type: 'multiline', },
    { name: '自我介绍', key: 'zwpj', type: 'multiline', },
    { name: '技能特长', key: 'jntcms', type: 'multiline', },
];

let inputValue = {};
/**
 * 我的简历
 */
class MyCVPage extends React.Component {
    
    constructor(props) {
        super(props);
        this.onRenderItems = this.onRenderItems.bind(this);
        this.onRightButtonPress = this.onRightButtonPress.bind(this);
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
                inputValue = getPersoanResumeInfoById.result.data;
            }
        }
        if (getPersoanResumeInfoById.update) {
            if (getPersoanResumeInfoById.errMsg) {
                Toast.show(getPersoanResumeInfoById.errMsg);
                return;
            }
            nextProps.navigator.pop();
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
        inputValue.personal_id = userInfo.personal_id
        dispatch(editPersoanlResume(inputValue));
    }
    rendItem(item, i) {
        let defaultValue = inputValue[item.key];

        if ('text' === item.type) {
            return (<View style={{ height: 44 }} key={i}>
                <View style={styles.row}>
                    <View style={styles.text}>
                        <View style={{ flex: 1 }} />
                        <Text style={styles.titles}>{item.name}</Text>
                        <View style={{ flex: 1 }} />
                    </View>
                    <TextInput style={styles.inputText}
                        placeholder={'请输入' + item.name}
                        underlineColorAndroid={'transparent'}
                        placeholderTextColor={'#999'}
                        defaultValue={defaultValue}
                        onChangeText={(values) => {
                            inputValue[item.key] = values;
                        } }
                        />
                    <View style={styles.right} >

                    </View>
                </View>
            </View>);
        }

        if ('select' === item.type) {
            return (<View style={{ height: 44 }} key={i}>
                <View style={styles.row}>
                    <View style={styles.text}>
                        <View style={{ flex: 1 }} />
                        <Text style={styles.titles}>{item.name}</Text>
                        <View style={{ flex: 1 }} />
                    </View>
                    <View style={styles.rightTextView}>
                        <View style={{ flex: 1 }} />
                        <Picker
                            style={{
                                marginRight: 16
                            }}
                            itemStyle={{
                                textAlign: 'right',
                                color: '#999'
                            }}
                            mode={Picker.MODE_DIALOG}
                            selectedValue={defaultValue ? defaultValue : item.values[0][1]}
                            onValueChange={
                                (value) => {
                                    inputValue[item.key] = value;
                                }
                            }>
                            {
                                item.values.map((optionValue) => <Picker.Item label={optionValue[1]} value={optionValue[0]} key={optionValue[0]} />)
                            }
                        </Picker>
                        <View style={{ flex: 1 }} />
                    </View>
                </View>
            </View>);
        }
        if ('number' === item.type) {
            return (<View style={{ height: 44 }} key={i}>
                <View style={styles.row}>
                    <View style={styles.text}>
                        <View style={{ flex: 1 }} />
                        <Text style={styles.titles}>{item.name}</Text>
                        <View style={{ flex: 1 }} />
                    </View>
                    <TextInput style={styles.inputText}
                        placeholder={'请输入' + item.name}
                        underlineColorAndroid={'transparent'}
                        placeholderTextColor={'#999'}
                        keyboardType='phone-pad'
                        defaultValue={defaultValue}
                        onChangeText={(values) => {
                            inputValue[item.key] = values;
                        } }
                        />
                    <View style={styles.right} >

                    </View>
                </View>
            </View>);
        }

        if ('date' === item.type) {
            return (<TouchableOpacity onPress={this.onDatePickItemPress.bind(this)} key={i}>
                <View style={{ height: 44 }} >
                    <View style={styles.row}>
                        <View style={styles.text}>
                            <View style={{ flex: 1 }} />
                            <Text style={styles.titles}>{item.name}</Text>
                            <View style={{ flex: 1 }} />
                        </View>
                        <View style={styles.rightTextView}>
                            <View style={{ flex: 1 }} />
                            <Text style={styles.rightText}>{defaultValue}</Text>
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

        if ('multiline' === item.type) {
            return (<View style={{ height: 124 }} key={i}>
                <View style={{ height: 44, backgroundColor: '#f2f2f2', justifyContent: 'center' }}>
                    <Text style={{ color: '#051b28', marginLeft: 16 }}>{item.name}</Text>
                </View>
                <View style={{ flex: 1, backgroundColor: '#fff' }}>
                    <TextInput style={{ flex: 1, }}
                        multiline={true}
                        placeholder={'请输入' + item.name}
                        defaultValue={defaultValue}
                        underlineColorAndroid={'transparent'}
                        placeholderTextColor={'#999'}
                        onChangeText={(values) => {
                            inputValue[item.key] = values;
                        } }
                        />
                </View>
            </View>);
        }

    }
    onDatePickItemPress() {
        try {
            const { action, year, month, day } = DatePickerAndroid.open({
                date: new Date(),
            });
            if (action !== DatePickerAndroid.dismissedAction) {
                inputValue[item.key] = values;
            }
        } catch ({code, message}) {
            console.warn(message);
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
        borderBottomWidth: 1,
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
