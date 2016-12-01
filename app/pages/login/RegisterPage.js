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
    Dimensions,
    ImageButton
} from 'react-native';

import { Iconfont } from 'react-native-go';
import { naviGoBack } from '../../utils/CommonUtils';
import { fetchLogin } from '../../actions/LoginAction';
import Spinner from '../../comm/Spinner';

export default class RegisterPage extends React.Component {
    constructor(props) {
        super(props);
        this.onLogin = this.onLogin.bind(this);
        this.handleIconClicked = this.handleIconClicked.bind(this);

    }
    handleIconClicked() {
        naviGoBack(this.props.navigator);
    }

    onLogin() {
        const {dispatch, login} = this.props;
        dispatch(fetchLogin(login.username, login.password));
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
            <TouchableHighlight onPress={this.handleIconClicked}
                underlayColor={'transparent'}
                style={{ height: 48, marginTop:20, alignItems: 'flex-start',paddingLeft:8}}>
                <View>
                    <Iconfont fontFamily={'OAIndexIcon'}
                        icon='e647'
                        iconColor='#fff'
                        iconSize={34}
                        />
                </View>
            </TouchableHighlight >

            <View style={{ alignItems: 'center', marginTop: 20, marginBottom: 20 }}>
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
                            icon='e676'
                            iconColor='#fff'
                            iconSize={24}
                            />
                    </View>
                    <TextInput style={{ height: 48, color: 'white', flex: 1, paddingLeft: 8 }}
                        placeholder={'残联证编号'}
                        underlineColorAndroid={'transparent'}
                        backgroundColor={'#5e5e5e'}
                        placeholderTextColor={'#fff'}
                        secureTextEntry={true}
                        onChangeText={(password) => {
                            login.password = password;
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
                <View style={{ flexDirection: 'row', height: 48, backgroundColor: 'transparent', alignItems: 'center' ,justifyContent: 'center'}}>
                    <Text style={{ fontSize: 14, color: 'white' }}>密码为6-20位数字、字母组合，不含下划线</Text>
                </View>
            </View >
            <View style={{ marginTop: 10, marginLeft: 16, marginRight: 16, elevation: 4, backgroundColor: '#42befe' }}>
                <TouchableHighlight onPress={this.onLogin}
                    underlayColor={'#999'}
                    style={{ height: 48, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 26, color: 'white', }}>注册</Text>
                </TouchableHighlight >
            </View >
            <View><Spinner visible={login.logining} text={'注册中,请稍后...'} /></View>
        </Image >);
    }

}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: '#ffffff',
    },
    leftIOS: {
        height: 15,
        width: 25,
        marginTop: 20,
        marginLeft: 10
    },
});