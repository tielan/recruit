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

import {
    Select,
    Option,
    OptionList,
    updatePosition
} from '../comm/dropdown';

import { connect } from 'react-redux';
import { Iconfont, LineView, Spinner } from 'react-native-go';
import RefreshFooter from '../comm/RefreshFooter';
import NavigationBar from '../comm/NavigationBar';


import { selectArr } from '../constants/Type_Dict';
import { getCompanyByParamAction, updateParam } from '../actions/zhiweilistAction';
import ZhiWeiDetailContainer from './ZhiWeiDetailContainer'

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

class ZhiWeiListPage extends React.Component {

    constructor(props) {
        super(props);
        this.onEndReached = this.onEndReached.bind(this);
        this._renderRowView = this._renderRowView.bind(this);
    }
    componentDidMount() {
        const { dispatch, route, zhiweilist } = this.props;
        //获取列表
        dispatch(getCompanyByParamAction(route.work_type));
        
        selectArr.map((item) => {
            updatePosition(this.refs[item.name]);
        });
        updatePosition(this.refs['OPTIONLIST']);
        
    }
    _getOptionList() {
        return this.refs['OPTIONLIST'];
    }

    componentWillReceiveProps(nextProps) {
        const { dispatch, route, zhiweilist } = nextProps;
        if (zhiweilist.typeChange) {
            //根据类型 获取列表
            dispatch(getCompanyByParamAction(route.work_type,
                zhiweilist.addr_area,
                zhiweilist.industry,
                zhiweilist.post_name,
                zhiweilist.salary_type));
        }
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
        return (<TouchableOpacity onPress={this.onRightItemPress.bind(this, item, defaultValue)} key={i}>
            <View style={{ height: 44 }}>
                <View style={styles.row}>
                    <View style={styles.text}>
                        <View style={{ flex: 1 }} />
                        <Text style={styles.titles}>{rowData.name}</Text>
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
        </TouchableOpacity>);

    }
    //加载更多
    onEndReached() {

    }

    render() {
        const { zhiweilist } = this.props;
        return (
            <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#ebedee', }}>
                <NavigationBar title='职位列表' navigator={this.props.navigator} />
                <View style={{ height: 40, flexDirection: 'row', backgroundColor: '#fff', justifyContent: 'center', }}>
                {
                    selectArr.map((item) => <Select
                            width={WINDOW_WIDTH / 4}
                            ref={item.name}
                            key={item.name}
                            optionListRef={this._getOptionList.bind(this)}
                            defaultValue={item.value[0].name}
                            onSelect={(value) => {

                            } }>
                            {
                                item.value.map((oItem) => <Option key={oItem.id}>{oItem.name}</Option>)
                            }
                        </Select>)
                    }
                }
                </View>
                <LineView />
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
                <OptionList ref="OPTIONLIST" />
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
        borderBottomWidth: 1,
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
});
