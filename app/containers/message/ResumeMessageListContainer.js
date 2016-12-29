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

import { Iconfont, Toast, Spinner, LoginInfo, LineView,Utils } from 'react-native-go';

import { connect } from 'react-redux';
import NavigationBar from '../../comm/NavigationBar';
import { resumeMessageListAction } from '../../actions/resumeMessageListAction';

class ResumeMessageListPage extends React.Component {
    constructor(props) {
        super(props);
        this._renderRowView = this._renderRowView.bind(this);
    }
    componentDidMount() {
        const { dispatch, route } = this.props;
        const userInfo = LoginInfo.getUserInfo();
        dispatch(resumeMessageListAction(userInfo.personal_id));
    }
    _rowOnPress(rowData) {

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
                            <Text style={{ fontSize: 16, color: '#000' }}> {rowData.company_name}</Text>
                        </View>
                        <View style={{ marginLeft: 20, marginTop: 10,}}>
                            <Text style={{ fontSize: 12, color: '#666' }}>{rowData.status}</Text>
                        </View>
                    </View>
                    <View style={{ alignItems: 'center', width: 80, marginLeft: 8,marginRight:16 }}>
                        <Text style={{ color: '#bbbbbb', marginTop: 10, fontSize: 12, }}>{Utils.dateDiff(rowData.check_time)}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );

    }
    render() {
        const { resumeMessageList } = this.props;
        return (
            <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#fff' }}>
                {
                    (resumeMessageList.listData._cachedRowCount > 0) ?
                        <ListView
                            enableEmptySections={true}
                            dataSource={resumeMessageList.listData}
                            renderRow={this._renderRowView}
                            />
                        :
                        <View style={{ alignItems: 'center', flex: 1, backgroundColor: '#fff' }}>
                            <View style={{ flex: 1 }} />
                            <Text style={styles.bgtext}>暂无数据</Text>
                            <View style={{ flex: 1 }} />
                        </View>
                }
            </View >
        );
    }
}
const styles = StyleSheet.create({

});

class ResumeMessageListContainer extends Component {

    render() {
        return (
            <ResumeMessageListPage {...this.props} />
        );
    }
}

function mapStateToProps(state) {
    const { resumeMessageList } = state;
    return {
        resumeMessageList,
    }
}

export default connect(mapStateToProps)(ResumeMessageListContainer);