import React, { Component, } from 'react';
import {
    StyleSheet,
    TextInput,
    Text,
    Image,
    TouchableHighlight,
    View,
    Dimensions,
    ListView,
    Platform,
    Picker,
    Navigator,
    Alert,
    TouchableOpacity,
    InteractionManager,
} from 'react-native';
import { connect } from 'react-redux';

import { Iconfont, LineView, Spinner, LoginInfo } from 'react-native-go';
import NavigationBar from '../../comm/NavigationBar';

import { getMyCollectionListAction } from '../../actions/MyCollectionListAction';
import ZhiWeiDetailContainer from '../ZhiWeiDetailContainer'


class MyCollectionListPage extends React.Component {
    constructor(props) {
        super(props);
        this._renderRowView = this._renderRowView.bind(this);
    }
    componentDidMount() {

        InteractionManager.runAfterInteractions(() => {
            const { dispatch} = this.props;
            //我的收藏
            const userInfo = LoginInfo.getUserInfo();
            dispatch(getMyCollectionListAction(userInfo.personal_id));
        });

    }
    _rowOnPress(rowData) {
        this.props.navigator.push({
            name: "ZhiWeiDetailContainer",
            component: ZhiWeiDetailContainer,
            company_id: rowData.company_id,
            post_id: rowData.post_id,
        });
    }

    _renderRowView(rowData, sectionId, index) {
        return (
            <TouchableHighlight
                underlayColor='#fff'
                onPress={this._rowOnPress.bind(this, rowData)}
                key={index}
                >
                <View style={{ flexDirection: 'row', borderColor: '#e5e5e5', borderBottomWidth: 1, backgroundColor: '#fff' }}>
                    <View style={{ flexDirection: 'column', marginBottom: 10, flex: 1, }} >
                        <View style={{ marginLeft: 16, marginTop: 10 }}>
                            <Text style={{ fontSize: 16, color: '#000' }}> {rowData.post_name}</Text>
                        </View>
                        <View style={{ marginLeft: 16, marginTop: 10 }}>
                            <Text style={{ fontSize: 14, color: '#666' }}>{rowData.company_name}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginLeft: 16, alignItems: 'flex-start', justifyContent: 'flex-start', marginTop: 10 }}>
                            <View style={{ alignSelf: 'flex-start' }}>
                                <Iconfont fontFamily={'OAIndexIcon'}
                                    icon={'e679'} // 图标
                                    iconColor='#bbb'
                                    labelColor='#bbb'
                                    label={rowData.addr_area}
                                    iconSize={14}
                                    />
                            </View>
                            <View style={{ alignSelf: 'flex-start', marginLeft: 16 }}>
                                <Iconfont fontFamily={'OAIndexIcon'}
                                    icon={'e683'} // 图标
                                    iconColor='#bbb'
                                    labelColor='#bbb'
                                    label={rowData.education_area}
                                    iconSize={14}
                                    />
                            </View>

                        </View>
                    </View>
                    <View style={{ flexDirection: 'column', alignItems: 'center', width: 60, marginLeft: 8 }}>
                        <Text style={{ color: '#bbbbbb', marginTop: 10, fontSize: 14, }}>{rowData.time}</Text>
                        <Text style={{ color: 'red', marginTop: 10, fontSize: 16, }}>{rowData.salary_area}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );

    }
    render() {
        const { MyCollectionList } = this.props;
        return (
            <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#ebedee' }}>
                <NavigationBar title='我的收藏' navigator={this.props.navigator} />
                <View style={{ flex: 1 }}>
                    {
                        (MyCollectionList.listData._cachedRowCount > 0) ?
                            <ListView
                                dataSource={MyCollectionList.listData}
                                renderRow={this._renderRowView}
                                />
                            :
                            <View style={{ alignItems: 'center', flex: 1, backgroundColor: '#fff' }}>
                                <View style={{ flex: 1 }} />
                                <Text >暂无数据</Text>
                                <View style={{ flex: 1 }} />
                            </View>
                    }
                    
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

});

class MyCollectionListContainer extends Component {

    render() {
        return (
            <MyCollectionListPage {...this.props} />
        );
    }
}

function mapStateToProps(state) {
    const { MyCollectionList } = state;
    return {
        MyCollectionList,
    }
}

export default connect(mapStateToProps)(MyCollectionListContainer);