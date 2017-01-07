import React, { Component, } from 'react';
import { connect } from 'react-redux';
import {
	StyleSheet,
	View,
	Text,
	Image,
	TouchableHighlight,
	Alert
} from 'react-native';
import { zhiWeiShowAction } from '../actions/zhiWeiShowAction';
import { sendResumeAction } from '../actions/SendResumeAction';
import { collectionPostAction } from '../actions/CollectionPostAction';
import { Iconfont, Toast, Spinner, LoginInfo, LineView } from 'react-native-go';

class ZhiWeiShowPage extends Component {
	constructor(props) {
		super(props);

	}
	componentDidMount() {
		const { dispatch, route} = this.props;
		//获取列表
		dispatch(zhiWeiShowAction(route.post_id));
	}

	componentWillReceiveProps(nextProps) {
		const { dispatch, sendResume,collectionPost } = nextProps;
		if (sendResume.isFetched &&(sendResume.result || sendResume.errMsg)) {
			setTimeout(() => {
				if (sendResume.errMsg) {
					Toast.show(sendResume.errMsg);
					return;
				}
				if (sendResume.result) {
					if (sendResume.result.result === '1') {
						Toast.show('投递成功');
						return;
					} else {
						Toast.show((sendResume.result.msg) ? sendResume.result.msg : '网络请求失败，请稍后再试');
						return;
					}
				} 
				sendResume.result = undefined;
				sendResume.errMsg = undefined;
			}, 200);
		}

		if (collectionPost.isFetched &&(collectionPost.result || collectionPost.errMsg)) {
			setTimeout(() => {
				if (collectionPost.errMsg) {
					Toast.show(collectionPost.errMsg);
					return;
				}
				if (collectionPost.result) {
					if (collectionPost.result.result === '1') {
						Toast.show('操作成功');
						return;
					} else {
						Toast.show((collectionPost.result.msg) ? collectionPost.result.msg : '网络请求失败，请稍后再试');
						return;
					}
				} 
				collectionPost.result = undefined;
				collectionPost.errMsg = undefined;
			}, 200);
		}
	}

	render() {
		const { zhiWeiShow } = this.props;
		const data = zhiWeiShow.data;
		return (
			<View style={styles.container}>
				<View style={{ paddingTop: 16, paddingLeft: 16, paddingRight: 16 }}>
					<View style={{ flexDirection: 'row', }}>
						<Text style={{ fontSize: 16, color: '#000', flex: 1 }}> {data.post_name}</Text>
						<Text style={{ color: 'red', fontSize: 16, }}>{data.salary_area}</Text>
					</View>
					<View style={{ flexDirection: 'row', marginTop: 8, }}>
						<Text style={{ fontSize: 14, color: '#666', flex: 1 }}>{data.company_name}</Text>
						<Text style={{ color: '#bbbbbb', fontSize: 14, }}>{data.time}</Text>
					</View>
					<View style={{ flexDirection: 'row', marginTop: 8, height: 38 }}>
						<View style={{ alignSelf: 'flex-start' }}>
							<Iconfont fontFamily={'OAIndexIcon'}
								icon={'e679'} // 图标
								iconColor='#52c4ff'
								labelColor='#bbb'
								label={data.addr_area}
								iconSize={16}
								/>
						</View>
						<View style={{ alignSelf: 'flex-start', marginLeft: 12 }}>
							<Iconfont fontFamily={'OAIndexIcon'}
								icon={'e683'} // 图标
								iconColor='#52c4ff'
								labelColor='#bbb'
								label={data.education_area}
								iconSize={16}
								/>
						</View>
						<View style={{ alignSelf: 'flex-start', marginLeft: 12 }}>
							<Iconfont fontFamily={'OAIndexIcon'}
								icon={'e683'} // 图标
								iconColor='#52c4ff'
								labelColor='#bbb'
								label={data.post_type}
								iconSize={16}
								/>
						</View>
					</View>
				</View>
				<View style={{ height: StyleSheet.hairlineWidth, backgroundColor: '#d9d9d9' }} />
				<View style={{ height: 20, backgroundColor: '#f2f2f2' }} />
				<View style={{ height: StyleSheet.hairlineWidth, backgroundColor: '#d9d9d9' }} />
				<View style={{ paddingTop: 16, paddingLeft: 16, paddingRight: 16, flexDirection: 'column', flex: 1 }}>
					<Text style={{ fontSize: 16, color: '#000', height: 38 }}>职位详情</Text>
					<View style={{ height: StyleSheet.hairlineWidth, backgroundColor: '#d9d9d9' }} />
					<Text style={{ fontSize: 16, color: '#999', marginTop: 8 }}> {data.post_introduction}</Text>
				</View>
				<View style={{ flexDirection: 'row', borderTopColor: '#d9d9d9', borderTopWidth: StyleSheet.hairlineWith, height: 56, margin: 8 }}>
					<TouchableHighlight
						underlayColor='#ffaa50'
						style={{ backgroundColor: '#ffaa50', flex: 1, height: 44, alignItems: 'center', justifyContent: 'center', borderRadius: 6, }}
						onPress={this.onSendResumeAction.bind(this)}
						>
						<Text style={{ fontSize: 16, color: '#fff', alignSelf: 'center' }}>投递简历</Text>
					</TouchableHighlight>
					<View style={{ width: 12 }} />
					<TouchableHighlight
						underlayColor='#fff'
						onPress={this.onShouChang.bind(this)}
						>
						<View style={{ backgroundColor: '#42beff', width: 50, height: 44, borderRadius: 6, }}>
							<Iconfont fontFamily={'OAIndexIcon'}
								icon={'e67b'} // 图标
								iconColor={data.collection_status === '1' ? 'blue' : '#fff'}
								iconSize={16}
								/>
						</View>
					</TouchableHighlight>
				</View>
			</View >
		);
	}
	onSendResumeAction() {
		const { dispatch, route} = this.props;
		Alert.alert('提示', '确定投递?', [
			{
				text: '取消', onPress: () => {

				}
			},
			{
				text: '确定', onPress: () => {
					const userInfo = LoginInfo.getUserInfo();
					dispatch(sendResumeAction(userInfo.personal_id, route.company_id, route.post_id));
				}
			}
		])
	}
	onShouChang() {
		const { dispatch, route} = this.props;
		const userInfo = LoginInfo.getUserInfo();
		dispatch(collectionPostAction(userInfo.personal_id, route.company_id, route.post_id));

	}

}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
});

class ZhiWeiShowContainer extends Component {
	render() {
		return (
			<ZhiWeiShowPage {...this.props} />
		);
	}
}

function mapStateToProps(state) {
	const { zhiWeiShow, sendResume, collectionPost } = state;
	return {
		zhiWeiShow, sendResume, collectionPost
	}
}

export default connect(mapStateToProps)(ZhiWeiShowContainer);