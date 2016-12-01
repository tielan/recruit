import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TextInput,
    TouchableHighlight,
    Alert,
    TouchableWithoutFeedback,
    Dimensions
} from 'react-native';
import { Iconfont } from 'react-native-go';

import { fetchLogin } from '../../actions/LoginAction';
import Spinner from '../../comm/Spinner';

import ForgetPassWordContainer from '../../containers/login/ForgetPassWordContainer';
import RegisterContainer from '../../containers/login/RegisterContainer';
import MainContainer from '../../containers/MainContainer';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.onLogin = this.onLogin.bind(this);
        this.onRegister = this.onRegister.bind(this);
        this.onForgetPwd = this.onForgetPwd.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        const {login} = nextProps;
        if (login.logined) {
            if (!login.rawData) {
                Alert.alert('', '网络请求失败，请稍后再试！', [{ text: '好' },]);
            } else if (login.rawData.code == 'success') {
                Alert.alert('', '登陆成功', [{ text: '好' },]);
                //nextProps.navigator.push({
                //name:"firstLogin",
                //component:firstLoginContainer,
                //});
            } else if (login.rawData.code == 'failure') {
                Alert.alert('', login.rawData.msg, [{ text: '好' },]);
            }
        }
    }

    render() {
        const {dispatch, login} = this.props;
        constdismissKeyboard = require('dismissKeyboard');
        return (<Image style={styles.container} source={require('../../imgs/bj.png')}>

            <View style={{ alignItems: 'center', marginTop: 64, marginBottom: 20 }}>
                <Image style={{ width: 100, height: 100, margin: 8, borderRadius: 0, }}
                    source={require('../../imgs/login/logo.png')} />
            </View>
            <View style={{ margin: 16, backgroundColor: 'transparent', elevation: 4 }}>
                <View style={{ flexDirection: 'row', height: 48, alignItems: 'center' }}>
                    <View style={{ height: 48, width: 48, backgroundColor: '#303030' }}>
                        <Iconfont fontFamily={'OAIndexIcon'}
                            icon='e60e'
                            iconColor='#fff'
                            iconSize={24}
                            />
                    </View>
                    <TextInput style={{ height: 48, color: 'white', flex: 1, paddingLeft: 8 }}
                        placeholder={'请输入用户名'}
                        backgroundColor={'#5e5e5e'}
                        placeholderTextColor={'#fff'}
                        underlineColorAndroid={'transparent'}
                        autoCapitalize={'none'}
                        autoCorrect={false}
                        onChangeText={(username) => {
                            login.username = username;
                        } }
                        />
                </View>
                <View style={{ height: 8, backgroundColor: 'transparent' }} />
                <View style={{ flexDirection: 'row', height: 48, backgroundColor: 'white', alignItems: 'center' }}>
                    <View style={{ height: 48, width: 48, backgroundColor: '#303030' }}>
                        <Iconfont fontFamily={'OAIndexIcon'}
                            icon='e692'
                            iconColor='#fff'
                            iconSize={24}
                            />
                    </View>
                    <TextInput style={{ height: 48, color: 'white', flex: 1, paddingLeft: 8 }}
                        placeholder={'请输入密码'}
                        underlineColorAndroid={'transparent'}
                        backgroundColor={'#5e5e5e'}
                        placeholderTextColor={'#fff'}
                        secureTextEntry={true}
                        onChangeText={(password) => {
                            login.password = password;
                        } }
                        />
                </View>
                <View style={{ flexDirection: 'row', height: 48, backgroundColor: 'transparent', alignItems: 'center' }}>
                    <View style={{ height: 22, flex: 1, backgroundColor: 'transparent' }} />
                    <TouchableHighlight onPress={this.onForgetPwd} underlayColor={'#999'} style={{ height: 22, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 16, color: 'white', }}>忘记密码？</Text>
                    </TouchableHighlight >
                </View>
            </View >
            <View style={{ marginTop: 10, marginLeft: 16, marginRight: 16, elevation: 4, backgroundColor: '#42befe' }}>
                <TouchableHighlight onPress={this.onLogin}
                    underlayColor={'#999'}
                    style={{ height: 48, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 26, color: 'white', }}>登录</Text>
                </TouchableHighlight >
            </View >
            <View style={{ flex: 1 }} />
            <View style={{ flexDirection: 'row', height: 48, marginBottom: 20, backgroundColor: 'transparent', alignItems: 'center' }}>
                <View style={{ flex: 1 }} />
                <TouchableHighlight onPress={this.onRegister} underlayColor={'#999'} style={{ height: 22, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ flexDirection: 'row', height: 48, backgroundColor: 'transparent', alignItems: 'center' }}>
                        <Text style={{ fontSize: 18, color: 'white' }}>没有账号？</Text>
                        <Text style={{ fontSize: 18, color: '#fd8c26' }}>立即注册</Text>
                    </View>
                </TouchableHighlight >
                <View style={{ flex: 1 }} />
            </View>
            <View><Spinner visible={login.logining} text={'登录中,请稍后...'} /></View>
        </Image >);
    }

    onLogin() {
        this.props.navigator.push({
            name: "MainContainer",
            component: MainContainer,
        });
        /* const {dispatch, login} = this.props;
         dispatch(fetchLogin(login.username, login.password));*/
    }
    onForgetPwd() {
        this.props.navigator.push({
            name: "ForgetPassWordContainer",
            component: ForgetPassWordContainer,
        });
    }
    onRegister() {
        this.props.navigator.push({
            name: "RegisterContainer",
            component: RegisterContainer,
        });
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: '#ffffff',
    },
});