'use strict';

import React from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  Dimensions,
} from 'react-native';

import Colors from './style/Colors';
var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;

export default class FormItemsTextView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      row: this.props.row,
    };
  }

  render() {
    return (
      <View style={formComponentStyles.container}>
        <View style={formComponentStyles.titleContainer}>
          <Text style={formComponentStyles.title}>
            {this.state.row.title}
          </Text>
        </View>
        <View style={[formComponentStyles.contentContainer, { marginRight: 4, }]}>
          <Text style={{ textAlign: 'right', color: Colors.black, marginRight: 15 }}>
            {this.state.row.content}
          </Text>;
        </View>
      </View>
    );
  }
}

import formComponentStyles from './style/styles';
