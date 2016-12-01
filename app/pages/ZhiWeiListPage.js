
import React from 'react';
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

import RefreshFooter from '../comm/RefreshFooter';
import Toolbar from '../comm/Toolbar';
import GridView from '../comm/GridView';
const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;
let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 != r2 });
let canLoadMore;


export default class ZhiWeiListPage extends React.Component {
    constructor(props) {
        super(props);
        _data = [];

        this.onEndReached = this.onEndReached.bind(this);
        this._renderRowView = this._renderRowView.bind(this);
        this.renderPick = this.renderPick.bind(this);
        this.renderSelect = this.renderSelect.bind(this);
        this.renderModel = this.renderModel.bind(this);
        this.cancel = this.cancel.bind(this);
        this.passSelectDate = this.passSelectDate.bind(this);
        canLoadMore = false;
        this.state = {
            dataSource: ds.cloneWithRows(_data),
            isShowLoading: true,
            loadMore: false,
            showModel: false,
        };

    }
    cancel() {
        this.setState({ showModel: false });
    }

    passSelectDate() {
        this.setState({ showModel: false });
    }

    renderSelect(name) {
        if (Platform.OS == 'ios') {
            return (
                <View>
                    <TouchableOpacity onPress={() => { this.setState({ showModel: true }) } } style={{ alignItems: 'center', marginTop: 10 }}>
                        <Text style={{ textAlign: 'center' }}>
                            {name}
                        </Text>
                    </TouchableOpacity>
                </View>)
        } else {
            return (this.renderPick())
        }
    }
    renderPick() {
        let searchArr = [];
        let itemAll = { id: '', name: '全部' };
        searchArr.push(itemAll);
        return (
            <Picker
                style={styles.picker}
                mode="dropdown"
                selectedValue='1'
                itemStyle={{ backgroundColor: '#fdfcf5', }}
                onValueChange={(id) => {
                    page = 1;
                    canLoadMore = false;
                    onEndReach = false;
                } }>
                {searchArr.map(function (row) {
                    return <Picker.Item label={row.name} value={row.id} />
                })}
            </Picker>
        )
    }
    renderModel() {
        return (
            <Modal visible={this.state.showModel} transparent={true}>
                <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', height: WINDOW_HEIGHT, width: WINDOW_WIDTH, }}>
                    <View style={styles.modelStyle}>
                        <View style={styles.calendarContainer}>
                            <Text style={styles.textStyle}>请选择类型</Text>
                            <View style={{ flex: 1, justifyContent: 'center', }}>
                                {this.renderPick()}
                            </View>
                            <View style={styles.calendar}>
                                <TouchableOpacity style={styles.button} onPress={this.passSelectDate.bind(this)} >
                                    <Text style={styles.buttonText}>取 消</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button} onPress={this.cancel.bind(this)}>
                                    <Text style={styles.buttonText}>确 定</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
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
        const {headTabList} = this.state;
        return (
            <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#ebedee' }}>
                <Toolbar title='职位列表' navigator={this.props.navigator} />
               
                <View style={{ height: 35, flexDirection: 'row', backgroundColor: '#fff', justifyContent: 'center', }}>
                    <View style={styles.pickerContainer}>
                        {this.renderSelect('地区')}
                    </View>
                    <View style={styles.pickerContainer}>
                        {this.renderSelect('行业')}
                    </View>
                    <View style={styles.pickerContainer}>
                        {this.renderSelect('岗位')}
                    </View>
                    <View style={styles.pickerContainer}>
                        {this.renderSelect('薪资')}
                    </View>
                </View>
                 <LineView width={1} />
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
                {this.renderModel()}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    modelStyle:{
    flexDirection: 'column',
    position: 'absolute',
    backgroundColor: '#fdfcf5',
    opacity: 0.98,
    borderRadius: 10,
    overflow: 'hidden',
    marginLeft:WINDOW_WIDTH/8,
    width: WINDOW_WIDTH- WINDOW_WIDTH/4,
    height: WINDOW_HEIGHT- WINDOW_HEIGHT/3,
    marginTop:WINDOW_HEIGHT/8,
  },
  picker: {
    flex: 1,
  },
  textStyle:{
    marginTop:5,
    fontSize:20,
    fontWeight:'500',
    textAlign: 'center',
    color:'#ff8c00'
  },
  calendar: {
    height:60,
    justifyContent: 'center',
    flexDirection:'row',
  },
  button: {
    justifyContent: 'center',
    borderRadius: 8,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    width:70,
    height:35,
  },
  buttonText: {
    alignSelf: 'center',
    fontSize: 18,
    color:'#ff8c00'
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
