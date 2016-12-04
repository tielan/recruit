import React, { Component, } from 'react';
import { connect } from 'react-redux';
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
class ZhiWeiShowContainer extends Component {

  render() {
    return (
      <ZhiWeiShowPage {...this.props} />
    );
  }
}

function mapStateToProps(state) {
  const { login }  = state;
  return {
    login,
  }
}

export default connect(mapStateToProps)(ZhiWeiShowContainer);