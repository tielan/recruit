
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
    ImageButton
} from 'react-native';

import { connect } from 'react-redux';
import { Iconfont, LineView, Toast } from 'react-native-go';
import Spinner from '../../comm/Spinner';
import NavigationBar from '../../comm/NavigationBar';
import { personalForgetAction } from '../../actions/PersonalForgetAction';
import dismissKeyboard from 'dismissKeyboard';

class ForgetPassWordPage extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillReceiveProps(nextProps) {
        const { dispatch, personalForgetPassWord } = nextProps;
        if (personalForgetPassWord.data || personalForgetPassWord.errMsg) {
            if (personalForgetPassWord.errMsg) {
                Toast.show(personalForgetPassWord.errMsg);
                return;
            }
            if (personalForgetPassWord.result === 1) {
                nextProps.navigator.pop();
            } else {
                Toast.show((personalForgetPassWord.data && personalForgetPassWord.data.msg) ? personalForgetPassWord.data.msg : '网络请求失败，请稍后再试');
                return;
            }
        }
    }
    render() {
        const { dispatch, personalForgetPassWord } = this.props;

        return (<View style={styles.container} >
            <NavigationBar title='忘记密码' navigator={this.props.navigator} />
            <View style={{ flex: 1, backgroundColor: '#F2F2F2' }}>

                <View style={{ height: 40, marginTop: 20 }}>
                    <View style={{ height: StyleSheet.hairlineWidth, backgroundColor: '#d9d9d9' }} />
                    <TextInput style={{ height: 40, paddingLeft: 8, backgroundColor: '#fff' }}
                        placeholder={'请输入手机号码'}
                        placeholderTextColor={'#cbcbcb'}
                        underlineColorAndroid={'transparent'}
                        autoCapitalize={'none'}
                        autoCorrect={false}
                        onChangeText={(username) => {
                            personalForgetPassWord.username = username;
                        } }
                        />
                </View>
                <View style={{ height: StyleSheet.hairlineWidth, backgroundColor: '#d9d9d9' }} />
                <View style={{ height: 40 }}>
                    <TextInput style={{ height: 40, paddingLeft: 8, backgroundColor: '#fff' }}
                        placeholder={'请输入残联证编号'}
                        placeholderTextColor={'#cbcbcb'}
                        underlineColorAndroid={'transparent'}
                        autoCapitalize={'none'}
                        autoCorrect={false}
                        onChangeText={(disability_code) => {
                            personalForgetPassWord.disability_code = disability_code;
                        } }
                        />
                </View>
                <View style={{ height: StyleSheet.hairlineWidth, backgroundColor: '#d9d9d9' }} />
                <View style={{ marginTop: 20, height: StyleSheet.hairlineWidth, backgroundColor: '#d9d9d9' }} />
                <View style={{ height: 40, }}>
                    <TextInput style={{ height: 40, paddingLeft: 8, backgroundColor: '#fff' }}
                        placeholder={'请输入新密码'}
                        placeholderTextColor={'#cbcbcb'}
                        underlineColorAndroid={'transparent'}
                        autoCapitalize={'none'}
                        autoCorrect={false}
                        secureTextEntry={true}
                        onChangeText={(user_password) => {
                            personalForgetPassWord.user_password = user_password;
                        } }
                        />
                </View>
                <View style={{ height: StyleSheet.hairlineWidth, backgroundColor: '#d9d9d9' }} />
                <View style={{ flexDirection: 'row', height: 48, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 14, color: '#666' }}>密码为6-20位数字、字母组合，不含下划线</Text>
                </View>
                <View style={{ marginTop: 10, marginLeft: 16, marginRight: 16, elevation: 4, backgroundColor: '#42befe' }}>
                    <TouchableHighlight onPress={
                        () => {
                            dismissKeyboard();
                            dispatch(personalForgetAction(personalForgetPassWord.user_name, personalForgetPassWord.disability_code, personalForgetPassWord.user_password));
                        }
                    }
                        underlayColor={'#999'}
                        style={{ height: 48, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 26, color: 'white', }}>完成</Text>
                    </TouchableHighlight >
                </View >
            </View >
            <View><Spinner visible={personalForgetPassWord.loading} /></View>

        </View >);
    }

}

var styles = StyleSheet.create({
    container: {
        flex: 1
    },
});

class ForgetPassWordContainer extends Component {

    render() {
        return (
            <ForgetPassWordPage {...this.props} />
        );
    }
}

function mapStateToProps(state) {
    const { personalForgetPassWord } = state;
    return {
        personalForgetPassWord,
    }
}

export default connect(mapStateToProps)(ForgetPassWordContainer);
