
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

import { Iconfont, LineView, LoginInfo } from 'react-native-go';
import Spinner from '../../comm/Spinner';
import NavigationBar from '../../comm/NavigationBar';
import { connect } from 'react-redux';
import { getPersoanResumeInfoByIdAction } from '../../actions/GetPersoanResumeInfoByIdAction';
//1:待业，2:已入职，3:待定
let items = [
    { name: '姓名', type: 'text' },
    { name: '性别', type: 'select', values: ['未知', '男', '女'] },
    { name: '出生日期', type: 'date', format: 'yyyy-MM-dd' },
    { name: '学历', type: 'select', values: ['未知', '小学', '初中', '本科'] },
    { name: '工作年限', type: 'number', },
    { name: '残联证编号', type: 'number', },
    { name: '联系电话', type: 'number', },
    { name: '求职状态', type: 'select', values: ['待业', '已入职', '待定'] },
    { name: '教育经历', type: 'multiline', },
    { name: '工作经历', type: 'multiline', },
    { name: '自我介绍', type: 'multiline', },
];
/**
 * 我的简历
 */
class MyCVPage extends React.Component {
    constructor(props) {
        super(props);
        this.onRenderItems = this.onRenderItems.bind(this);
    }
    componentDidMount() {
        const { dispatch, router, getPersoanResumeInfoById } = this.props;
        const userInfo = LoginInfo.getUserInfo();
        dispatch(getPersoanResumeInfoByIdAction(userInfo.personal_id));
    }

    componentWillReceiveProps(nextProps) {

    }
    //基本信息
    onRenderItems() {
        return (<View style={{ backgroundColor: '#fff' }}>
            {
                items.map((item, i) => this.rendItem(item, i))
            }
        </View>);
    }
    rendItem(item, i) {
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
                        onChangeText={(values) => {
                            item.values = values;
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
                            selectedValue={item.values[0]}
                            onValueChange={
                                (value) => {

                                }
                            }>
                            {
                                item.values.map((optionValue) => <Picker.Item label={optionValue} value={optionValue} key={optionValue} />)
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
                        onChangeText={(values) => {
                            item.values = values;
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
                            <Text style={styles.rightText}></Text>
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
                        underlineColorAndroid={'transparent'}
                        placeholderTextColor={'#999'}
                        onChangeText={(values) => {
                            item.values = values;
                        } }
                        />
                </View>
            </View>);
        }

    }
    onDatePickItemPress() {
        try{
            const { action,year,month,day } = DatePickerAndroid.open({
                date:new Date(),
            });
            if(action !== DatePickerAndroid.dismissedAction){

            }
        }catch({code,message}){
            console.warn(message);
        }
    }

    render() {
        return (<View style={styles.container} >
            <NavigationBar title='我的简历' navigator={this.props.navigator} rightButtonTitle="提交" />
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
        backgroundColor:'#fff'
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
