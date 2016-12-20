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
import Toolbar from '../../comm/Toolbar';
import { getPersonSendResumeInfoAction } from '../../actions/GetPersonSendResumeInfoAction';
import { getCompanyInviteInfoAction } from '../../actions/GetCompanyInviteInfoAction';

class MessageListPage extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const { dispatch, route, getPersonSendResumeInfo } = this.props;
        if (0 === route.type) {//简历状态通知
            //获取列表
            dispatch(getPersonSendResumeInfoAction('personal_id'));

        } else if (1 === route.type) {//企业邀请通知
            dispatch(getCompanyInviteInfoAction('personal_id'));

        } else if (2 === route.type) {//系统消息


        }
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
    render() {
        const { getPersonSendResumeInfo } = this.props;

        return (
            <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#ebedee' }}>
                {
                    (getPersonSendResumeInfo.result && getPersonSendResumeInfo.result['data'] && getPersonSendResumeInfo.result['data'].length != 0) ?
                        <ListView
                            enableEmptySections={true}
                            dataSource={homeCompanyList.listDataSource.cloneWithRows(getPersonSendResumeInfo.result['data'])}
                            renderRow={this.renderRowView}
                            />
                        :
                        <View style={{ alignItems: 'center', flex: 1, backgroundColor: '#fff' }}>
                            <View style={{ flex: 1 }} />
                            <Text style={styles.bgtext}>暂无数据</Text>
                            <View style={{ flex: 1 }} />
                        </View>
                }
                <View>
                    <Spinner visible={getPersonSendResumeInfo.loading} />
                </View>
            </View >
        );
    }
}
const styles = StyleSheet.create({

});

class MessageListContainer extends Component {

    render() {
        return (
            <MessageListPage {...this.props} />
        );
    }
}

function mapStateToProps(state) {
    const { getPersonSendResumeInfo } = state;
    return {
        getPersonSendResumeInfo,
    }
}

export default connect(mapStateToProps)(MessageListContainer);