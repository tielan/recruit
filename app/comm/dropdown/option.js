import React from 'react';

import {
  StyleSheet,
  Component,
  View,
  Text
} from 'react-native';



class Option extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { style, styleText } = this.props;

    return (
      <View style={[styles.container, style]}>
        <Text style={[styles.styleText, styleText]} numberOfLines={1}>{this.props.children}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  styleText:{
      marginLeft:4,
  }
});
Option.propTypes = {
  children: React.PropTypes.string.isRequired
};
export default Option;
