import React, { Component, } from 'react';
import { connect } from 'react-redux';
import {
	StyleSheet,
	View,
	Text,
	Image,
	TouchableWithoutFeedback,
	TouchableOpacity,
	Platform
} from 'react-native';
const iconLeftIOS = require('../imgs/icon_left.png');
import ImageButton from '../comm/ImageButton';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import GongShiShowContainer from '../containers/GongShiShowContainer';
import ZhiWeiShowContainer from '../containers/ZhiWeiShowContainer';

class ZhiWeiDetailPage extends Component {
	constructor(props) {
		super(props);
		this.backClick = this.backClick.bind(this);
		this.renderTabBar = this.renderTabBar.bind(this);
	}
	backClick() {
		this.props.navigator.pop();
	}
	renderTabBar(tab) {
		let color0 = tab.activeTab == 0 ? "#fff" : "#42beff";
		let color1 = tab.activeTab == 1 ? "#fff" : "#42beff"; // 判断i是否是当前选中的tab，设置不同的颜色
		return (
			<View style={{
				height: 48, backgroundColor: '#42beff', flexDirection: 'row', justifyContent: 'center',
				alignItems: 'center', elevation: 5,
			}}>
				<View style={{ width: 48 }}>
					<TouchableOpacity onPress={this.backClick}>
						<View style={{ justifyContent: 'center', alignItems: 'center' }}>
							<Image style={styles.leftIOS} source={iconLeftIOS} />
						</View>
					</TouchableOpacity>
				</View>
				<View style={{ flex: 1 }} />
				<View style={styles.tabs}>
					<TouchableWithoutFeedback onPress={() => tab.goToPage(0)} style={styles.tab}>
						<View style={[styles.tabItem0, { backgroundColor: color0 }]} >
							<Text style={{ color: color1 }}>
								职位详情
							</Text>
						</View>
					</TouchableWithoutFeedback>
					<TouchableWithoutFeedback onPress={() => tab.goToPage(1)} style={styles.tab}>
						<View style={[styles.tabItem1, { backgroundColor: color1 }]} >
							<Text style={{ color: color0 }}>
								公司信息
							</Text>
						</View>
					</TouchableWithoutFeedback>
				</View>
				<View style={{ flex: 1 }} />
				<View style={{ width: 48 }} />
			</View>
		);

	}

	render() {
		let iosTop = Platform.OS === 'ios' ? 20 : 0;

		return (
			<View style={{ flex: 1 }}>
				<View style={{ height: iosTop, backgroundColor: '#42beff' }} />
				<ScrollableTabView renderTabBar={this.renderTabBar} >
					<ZhiWeiShowContainer {...this.props} />
					<GongShiShowContainer {...this.props} />
				</ScrollableTabView>

			</View>
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
	}, tabs: {
		justifyContent: 'center',
		alignItems: 'center',
		height: 32,
		width: 180,
		flexDirection: 'row',
	},
	tab: {
		height: 30,
		width: 90,
		justifyContent: 'center',
		alignItems: 'center',
	},
	tabItem0: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		width: 90,
		height: 30,
		borderColor: '#fff',
		borderWidth: StyleSheet.hairlineWidth,
		borderTopLeftRadius: 10,
		borderBottomLeftRadius: 10,

	},
	tabItem1: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		width: 90,
		height: 30,
		borderColor: '#fff',
		borderWidth: StyleSheet.hairlineWidth,
		borderTopRightRadius: 10,
		borderBottomRightRadius: 10,
	},
	leftIOS: {
		width: 24,
		height: 24,
		marginLeft: 8,
		marginRight: 8,
	},
});
class ZhiWeiDetailContainer extends Component {

	render() {
		return (
			<ZhiWeiDetailPage {...this.props} />
		);
	}
}

function mapStateToProps(state) {
	const { login } = state;
	return {
		login,
	}
}

export default connect(mapStateToProps)(ZhiWeiDetailContainer);