import React from 'react';

import {
  Dimensions,
  StyleSheet,
  Component,
  View,
  ScrollView,
  TouchableWithoutFeedback,
  Text
} from 'react-native';


const window = Dimensions.get('window');


class Items extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { items, positionX, positionY, show, onPress, width, height } = this.props;
    if (!show) {
      return null;
    }
    const renderedItems = React.Children.map(items, (item) => {
      return (
        <TouchableWithoutFeedback onPress={() => onPress(item.props.children, item.props.value)}>
          <View>
            {item}
          </View>
        </TouchableWithoutFeedback>
      );
    });

    return (
      <View style={[styles.container, { top: positionY, left: positionX }]}>
        <ScrollView
          style={{ width: width - 2, height: height * 3 }}
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
    height: 120,
    width: 198 //TODO: this needs to be dynamic
  },
  container: {
    position: 'absolute',
    borderColor: '#BDBDC1',
    borderWidth: 2 / window.scale,
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
