
import React, { Component, } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TextInput,
    TouchableHighlight,
    Alert,
    TouchableWithoutFeedback,
    Dimensions,
    ImageButton
} from 'react-native';

import { connect } from 'react-redux';

import { Iconfont, LineView } from 'react-native-go';
import Spinner from '../../comm/Spinner';
import Toolbar from '../../comm/Toolbar';

class MyCVPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<View style={styles.container} >
            <Toolbar title='编辑页面' navigator={this.props.navigator} />
            <View style={{ flex: 1, backgroundColor: '#F2F2F2' }}>
              
            </View >
        </View >);
    }

}

var styles = StyleSheet.create({
    container: {
        flex: 1
    },
   
});
class EditViewContainer extends Component {

  render() {
    return (
      <EditViewPage {...this.props} />
    );
  }
}

function mapStateToProps(state) {
  const { login }  = state;
  return {
    login,
  }
}

export default connect(mapStateToProps)(EditViewContainer);
