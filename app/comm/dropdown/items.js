import React from 'react';

import {
  Dimensions,
  StyleSheet,
  Component,
  View,
  ScrollView,
  TouchableOpacity,
  Text
} from 'react-native';


const window = Dimensions.get('window');
const WINDOW_WIDTH = Dimensions.get('window').width;


class Items extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { items, positionX, positionY, show, onPress, width, height } = this.props;
    if (!show) {
      return null;
    }
    const renderedItems = React.Children.map(items, (item, index) => {
      return (
        <TouchableOpacity onPress={() => onPress(item.props.children, item.props.value)} key={index}>
          <View style={{
            borderBottomColor: '#bbb',
            borderBottomWidth: StyleSheet.hairlineWidth
          }}>
            {item}
          </View>
        </TouchableOpacity>
      );
    });

    return (
      <View style={[styles.container, { top: positionY+6, left: 0 }]}>
        <ScrollView
          style={{ width: WINDOW_WIDTH, height: height * 6 }}
          automaticallyAdjustContentInsets={false}
          bounces={false}>
          {renderedItems}
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  scrollView: {
    height: 160,
    width: 198 //TODO: this needs to be dynamic
  },
  container: {
    position: 'absolute',
    borderColor: '#BDBDC1',
    borderWidth: StyleSheet.hairlineWidth,
    borderTopColor: 'transparent',
  }
})

Items.propTypes = {
  positionX: React.PropTypes.number,
  positionY: React.PropTypes.number,
  show: React.PropTypes.bool,
  onPress: React.PropTypes.func
};

Items.defaultProps = {
  width: 0,
  height: 0,
  positionX: 0,
  positionY: 0,
  show: false,
  onPress: () => { }
};

export default Items;
