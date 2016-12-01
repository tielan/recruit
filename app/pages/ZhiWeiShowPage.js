import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
} from 'react-native';



class ZhiWeiShowPage extends Component {
	constructor(props) {
		super(props);
		
	}
	
	render() {
		return (
			<View style={styles.container}>
				<Text>职位详情</Text>
			</View>
		);
	}
 
}
const styles = StyleSheet.create({
	 container: {
        flex: 1,
        backgroundColor: '#ebedee',
    },
});
export default ZhiWeiShowPage;