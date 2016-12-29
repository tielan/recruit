
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
    ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import { Iconfont, LineView } from 'react-native-go';
import Spinner from '../../comm/Spinner';
import NavigationBar from '../../comm/NavigationBar';
import ForgetPassWordContainer from '../login/ForgetPassWordContainer'
import ZhiWeiDetailContainer from '../ZhiWeiDetailContainer'

class SettingPage extends React.Component {
    constructor(props) {
        super(props);
        this.onForgetPwd = this.onForgetPwd.bind(this);
        this.onMessageSetting = this.onMessageSetting.bind(this);
    }
    onForgetPwd() {
        this.props.navigator.push({
            name: "ForgetPassWordContainer",
            component: ForgetPassWordContainer,
        });
    }

    onMessageSetting(){
        this.props.navigator.push({
            name: "ZhiWeiDetailContainer",
            component: ZhiWeiDetailContainer,
        });
    }
    render() {
        return (<View style={styles.container} >
            <NavigationBar title='设置' navigator={this.props.navigator} />
            <View style={{ flex: 1, backgroundColor: '#F2F2F2' }}>
                <View style={{ height: 44 }}>
                    <TouchableHighlight
                        underlayColor='#C8C7CC'
                        onPress={this.onForgetPwd}>
                        <View style={styles.row}>
                            <View style={styles.text}>
                                <View style={{ flex: 1 }} />
                                <Text style={styles.titles}>修改密码</Text>
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
                    </TouchableHighlight>
                </View>
                <View style={{ height: 44 }}>
                    <TouchableHighlight
                        underlayColor='#C8C7CC'
                        onPress={this.onMessageSetting}>
                        <View style={styles.row}>
                            <View style={styles.text}>
                                <View style={{ flex: 1 }} />
                                <Text style={styles.titles}>消息提醒</Text>
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
                    </TouchableHighlight>
                </View>


                <View style={{ marginTop: 10, marginLeft: 16, marginRight: 16, elevation: 4, backgroundColor: '#42befe' }}>
                    <TouchableHighlight onPress={this.onLogin}
                        underlayColor={'#999'}
                        style={{ height: 44, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 26, color: 'white', }}>退出</Text>
                    </TouchableHighlight >
                </View >
            </View >
        </View >);
    }

}

var styles = StyleSheet.create({
    container: {
        flex: 1
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
    right: {
        paddingRight: 16,
        paddingLeft: 0,

    },
    rightImg: {
        width: 10,
        height: 10,
        alignSelf: 'center',
    },
    titles: {
        fontSize: 14,
        color: '#333',
    },
});
class SettingContainer extends Component {

    render() {
        return (
            <SettingPage {...this.props} />
        );
    }
}

function mapStateToProps(state) {
    const { login } = state;
    return {
        login,
    }
}

export default connect(mapStateToProps)(SettingContainer);
