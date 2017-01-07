import React, { Component, } from 'react';
import { connect } from 'react-redux';
import {
	StyleSheet,
	View,
	Text,
	Image,
} from 'react-native';
import { gongShiShowAction } from '../actions/gongShiShowAction';
import { Iconfont, Toast, Spinner, LoginInfo, LineView } from 'react-native-go';

class GongShiShowPage extends Component {
	constructor(props) {
		super(props);

	}
	componentDidMount() {
		const { dispatch, route} = this.props;
		//获取列表
		dispatch(gongShiShowAction(route.company_id));
	}
	render() {
		const { gongShiShow } = this.props;
		const data = gongShiShow.data;
		return (
			<View style={styles.container}>
				<View style={{ padding: 16 }}>
					<View style={{flexDirection: 'row',alignItems: 'center', justifyContent: 'center',}}>
						<Text style={{ fontSize: 16, color: '#000', }}> {data.company_name}</Text>
					</View>
					<View style={{ flexDirection: 'row',marginTop:8 }}>
						<Text style={{ fontSize: 14, color: '#666',}}>地址：</Text>
						<Text style={{ color: '#999', fontSize: 14, flex: 1 }}>{data.address}</Text>
					</View>
				</View>
				<View style={{ height: StyleSheet.hairlineWidth, backgroundColor: '#d9d9d9' }} />
				<View style={{ height: 20, backgroundColor: '#f2f2f2' }} />
				<View style={{ height: StyleSheet.hairlineWidth, backgroundColor: '#d9d9d9' }} />
				<View style={{ paddingTop: 16, paddingLeft: 16, paddingRight: 16, flexDirection: 'column', flex: 1 }}>
					<Text style={{ fontSize: 16, color: '#000', height: 38 }}>公司介绍</Text>
					<View style={{ height: StyleSheet.hairlineWidth, backgroundColor: '#d9d9d9' }} />
					<Text style={{ fontSize: 16, color: '#999', marginTop: 8 }}> {data.company_introduction}</Text>
				</View>

			</View>
		);
	}

}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
});
class GongShiShowContainer extends Component {

	render() {
		return (
			<GongShiShowPage {...this.props} />
		);
	}
}

function mapStateToProps(state) {
	const { gongShiShow } = state;
	return {
		gongShiShow,
	}
}

export default connect(mapStateToProps)(GongShiShowContainer);