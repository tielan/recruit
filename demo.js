
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
} from 'react-native';

import ModalDropdown from './app/comm/ModalDropdown';

const DEMO_OPTIONS_1 = ['option 1', 'option 2', 'option 3', 'option 4', 'option 5', 'option 6', 'option 7', 'option 8', 'option 9'];
const DEMO_OPTIONS_2 = ['option 1', 'option 2', 'option 3'];

class Demo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdown_4_options: null,
      dropdown_4_defaultValue: 'loading...',
      dropdown_6_icon_heart: true,
    };
  }

  render() {
    let dropdown_6_icon = require('./app/imgs/icon_left.png');
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.cell}>
            <ModalDropdown style={styles.dropdown_1}
              options={DEMO_OPTIONS_1}
              />
            <ModalDropdown 
            style={styles.dropdown_6}
            width={120}
              options={DEMO_OPTIONS_2}
              />
          </View>
        </View>
      </View>
    );
  }

  _dropdown_2_renderRow(rowData, rowID, highlighted) {
    let icon = highlighted ? require('./images/heart.png') : require('./images/flower.png');
    let evenRow = rowID % 2;
    return (
      <TouchableHighlight underlayColor='cornflowerblue'>
        <View style={[styles.dropdown_2_row, { backgroundColor: evenRow ? 'lemonchiffon' : 'white' }]}>
          <Image style={styles.dropdown_2_image}
            mode='stretch'
            source={icon}
            />
          <Text style={[styles.dropdown_2_row_text, highlighted && { color: 'mediumaquamarine' }]}>
            {rowData}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }

  _dropdown_2_renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
    if (rowID == DEMO_OPTIONS_1.length - 1) return;
    let key = `spr_${rowID}`;
    return (<View style={styles.dropdown_2_separator}
      key={key}
      />);
  }

  _dropdown_3_adjustFrame(style) {
    console.log(`frameStyle={width:${style.width}, height:${style.height}, top:${style.top}, left:${style.left}, right:${style.right}}`);
    style.top -= 15;
    style.left += 150;
    return style;
  }

  _dropdown_4_willShow() {
    setTimeout(() => this.setState({
      dropdown_4_options: DEMO_OPTIONS_1,
      dropdown_4_defaultValue: 'loaded',
    }), 2000);
  }

  _dropdown_4_willHide() {
    this.setState({
      dropdown_4_options: null,
      dropdown_4_defaultValue: 'loading',
    });
  }

  _dropdown_4_onSelect(idx, value) {
    // BUG: alert in a modal will auto dismiss and causes crash after reload and touch. @sohobloo 2016-12-1
    alert(`idx=${idx}, value='${value}'`);
  }

  _dropdown_5_show() {
    this._dropdown_5 && this._dropdown_5.show();
  }

  _dropdown_5_select(idx) {
    this._dropdown_5 && this._dropdown_5.select(idx);
  }

  _dropdown_5_willShow() {
    return false;
  }

  _dropdown_5_willHide() {
    let idx = this._dropdown_5_idx;
    this._dropdown_5_idx = undefined;
    return idx == 0;
  }

  _dropdown_5_onSelect(idx, value) {
    this._dropdown_5_idx = idx;
    if (this._dropdown_5_idx != 0) {
      return false;
    }
  }

  _dropdown_6_onSelect(idx, value) {
    this.setState({
      dropdown_6_icon_heart: !this.state.dropdown_6_icon_heart,
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  cell: {
    flex: 1,
    borderWidth: StyleSheet.hairlineWidth,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    height: 500,
    paddingVertical: 100,
    paddingLeft: 20,
  },
  textButton: {
    color: 'deepskyblue',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'deepskyblue',
    margin: 2,
  },

  dropdown_1: {
    flex: 1,
    top: 32,
    left: 8,
  },
  dropdown_2: {
    alignSelf: 'flex-end',
    width: 150,
    top: 32,
    right: 8,
    borderWidth: 0,
    borderRadius: 3,
    backgroundColor: 'cornflowerblue',
  },
  dropdown_2_text: {
    height: 40,
    lineHeight: 40,
    marginHorizontal: 6,
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  dropdown_2_dropdown: {
    width: 150,
    height: 300,
    borderColor: 'cornflowerblue',
    borderWidth: 2,
    borderRadius: 3,
  },
  dropdown_2_row: {
    flex: 1,
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
  },
  dropdown_2_image: {
    marginLeft: 4,
    width: 30,
    height: 30,
  },
  dropdown_2_row_text: {
    marginHorizontal: 4,
    fontSize: 16,
    color: 'navy',
    textAlignVertical: 'center',
  },
  dropdown_2_separator: {
    height: 1,
    backgroundColor: 'cornflowerblue',
  },
  dropdown_3: {
    width: 150,
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 1,
  },
  dropdown_4: {
    margin: 8,
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 1,
  },
  dropdown_4_dropdown: {
    width: 100,
  },
  dropdown_5: {
    margin: 8,
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 1,
  },
  dropdown_6: {
    flex: 1,
    left: 8,
  },
  dropdown_6_image: {
    width: 40,
    height: 40,
  },
});

export default Demo;
