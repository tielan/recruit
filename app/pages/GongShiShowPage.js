import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
} from 'react-native';



class GongShiShowPage extends Component {
	constructor(props) {
		super(props);
		
	}
	
	render() {
		return (
			<View style={styles.container}>
				<Text>公司详情</Text>
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
export default GongShiShowPage;