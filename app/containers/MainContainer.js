'use strict';

import React, { Component, } from 'react';
import {connect} from 'react-redux';

import {
	StyleSheet,
	View,
	Text,
	Image,
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import HomeTabBar from '../comm/HomeTabBar';
import HomeContainer from './HomeContainer';
import MessageContainer from './MessageContainer';
import PresonContainer from './PresonContainer';

class MainPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tabNames: ['首页', '消息', '个人',],
			tabIconNames: ['e6a2', 'e67f', 'e659'],
		};
	}
	
	render() {
		let tabNames = this.state.tabNames;
		let tabIconNames = this.state.tabIconNames;
		return (
			<ScrollableTabView
				renderTabBar={() => <HomeTabBar tabNames={tabNames} tabIconNames={tabIconNames} />}
				tabBarPosition='bottom'>
				<HomeContainer {...this.props} />
				<MessageContainer {...this.props} />
				<PresonContainer {...this.props} />
			</ScrollableTabView>
		);
	}
 
}
const styles = StyleSheet.create({
	iconStyle: {
		width: 26,
		height: 26,
	},
	textStyle: {
		color: '#666',
		marginBottom: 6,
	},
	selectedTextStyle: {
		color: '#42beff',
		marginBottom: 6,
	}
});
class MainContainer extends Component {
  render() {
    return (
      <MainPage {...this.props} />
    );
  }
}

function mapStateToProps(state) {
  const {login, tabOffice, userInfo, tabIndex} = state;
  return {
    login,
    tabOffice,
    userInfo,
    tabIndex,
  }

}

export default connect(mapStateToProps)(MainContainer);
