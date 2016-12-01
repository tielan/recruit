
import React from 'react';
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
import { Iconfont, LineView } from 'react-native-go';

import RefreshFooter from '../comm/RefreshFooter';
import Toolbar from '../comm/Toolbar';
import GridView from '../comm/GridView';
const WINDOW_WIDTH = Dimensions.get('window').width;
let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 != r2 });
let canLoadMore;

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        _data = [];

        this.onEndReached = this.onEndReached.bind(this);
        this._renderGridItem = this._renderGridItem.bind(this);
        this._renderRowView = this._renderRowView.bind(this);
        canLoadMore = false;
        this.state = {
            dataSource: ds.cloneWithRows(_data),
            isShowLoading: true,
            loadMore: false,
            headTabList: [{
                name: '全职',
                icon: 'e675',
                color: '#ffba00',
                size: 24
            }, {
                name: '兼职',
                icon: 'e681',
                color: '#83d130',
                size: 24
            }, {
                name: '实习',
                icon: 'e680',
                color: '#fe7442',
                size: 26
            }, {
                name: '企业',
                icon: 'e67d',
                color: '#15c6ed',
                size: 20
            },],
        };

    }
    _renderGridItem(item, index) {
        return (
            <TouchableHighlight underlayColor='#C8C7CC' onPress={() => this._onMenuClick(item)} key={index}>
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

    _renderRowView(rowData, sectionId, index) {
        if (!rowData) {
            return <View />;
        }
        return (
            <TouchableHighlight
                underlayColor='#c8c7cc'
                onPress={this._pressRow.bind(this, rowData)}
                key={rowData.url}>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <View style={{ flexDirection: 'row', flex: 1, marginTop: 8, marginBottom: 10 }}>
                            <Text style={styles.datetext}>{rowData.order_day}</Text>
                            <Text style={styles.timetext}>{rowData.datetime}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', flex: 1, marginBottom: 8, alignItems: 'center' }}>
                            <Text style={styles.persontext}>{rowData.userrealname}</Text>
                            <Text style={styles.sitetext}>{rowData.org_name}</Text>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        );

    }
    //加载更多
    onEndReached() {
        if (canLoadMore === true) {
            this.setState({
                loadMore: true,
            });
            canLoadMore = false;
            this._requestData(true);
        }
    }
    render() {
        const {headTabList} = this.state;
        return (
            <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#ebedee' }}>
                <Toolbar title='首页' />
                <View style={{ height: WINDOW_WIDTH / 4 }}>
                    <GridView
                        items={Array.from(headTabList)}
                        itemsPerRow={4}
                        renderItem={this._renderGridItem}
                        />
                </View>
                <View style={{ height: 8, backgroundColor: '#f2f2f2' }} />
                <LineView />
                <View style={{ height: 32, backgroundColor: '#fff', justifyContent: 'center', }}>
                    <Text style={{ color: '#051b28', marginLeft: 8 }}>热门推荐</Text>
                </View>
                <LineView />
                {
                    (_data.length != 0) ?
                        <ListView
                            enableEmptySections={true}
                            dataSource={this.state.dataSource}
                            renderRow={this.renderRowView}
                            onEndReached={this.onEndReached.bind(this)}
                            onEndReachedThreshold={38}
                            renderFooter={() => <View style={{ width: WINDOW_WIDTH, height: 44 }}><RefreshFooter loading={this.state.loadMore} /></View>}
                            />
                        :
                        <View style={{ alignItems: 'center', flex: 1, backgroundColor: '#fff' }}>
                            <View style={{ flex: 1 }} />
                            <Text style={styles.bgtext}>暂无数据</Text>
                            <View style={{ flex: 1 }} />
                        </View>
                }
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
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
});

export default HomePage;