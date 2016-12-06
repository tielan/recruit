import React, { Component, } from 'react';
import { connect } from 'react-redux';
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
    Modal,
} from 'react-native';
import { Iconfont, LineView } from 'react-native-go';
import ModalDropdown from '../comm/ModalDropdown'
import RefreshFooter from '../comm/RefreshFooter';
import Toolbar from '../comm/Toolbar';
import GridView from '../comm/GridView';
import * as Type_Dict from '../constants/Type_Dict';
import { getCompanyByParamAction } from '../actions/GetCompanyByParamAction';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 != r2 });
let canLoadMore;

class ZhiWeiListPage extends React.Component {
    constructor(props) {
        super(props);
        _data = [];

        this.onEndReached = this.onEndReached.bind(this);
        this._renderRowView = this._renderRowView.bind(this);
        this.renderSelect = this.renderSelect.bind(this);
        canLoadMore = false;
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            loadMore: false,
        };

    }
    componentDidMount() {
        const { dispatch, router, getCompanyByParam } = this.props;
        //获取列表
        dispatch(getCompanyByParamAction(router.work_type,
            getCompanyByParam.addr_area,
            getCompanyByParam.industry,
            getCompanyByParam.post_name,
            getCompanyByParam.salary_type));
    }

    renderSelect(typeDict,type) {
        let options = [];
        typeDict.map((item) => {
            options.push(item.name);
        });
        let values = [];
        typeDict.map((item) => {
            values.push(item.id);
        });
        const { dispatch,getCompanyByParam } = this.props;
        return (
            <ModalDropdown
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    flex: 1
                }}
                options={options}
                defaultValue={options[0]}
                onSelect={(id, values) => {
                    getCompanyByParam[type] = values[id];
                    //根据类型 获取列表
                    dispatch(getCompanyByParamAction(router.work_type,
                        getCompanyByParam.addr_area,
                        getCompanyByParam.industry,
                        getCompanyByParam.post_name,
                        getCompanyByParam.salary_type));
                    canLoadMore = false;
                    onEndReach = false;
                } }>
            </ModalDropdown>
        )
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
        const { getCompanyByParam } = this.state;
        return (
            <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#ebedee' }}>
                <Toolbar title='职位列表' navigator={this.props.navigator} />

                <View style={{ height: 40, flexDirection: 'row', backgroundColor: '#fff', justifyContent: 'center', }}>
                    <View style={styles.pickerContainer}>
                        {this.renderSelect(Type_Dict.addr_area,'addr_area')}

                    </View>
                    <View style={styles.pickerContainer}>
                        {this.renderSelect(Type_Dict.industry,'industry')}
                    </View>
                    <View style={styles.pickerContainer}>
                        {this.renderSelect(Type_Dict.post,'post')}
                    </View>
                    <View style={styles.pickerContainer}>
                        {this.renderSelect(Type_Dict.salary_area,'salary_area')}
                    </View>
                </View>
                <LineView />
                <View style={{ flex: 1 }}>
                    {
                        (getCompanyByParam.data.length != 0) ?
                            <ListView
                                enableEmptySections={true}
                                dataSource={this.state.dataSource.cloneWithRows(getCompanyByParam.data)}
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
                    <View>
                        <Spinner visible={homeCompanyList.loading} />
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
        elevation: 2,
        borderRadius: 2,
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
});

class ZhiWeiListContainer extends Component {

    render() {
        return (
            <ZhiWeiListPage {...this.props} />
        );
    }
}

function mapStateToProps(state) {
    const { getCompanyByParam } = state;
    return {
        getCompanyByParam,
    }
}

export default connect(mapStateToProps)(ZhiWeiListContainer);