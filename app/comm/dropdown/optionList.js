
import React from 'react';

import {
  Dimensions,
  StyleSheet,
  Component,
  VieweWithoutFeedback,
  Text
} from 'react-native';
import Overlay from './overlay';
import Items from './items';

const window = Dimensions.get('window');

class OptionList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,

      width: 0,
      height: 0,

      pageX: 0,
      pageY: 0,

      positionX: 0,
      positionY: 0,

      items: [],
      onSelect: () => { }
    };
  }

  _currentPosition(pageX, pageY) {
    const oldState = this.state;
    this.setState(Object.assign({}, ...oldState, { pageX, pageY }));
  }

  _show(items, positionX, positionY, width, height, onSelect) {
    positionX = positionX - this.state.pageX;
    positionY = positionY - this.state.pageY;
    const oldState = this.state;
    this.setState(Object.assign({}, ...oldState, {
      positionX,
      positionY,
      width,
      height,
      items,
      onSelect,
      show: true
    }));

  }

  _onOverlayPress() {
    const { onSelect } = this.state;
    onSelect(null, null);
    const oldState = this.state;
    this.setState(Object.assign({}, ...oldState, {
      show: false
    }));

  }

  _onItemPress(item, value) {
    const { onSelect } = this.state;
    onSelect(item, value);

    const oldState = this.state;
    this.setState(Object.assign({}, ...oldState, {
      show: false
    }));
  }

  render() {
    const {
      items,
      pageX,
      pageY,
      positionX,
      positionY,
      width,
      height,
      show
    } = this.state;

    return (
      <View>
        <Overlay
          pageX={pageX}
          pageY={pageY}
          show={show}
          onPress={this._onOverlayPress.bind(this)} />
        <Items
          items={items}
          positionX={positionX}
          positionY={positionY}
          width={width}
          height={height}
          show={show}
          onPress={this._onItemPress.bind(this)} />
      </View>
    );
  }
}

OptionList.propTypes = {

};

OptionList.defaultProps = {

};

export default OptionList;
