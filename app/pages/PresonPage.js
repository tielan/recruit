
import React, { Component, PropTypes } from 'react';
import {
    StyleSheet,
    Text,
    ScrollView,
    Image,
    Dimensions,
    Navigator,
    TouchableWithoutFeedback,
    ListView,
    TouchableOpacity,
    View,
    InteractionManager
} from 'react-native';
import Toolbar from '../comm/Toolbar';
import ListItemSetting from '../comm/ListItemSetting';
import SettingContainer from '../containers/setting/SettingContainer';
import MyCVContainer from '../containers/setting/MyCVContainer';

var WINDOW_WIDTH = Dimensions.get('window').width;

class PresonPage extends Component {

    constructor(props) {
        super(props);
        this.onSetting = this.onSetting.bind(this);
        this.onMyCV = this.onMyCV.bind(this);

    }
    onMyCV() {
        this.props.navigator.push({
            name: "MyCVContainer",
            component: MyCVContainer,
        });
    }
    onSetting() {
        this.props.navigator.push({
            name: "SettingContainer",
            component: SettingContainer,
        });
    }

    render() {
        return (
            <View style={styles.flex}>
                <Toolbar title='个人' />
                <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                    <View style={styles.bgimage}>
                        <View style={{ alignItems: 'center', height: 130 }}>
                            <Image source={require('../imgs/defaul_user_icon.png')} style={styles.userIcon} />
                            <View style={{ flexDirection: 'column', flex: 1 }}>
                                <Text style={styles.nametitle}> 张三</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.emptyview}></View>
                    <ListItemSetting
                        icon='e673'
                        iconColor='#ffc62b'
                        onPress={this.onMyCV}
                        showText='我的简历' />
                    <ListItemSetting
                        icon='e683'
                        iconColor='#fe7442'
                        showText='我投递的岗位' />
                    <ListItemSetting
                        icon='e67B'
                        iconColor='#83d130'
                        showText='我的收藏' />
                    <View style={styles.emptyview}></View>
                    <ListItemSetting
                        icon='e677'
                        onPress={this.onSetting}
                        iconColor='#15c6ed'
                        showText='设置' />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    flex: {
        flex: 1,
        backgroundColor: '#ebedee',

    },
    container: {
        flex: 1,
        marginBottom: 10,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        height: 60,
        backgroundColor: '#047DE6',

    },
    header_title: {
        color: 'white',
        lineHeight: 40,
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: 'center',
    },
    centerView: {
        flex: 1,

    },
    bgimage: {
        height: 130,
        width: WINDOW_WIDTH,
        backgroundColor: '#53c3fe',
    },
    centerimage: {
        height: 80,
        width: 80,
        borderRadius: 80 / 2,
        marginTop: 30,
        alignSelf: 'center',


    },
    userIcon: {
        height: 70,
        width: 70,
        borderRadius: 70 / 2,
        marginTop: 16,
        alignSelf: 'center',
    },
    nametitle: {
        fontSize: 20,
        marginTop: 8,
        backgroundColor: 'transparent',
        color: '#fff',
    },
    styletitle: {
        fontSize: 14,
        marginTop: 8,
        backgroundColor: 'transparent',
        color: '#63839e',
    },
    emptyview: {
        backgroundColor: '#ECEDEF',
        height: 10,
    },
    menuView: {
        flexDirection: 'row',

    },
    listview: {

        flexDirection: 'column',
    },
});

export default PresonPage;