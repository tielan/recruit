import React, { Component, } from 'react';
import {
    StyleSheet,
    TextInput,
    Text,
    Image,
    TouchableHighlight,
    View,
    ListView
} from 'react-native';

import { Iconfont, Toast, Spinner, LoginInfo, LineView } from 'react-native-go';

import { connect } from 'react-redux';
import NavigationBar from '../../comm/NavigationBar';
import { companyMessageListAction } from '../../actions/companyMessageListAction';
import ZhiWeiDetailContainer from '../ZhiWeiDetailContainer'

class CompanyMessageListPage extends React.Component {
    constructor(props) {
        super(props);
        this._renderRowView = this._renderRowView.bind(this);

    }
    componentDidMount() {
        const { dispatch, route, getPersonSendResumeInfo } = this.props;
        const userInfo = LoginInfo.getUserInfo();
        dispatch(companyMessageListAction(userInfo.personal_id));
    }
    _rowOnPress(rowData) {
        this.props.navigator.push({
            name: "ZhiWeiDetailContainer",
            component: ZhiWeiDetailContainer,
            company_id: rowData.company_id,
            post_id: rowData.job_id,
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
                    <View style={{ flexDirection: 'column', marginLeft: 16, marginBottom: 10, flex: 1, }} >
                        <View style={{ marginTop: 10 }}>
                            <Text style={{ fontSize: 16, color: '#000', alignSelf: 'flex-start' }}> {rowData.company_name}</Text>
                        </View>
                        <View style={{ marginTop: 10, marginLeft: 4 }}>
                            <Text style={{ fontSize: 12, color: '#666' }}>{rowData.status}</Text>
                        </View>
                    </View>
                    <View style={{ alignItems: 'center', width: 80, marginLeft: 8, marginRight: 16 }}>
                        <Text style={{ color: '#bbbbbb', marginTop: 10, fontSize: 12, }}>{Utils.dateDiff(rowData.check_time)}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );

    }
    render() {
        const { companyMessageList } = this.props;

        return (
            <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#fff' }}>
                {
                    (companyMessageList.listData._cachedRowCount > 0) ?
                        <ListView
                            enableEmptySections={true}
                            dataSource={companyMessageList.listData}
                            renderRow={this._renderRowView}
                            />
                        :
                        <View style={{ alignItems: 'center', flex: 1, backgroundColor: '#fff' }}>
                            <View style={{ flex: 1 }} />
                            <Text >暂无数据</Text>
                            <View style={{ flex: 1 }} />
                        </View>
                }
            </View >
        );
    }
}

class CompanyMessageListContainer extends Component {

    render() {
        return (
            <CompanyMessageListPage {...this.props} />
        );
    }
}

function mapStateToProps(state) {
    const { companyMessageList } = state;
    return {
        companyMessageList,
    }
}


export default connect(mapStateToProps)(CompanyMessageListContainer);