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
    ImageButton,
    ScrollView
} from 'react-native';

import { Iconfont, LineView } from 'react-native-go';
import Spinner from '../../comm/Spinner';
import Toolbar from '../../comm/Toolbar';

export default class MyCVPage extends React.Component {
    constructor(props) {
        super(props);
        this.onRenderSectionHeader = this.onRenderSectionHeader.bind(this);
    }
    onRenderSectionHeader(title) {
        return (<View style={{ height: 44, backgroundColor: '#f2f2f2', justifyContent: 'center' }}>
            <Text style={{ color: '#051b28', marginLeft: 16 }}>{title}</Text>
        </View>);
    }
    onRenderHeadView() {
        return (<View style={{ height: 80, backgroundColor: '#fff' }}>
        </View>);
    }
    //基本信息
    onRenderBaseInfoView() {
        return (<View style={{ backgroundColor: '#fff' }}>
            <View style={{ height: 44 }}>
                <View style={styles.row}>
                    <View style={styles.text}>
                        <View style={{ flex: 1 }} />
                        <Text style={styles.titles}>姓名</Text>
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
            <View style={{ height: 44 }}>
                <View style={styles.row}>
                    <View style={styles.text}>
                        <View style={{ flex: 1 }} />
                        <Text style={styles.titles}>性别</Text>
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
            <View style={{ height: 44 }}>
                <View style={styles.row}>
                    <View style={styles.text}>
                        <View style={{ flex: 1 }} />
                        <Text style={styles.titles}>出生日期</Text>
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
            <View style={{ height: 44 }}>
                <View style={styles.row}>
                    <View style={styles.text}>
                        <View style={{ flex: 1 }} />
                        <Text style={styles.titles}>学历</Text>
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
            <View style={{ height: 44 }}>
                <View style={styles.row}>
                    <View style={styles.text}>
                        <View style={{ flex: 1 }} />
                        <Text style={styles.titles}>工作年限</Text>
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
            <View style={{ height: 44 }}>
                <View style={styles.row}>
                    <View style={styles.text}>
                        <View style={{ flex: 1 }} />
                        <Text style={styles.titles}>残联证编号</Text>
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
            <View style={{ height: 44 }}>
                <View style={styles.row}>
                    <View style={styles.text}>
                        <View style={{ flex: 1 }} />
                        <Text style={styles.titles}>联系电话</Text>
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
            <View style={{ height: 44 }}>
                <View style={styles.row}>
                    <View style={styles.text}>
                        <View style={{ flex: 1 }} />
                        <Text style={styles.titles}>求职状态</Text>
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
        </View>);
    }
    render() {
        return (<View style={styles.container} >
            <Toolbar title='我的简历' navigator={this.props.navigator} />
            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
            <View style={{ flex: 1, backgroundColor: '#F2F2F2' }}>
                {
                    this.onRenderSectionHeader('头像')
                }
                {
                    this.onRenderHeadView()
                }
                {
                    this.onRenderSectionHeader('基本信息')
                }
                {
                    this.onRenderBaseInfoView()
                }
                {
                    this.onRenderSectionHeader('教育经历')
                }
                {
                    this.onRenderHeadView()
                }
                {
                    this.onRenderSectionHeader('工作经历')
                }
                {
                    this.onRenderHeadView()
                }
            </View >
             </ScrollView >
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
        backgroundColor:'#fff',
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

});