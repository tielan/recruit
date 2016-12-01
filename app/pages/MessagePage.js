
import React from 'react';
import {
    StyleSheet,
    TextInput,
    Text,
    Image,
    TouchableHighlight,
    View
} from 'react-native';

import ScrollableTabView, { DefaultTabBar, } from 'react-native-scrollable-tab-view';

import MessageListContainer from '../containers/MessageListContainer';
import Toolbar from '../comm/Toolbar';

class MessagePage extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#ebedee' }}>
                <Toolbar title='消息' />
                <View style={{ flex: 1 }}>
                    <ScrollableTabView
                        tabBarUnderlineStyle={ {backgroundColor:'#61c4f7'}}
                        tabBarBackgroundColor='#FFFFFF'
                        tabBarActiveTextColor='#61c4f7'
                        tabBarInactiveTextColor='#000000'
                        renderTabBar={() => <DefaultTabBar />}>
                        <MessageListContainer {...this.props} tabLabel='简历状态通知' />
                        <MessageListContainer {...this.props} tabLabel='企业邀请通知' />
                        <MessageListContainer {...this.props} tabLabel='系统消息' />
                    </ScrollableTabView>
                </View>
            </View >
        );
    }
}
const styles = StyleSheet.create({

});

export default MessagePage;