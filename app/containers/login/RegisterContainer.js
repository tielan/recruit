
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
    InteractionManager
} from 'react-native';

import { connect } from 'react-redux';
import dismissKeyboard from 'dismissKeyboard';
import { Iconfont } from 'react-native-go';
import { naviGoBack } from '../../utils/CommonUtils';
import { personalRegistAction, stopLoad } from '../../actions/RegisterAction';
import Spinner from '../../comm/Spinner';
import MainContainer from '../MainContainer';

let count = 0
class RegisterPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleIconClicked = this.handleIconClicked.bind(this);

    }
    handleIconClicked() {
        naviGoBack(this.props.navigator);
    }

    componentWillReceiveProps(nextProps) {
        const { dispatch, personalRegist } = nextProps;
        if (personalRegist.data || personalRegist.errMsg) {
            setTimeout(() => {
                if (personalRegist.data.result === 0 && personalRegist.errMsg) {
                    Alert.alert('', personalRegist.errMsg, [{ text: '好' },])
                    return;
                }
                if (personalRegist.data && personalRegist.data.result === 1) {
                    InteractionManager.runAfterInteractions(() => {
                        nextProps.navigator.resetTo({
                            name: "MainContainer",
                            component: MainContainer,
                        });
                    });
                } else {
                    Alert.alert('', (personalRegist.data && personalRegist.data.msg) ? personalRegist.data.msg : '网络请求失败，请稍后再试', [{ text: '好' },]);
                    return;
                }
            }, 200);
        }
    }

    render() {
        const { dispatch, personalRegist } = this.props;
        return (<View style={styles.container}>
            <Image style={styles.container} source={require('../../imgs/bj.png')}>
                <TouchableHighlight onPress={this.handleIconClicked}
                    underlayColor={'transparent'}
                    style={{ height: 48, marginTop: 20, alignItems: 'flex-start', paddingLeft: 8 }}>
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
                        <TextInput style={{ height: 48, color: 'white',backgroundColor:'#5e5e5e', flex: 1, paddingLeft: 8 }}
                            placeholder={'请输入手机号'}
                            placeholderTextColor={'#fff'}
                            underlineColorAndroid={'transparent'}
                            autoCapitalize={'none'}
                            autoCorrect={false}
                            onChangeText={(user_name) => {
                                personalRegist.user_name = user_name;
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
                        <TextInput style={{ height: 48, color: 'white',backgroundColor:'#5e5e5e', flex: 1, paddingLeft: 8 }}
                            placeholder={'残联证编号'}
                            underlineColorAndroid={'transparent'}
                            placeholderTextColor={'#fff'}
                            onChangeText={(disability_code) => {
                                personalRegist.disability_code = disability_code;
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
                        <TextInput style={{ height: 48, color: 'white',backgroundColor:'#5e5e5e' ,flex: 1, paddingLeft: 8 }}
                            placeholder={'请输入密码'}
                            underlineColorAndroid={'transparent'}
                            placeholderTextColor={'#fff'}
                            secureTextEntry={true}
                            onChangeText={(user_password) => {
                                personalRegist.user_password = user_password;
                            } }
                            />
                    </View>
                    <View style={{ flexDirection: 'row', height: 48, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 14, color: 'white' }}>密码为6-20位数字、字母组合，不含下划线</Text>
                    </View>
                </View >
                <View style={{ marginTop: 10, marginLeft: 16, marginRight: 16, elevation: 4, backgroundColor: '#42befe' }}>
                    <TouchableHighlight onPress={
                        () => dispatch(personalRegistAction(personalRegist))
                    }
                        underlayColor={'#999'}
                        style={{ height: 48, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 26, color: 'white', }}>注册</Text>
                    </TouchableHighlight >
                </View >
            </Image >
            <View>
                <Spinner visible={personalRegist.loading} />
            </View>
        </View>);
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

class RegisterContainer extends Component {

    render() {
        return (
            <RegisterPage {...this.props} />
        );
    }
}

function mapStateToProps(state) {
    const { personalRegist } = state;
    return {
        personalRegist,
    }
}

export default connect(mapStateToProps)(RegisterContainer);
