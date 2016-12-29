import React, { Component, } from 'react';
import {
    StyleSheet,
    TextInput,
    Text,
    Image,
    TouchableHighlight,
    View,
    Dimensions,
    ListView
} from 'react-native';
import { Iconfont, Toast, Spinner, LoginInfo, LineView } from 'react-native-go';
import { getHotCompanyByAction } from '../actions/GetCompanyByParamAction';
import { connect } from 'react-redux';

import RefreshFooter from '../comm/RefreshFooter';
import NavigationBar from '../comm/NavigationBar';
import GridView from '../comm/GridView';

import ZhiWeiListContainer from './ZhiWeiListContainer';
import ZhiWeiDetailContainer from './ZhiWeiDetailContainer'



const WINDOW_WIDTH = Dimensions.get('window').width;

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.onEndReached = this.onEndReached.bind(this);
        this._renderGridItem = this._renderGridItem.bind(this);
        this._renderRowView = this._renderRowView.bind(this);
        this._onMenuClick = this._onMenuClick.bind(this);
        this.renderContent = this.renderContent.bind(this);
        this._rowOnPress = this._rowOnPress.bind(this);
    }
    componentDidMount() {
        const { dispatch } = this.props;
        //获取列表
        dispatch(getHotCompanyByAction());
    }

    _onMenuClick(work_type) {
        this.props.navigator.push({
            name: "ZhiWeiListContainer",
            component: ZhiWeiListContainer,
            work_type: work_type,
        });
    }
    _renderGridItem(item, index) {
        return (
            <TouchableHighlight underlayColor='#C8C7CC' onPress={() => this._onMenuClick(item.work_type)} key={item.name}>
                <View style={styles.itembtnview}>
                    <View style={[styles.gridItemIcon, { backgroundColor: item.color }]}>
                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <Iconfont fontFamily={'OAIndexIcon'}
                                icon={item.icon} // 图标
                                iconColor='#fff'
                                iconSize={item.size}
                                />
                        </View>
                    </View>
                    <Text style={styles.gridItemText}>{item.name}</Text>
                </View>
            </TouchableHighlight>
        );
    }
    _rowOnPress(rowData) {
        this.props.navigator.push({
            name: "ZhiWeiDetailContainer",
            component: ZhiWeiDetailContainer,
            company_id:rowData.company_id,
            post_id:rowData.post_id,
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
                            <View style={{ alignSelf: 'flex-start' ,marginLeft:16}}>
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
                        <Text style={{ color: '#bbbbbb',marginTop: 10 ,fontSize: 14,}}>{rowData.time}</Text>
                        <Text style={{ color: 'red',marginTop: 10 ,fontSize: 16,}}>{rowData.salary_area}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );

    }
    //加载更多
    onEndReached() {
        const { dispatch, homeCompanyList } = this.props;
        if (homeCompanyList.canLoadMore === true) {
            //获取列表
            dispatch(getHotCompanyByAction(homeCompanyList.listData._cachedRowCount, 10));
            homeCompanyList.canLoadMore = false;
        }
    }
    renderContent() {
        const { homeCompanyList } = this.props;
        if (homeCompanyList.listData._cachedRowCount > 0) {
            return (
                <ListView
                    enableEmptySections={true}
                    dataSource={homeCompanyList.listData}
                    renderRow={this._renderRowView}
                    onEndReached={this.onEndReached}
                    onEndReachedThreshold={38}
                    renderFooter={() =>
                        <View style={{ width: WINDOW_WIDTH, height: 44 }}>
                            <RefreshFooter loading={homeCompanyList.loadMore} />
                        </View>}
                    />
            );
        } else {
            return (<View style={{ alignItems: 'center', flex: 1, backgroundColor: '#fff' }}>
                <View style={{ flex: 1 }} />
                <Text >暂无数据</Text>
                <View style={{ flex: 1 }} />
            </View>);
        }
    }

    render() {
        const { homeCompanyList } = this.props;
        return (
            <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#ebedee' }}>
                <NavigationBar title='首页' leftButtonIcon={-1}/>
                <View style={{ height: WINDOW_WIDTH / 4 }}>
                    <GridView
                        items={Array.from(homeCompanyList.headTabList)}
                        itemsPerRow={3}
                        renderItem={this._renderGridItem}
                        />
                </View>
                <View style={{ height: 8, backgroundColor: '#f2f2f2' }} />
                <LineView />
                <View style={{ height: 32, backgroundColor: '#fff', justifyContent: 'center', }}>
                    <Text style={{ color: '#051b28', marginLeft: 8 }}>热门推荐</Text>
                </View>
                <LineView />
                <View style={{ flex: 1 }}>
                    {
                        this.renderContent()
                    }
                </View>
                <View>
                    <Spinner visible={homeCompanyList.loading} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        color: '#333',
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
        width: WINDOW_WIDTH / 3,
        height: WINDOW_WIDTH / 4,
    },
});

class HomeContainer extends Component {

    render() {
        return (
            <HomePage {...this.props} />
        );
    }
}

function mapStateToProps(state) {
    const { homeCompanyList } = state;
    return {
        homeCompanyList,
    }
}

export default connect(mapStateToProps)(HomeContainer);