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
    TouchableOpacity,
} from 'react-native';

import ModalDropdown from '../comm/ModalDropdown';


import { connect } from 'react-redux';
import { Iconfont, LineView, Spinner } from 'react-native-go';
import RefreshFooter from '../comm/RefreshFooter';
import NavigationBar from '../comm/NavigationBar';


import { selectArr } from '../constants/Type_Dict';
import { getCompanyByParamAction, updateParam } from '../actions/zhiweilistAction';
import ZhiWeiDetailContainer from './ZhiWeiDetailContainer'

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

let Type = {};

export default class ZhiWeiListPage extends React.Component {

    constructor(props) {
        super(props);
        this.onEndReached = this.onEndReached.bind(this);
        this._renderRowView = this._renderRowView.bind(this);
        Type = {};
    }
    componentDidMount() {
        const { dispatch, route, zhiweilist } = this.props;
        //获取列表
        dispatch(getCompanyByParamAction(route.work_type));
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
                <View style={{ flexDirection: 'row', borderColor: '#e5e5e5', borderBottomWidth: StyleSheet.hairlineWidth, backgroundColor: '#fff' }}>
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
    //加载更多
    onEndReached() {

    }

    render() {
        const { dispatch, route, zhiweilist } = this.props;

        return (
            <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#ebedee', }}>
                <NavigationBar title='职位列表' navigator={this.props.navigator} />
                <View style={{ height: 40,marginLeft:2,marginRight:2, flexDirection: 'row', backgroundColor: '#fff', justifyContent: 'center', }}>
                    {
                        selectArr.map((item) => <ModalDropdown
                            width={WINDOW_WIDTH / 4}
                            key={item.name}
                            options={item.value}
                            defaultValue={item.value[0].name}
                            style={{
                                justifyContent: 'center',
                            }}
                            onSelect={
                                (index,_item) => {
                                Type[item.name] = _item.id ? _item.id : undefined;
                                dispatch(getCompanyByParamAction(route.work_type,
                                    Type.addr_area,
                                    Type.industry,
                                    Type.post_name,
                                    Type.salary_type));
                            }}
                            />)

                    }
                </View>
                <View style={{ height: StyleSheet.hairlineWidth, backgroundColor: '#d9d9d9' }} />
                <View style={{ flex: 1 }}>
                    {
                        (zhiweilist.listData._cachedRowCount > 0) ?
                            <ListView
                                enableEmptySections={true}
                                dataSource={zhiweilist.listData}
                                renderRow={this._renderRowView}
                                onEndReached={this.onEndReached}
                                onEndReachedThreshold={38}
                                renderFooter={() => <View style={{ width: WINDOW_WIDTH, height: 44 }}><RefreshFooter loading={zhiweilist.loadMore} /></View>}
                                />
                            :
                            <View style={{ alignItems: 'center', flex: 1, backgroundColor: '#fff' }}>
                                <View style={{ flex: 1 }} />
                                <Text style={styles.bgtext}>暂无数据</Text>
                                <View style={{ flex: 1 }} />
                            </View>
                    }
                    <View>
                        <Spinner visible={zhiweilist.loading} />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    modelStyle: {
        flexDirection: 'column',
        position: 'absolute',
        backgroundColor: '#fdfcf5',
        opacity: 0.98,
        borderRadius: 10,
        overflow: 'hidden',
        marginLeft: WINDOW_WIDTH / 8,
        width: WINDOW_WIDTH - WINDOW_WIDTH / 4,
        height: WINDOW_HEIGHT - WINDOW_HEIGHT / 3,
        marginTop: WINDOW_HEIGHT / 8,
    },
    picker: {
        flex: 1,
    },
    textStyle: {
        marginTop: 5,
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'center',
        color: '#ff8c00'
    },
    calendar: {
        height: 60,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    button: {
        justifyContent: 'center',
        borderRadius: 8,
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
        width: 70,
        height: 35,
    },
    buttonText: {
        alignSelf: 'center',
        fontSize: 18,
        color: '#ff8c00'
    },
    calendarContainer: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 30,
    },
    pickerContainer: {
        flex: 1,
        height: 35,
        backgroundColor: 'white',
        borderColor: 'lightgrey',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    gridItemIcon: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
        borderRadius: 10,
        marginTop: 16,
    },
    gridItemText: {
        alignItems: 'center',
        color: '#666',
        fontSize: 12,
        marginTop: 8,
    },
    itembtnview: {
        alignItems: 'center',
        backgroundColor: '#fff',
        width: WINDOW_WIDTH / 4,
        height: WINDOW_WIDTH / 4,
    },
    row: {
        flexDirection: 'row',
        borderColor: '#e5e5e5',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    wenziView: {
        flexDirection: 'column',
        marginBottom: 10,
        flex: 1,
    },
    titleView: {
        marginLeft: 15,
        marginTop: 10,
    },
    title: {
        fontSize: 16,
        color: '#333',
    },
    styleVIew: {
        flexDirection: 'row',
        marginTop: 8,
    },
    styletitle: {
        fontSize: 12,
        color: '#999',
        marginLeft: 15,

    },
    right: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 60,
        marginLeft: 8
    },
    selectItem: {
        borderRightColor: '#bbb',
        borderRightWidth: StyleSheet.hairlineWidth,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: WINDOW_WIDTH / 4,
        paddingLeft: 2,
        paddingRight: 2,
        marginTop: 6,
        marginBottom: 6
    }
});
