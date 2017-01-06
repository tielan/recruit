import React, { Component, } from 'react';
import { connect } from 'react-redux';
import {
    StyleSheet,
    TextInput,
    Text,
    Image,
    TouchableHighlight,
    View
} from 'react-native';

import ScrollableTabView, { DefaultTabBar, } from 'react-native-scrollable-tab-view';

import MessageListContainer from './message/MessageListContainer';
import ResumeMessageListContainer from './message/ResumeMessageListContainer';
import CompanyMessageListContainer from './message/CompanyMessageListContainer';


import NavigationBar from '../comm/NavigationBar';

class MessagePage extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#ebedee' }}>
                <NavigationBar title='消息' leftButtonIcon={-1}/>
                <View style={{ flex: 1 }}>
                    <ScrollableTabView
                        tabBarUnderlineStyle={ {backgroundColor:'#61c4f7'}}
                        tabBarBackgroundColor='#FFFFFF'
                        tabBarActiveTextColor='#61c4f7'
                        tabBarInactiveTextColor='#000000'
                        renderTabBar={() => <DefaultTabBar />}>
                        <ResumeMessageListContainer {...this.props} tabLabel='简历状态通知'/>
                        <CompanyMessageListContainer {...this.props} tabLabel='企业邀请通知' />
                        <MessageListContainer {...this.props} tabLabel='系统消息' type={2}/>
                    </ScrollableTabView>
                </View>
            </View >
        );
    }
}
const styles = StyleSheet.create({

});

class MessageContainer extends Component {

  render() {
    return (
      <MessagePage {...this.props} />
    );
  }
}

function mapStateToProps(state) {
  const { getPersonSendResumeInfo,getCompanyInviteInfo }  = state;
  return {
    getPersonSendResumeInfo,getCompanyInviteInfo
  }
}

export default connect(mapStateToProps)(MessageContainer);