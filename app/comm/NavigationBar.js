'use strict';

import React, { PropTypes, } from 'react';
import {
	StyleSheet,
	View,
	Image,
	Text,
	TouchableOpacity,
	Dimensions,
	Platform
} from 'react-native';
const iconLeft = require('../imgs/icon_left.png');
const iconLeftIOS = require('../imgs/icon_left_ios.png');
import { naviGoBack } from '../utils/CommonUtils';

let width = Dimensions.get('window').width;

class NavigationBar extends React.Component {

	static propTypes = {
		title: PropTypes.string.isRequired,
		height: PropTypes.number,
		titleColor: PropTypes.string,
		backgroundColor: PropTypes.string,
		leftButtonTitle: PropTypes.string,
		leftButtonTitleColor: PropTypes.string,
		onLeftButtonPress: PropTypes.func,
		rightButtonTitle: PropTypes.string,
		rightButtonTitleColor: PropTypes.string,
		onRightButtonPress: PropTypes.func,
		navigator: PropTypes.object,

	};

	static defaultProps = {
		height: 48,
		titleColor: '#fff',
		backgroundColor: '#42beff',
		leftButtonTitle: null,
		leftButtonTitleColor: '#fff',
		rightButtonTitle: null,
		rightButtonTitleColor: '#fff',
		leftButtonIcon: iconLeft
	};

	_renderLeftIcon() {
		if (this.props.leftButtonIcon === -1) {
			return null;
		}
		if (this.props.leftButtonIcon) {
			return (
				<Image style={styles.leftButtonIcon} resizeMode={'contain'} source={this.props.leftButtonIcon} />
			);
		}
		return null;
	}

	_renderRightIcon() {
		if (this.props.rightButtonIcon) {
			return (
				<Image style={styles.rightButtonIcon} source={this.props.rightButtonIcon} />
			);
		}
		return null;
	}

	_onLeftButtonPressHandle(event) {
		let onPress = this.props.onLeftButtonPress;
		if (onPress) {
			typeof onPress === 'function' && onPress(event);
		} else {
			if (this.props.navigator) {
				naviGoBack(this.props.navigator);
			}
		}

	}

	_onRightButtonPressHandle(event) {
		const {timeConsuming} = this.props;
		let onPress = this.props.onRightButtonPress;
		typeof onPress === 'function' && timeConsuming.canClick && onPress(event);
	}

	render() {
		let iosTop = Platform.OS === 'ios' ? 20 : 0;
		let title_height = Platform.OS === 'ios' ? 44 : 48;
		let height = title_height + iosTop;

		return (
			<View style={[styles.container, {
				height: height,
				backgroundColor: this.props.backgroundColor,
			}]}>
				<View style={{
					height: title_height,
					backgroundColor: this.props.backgroundColor,
					marginTop: iosTop,
					flexDirection: 'row',
					width: width,
				}}>

					<TouchableOpacity onPress={this._onLeftButtonPressHandle.bind(this)}>
						<View style={styles.leftButton}>
							{this._renderLeftIcon()}
							<Text style={[styles.leftButtonTitle, { color: this.props.leftButtonTitleColor }]}>
								{this.props.leftButtonTitle}
							</Text>
						</View>
					</TouchableOpacity>

					<View style={styles.title}>
						<Text style={[styles.titleText, { color: this.props.titleColor }]} numberOfLines={1}>
							{this.props.title}
						</Text>
					</View>

					<TouchableOpacity onPress={this._onRightButtonPressHandle.bind(this)}>
						<View style={styles.rightButton}>
							{this._renderRightIcon()}
							<Text style={[styles.rightButtonTitle, { color: this.props.rightButtonTitleColor }]}>
								{this.props.rightButtonTitle}
							</Text>
						</View>
					</TouchableOpacity>

				</View>
			</View>
		);
	}
};



export default NavigationBar;

let styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		width: width,
		elevation: 5,
	},
	leftButton: {
		flex: 1,
		width: 60,
		flexDirection: 'row',
		alignItems: 'center',
	},
	leftButtonIcon: {
		width: 24,
		height: 24,
		marginLeft: 8,
		marginRight: 8,
	},
	leftButtonTitle: {
		fontSize: 15
	},
	title: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		overflow: 'hidden',
		marginLeft: 8,
	},
	titleText: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	rightButton: {
		flex: 1,
		width: 60,
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
		marginRight: 8,
	},
	rightButtonIcon: {
		width: 10,
		height: 15
	},
	rightButtonTitle: {
		fontSize: 17
	}
});
