import React from 'react';

import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';
import { Iconfont, LineView, LoginInfo, Toast } from 'react-native-go';

import Option from './option';

const window = Dimensions.get('window');

const SELECT = 'SELECT';

class Select extends React.Component {
  constructor(props) {
    super(props);

    this.pageX = 0;
    this.pageY = 0;

    let defaultValue = props.defaultValue;

    if (!defaultValue) {
      if (Array.isArray(props.children)) {
        defaultValue = props.children[0].props.children;
      } else {
        defaultValue = props.children.props.children;
      }
    }

    this.state = {
      value: defaultValue
    }
  }

  reset() {
    const { defaultValue } = this.props;
    this.setState({ value: defaultValue });
  }

  _currentPosition(pageX, pageY) {
    this.pageX = pageX;
    this.pageY = pageY + this.props.height;
  }

  _onPress() {
    const { optionListRef, children, onSelect, width, height } = this.props;

    if (!children.length) {
      return false;
    }
    debugger;
    optionListRef()._show(children, this.pageX, this.pageY, width, height, (item, value) => {
      if (item) {
        onSelect(item,value);
        this.setState({
          value: item
        });
      }
    });
  }

  render() {
    const { width, height, children, defaultValue, style, styleOption, styleText } = this.props;
    const dimensions = { width, height };
    return (
      <TouchableOpacity onPress={this._onPress.bind(this)}>
        <View ref={SELECT} style={[styles.container, dimensions, style]}>
          <View style={{ flex: 1 }} />
          <Option style={styleOption} styleText={styleText}>{this.state.value}</Option>
          <View style={{ flex: 1 }} />
          <View>
            <Iconfont fontFamily={'OAIndexIcon'}
              icon='e654' // 图标
              iconColor='#a3a3a3'
              iconSize={14}
              />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    borderRightColor: '#bbb',
    borderRightWidth: StyleSheet.hairlineWidth,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft:2,
    paddingRight:2,
    marginTop:6,
    marginBottom:6
  }
});
Select.propTypes = {
  width: React.PropTypes.number,
  height: React.PropTypes.number,
  optionListRef: React.PropTypes.func.isRequired,
  onSelect: React.PropTypes.func
};

Select.defaultProps = {
  width: 200,
  height: 28,
  onSelect: () => { }
};

export default Select;
