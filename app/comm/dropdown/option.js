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
        <Text style={styleText}>{this.props.children}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 10
  }
});
Option.propTypes = {
  children: React.PropTypes.string.isRequired
};
export default Option;
