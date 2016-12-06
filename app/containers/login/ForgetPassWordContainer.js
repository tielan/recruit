
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
import { Iconfont,LineView } from 'react-native-go';
import Spinner from '../../comm/Spinner';
import Toolbar from '../../comm/Toolbar';

class ForgetPassWordPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<View style={styles.container} >
            <Toolbar title='忘记密码' navigator={this.props.navigator} />
            <View style={{ flex: 1, backgroundColor: '#F2F2F2' }}>
               
                <View style={{ height: 40,  marginTop: 20 }}>
                    <LineView />
                    <TextInput style={{ height: 40,  paddingLeft: 8 }}
                        placeholder={'请输入手机号码'}
                        backgroundColor={'#fff'}
                        placeholderTextColor={'#cbcbcb'}
                        underlineColorAndroid={'transparent'}
                        autoCapitalize={'none'}
                        autoCorrect={false}
                        onChangeText={(username) => {
                            login.username = username;
                        } }
                        />
                </View>
                
                <View style={{ height: 40, marginTop:1}}>
                    <LineView />
                    <TextInput style={{ height: 40,  paddingLeft: 8 }}
                        placeholder={'请输入残联证编号'}
                        backgroundColor={'#fff'}
                        placeholderTextColor={'#cbcbcb'}
                        underlineColorAndroid={'transparent'}
                        autoCapitalize={'none'}
                        autoCorrect={false}
                        onChangeText={(username) => {
                            login.username = username;
                        } }
                        />
                </View>
                <LineView />
                <View style={{ height: 40,  marginTop: 20 }}>
                    <TextInput style={{ height: 40,  paddingLeft: 8 }}
                        placeholder={'请输入新密码'}
                        backgroundColor={'#fff'}
                        placeholderTextColor={'#cbcbcb'}
                        underlineColorAndroid={'transparent'}
                        autoCapitalize={'none'}
                        autoCorrect={false}
                        onChangeText={(username) => {
                            login.username = username;
                        } }
                        />
                </View>

                <View style={{ flexDirection: 'row', height: 48, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 14, color: '#666' }}>密码为6-20位数字、字母组合，不含下划线</Text>
                </View>
                <View style={{ marginTop: 10, marginLeft: 16, marginRight: 16, elevation: 4, backgroundColor: '#42befe' }}>
                    <TouchableHighlight onPress={this.onLogin}
                        underlayColor={'#999'}
                        style={{ height: 48, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 26, color: 'white', }}>完成</Text>
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
});

class ForgetPassWordContainer extends Component {

  render() {
    return (
      <ForgetPassWordPage {...this.props} />
    );
  }
}

function mapStateToProps(state) {
  const { login }  = state;
  return {
    login,
  }
}

export default connect(mapStateToProps)(ForgetPassWordContainer);
