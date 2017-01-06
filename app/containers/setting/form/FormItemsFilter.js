'use strict';

import React from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  Dimensions,
} from 'react-native';

import FormItemsTextView from './FormItemsTextView';
import FormItemsTextInputView from './FormItemsTextInputView';
import FormItemsSpinnerView from './FormItemsSpinnerView';
import FormItemsDatePickerView from './FormItemsDatePickerView';
import FormItemsTextIdcard from './FormItemsTextIdcard';
import FormItemsTextEmail from './FormItemsTextEmail';
import FormItemsTextInt from './FormItemsTextInt';
import FormItemsTextFloat from './FormItemsTextFloat';
import FormItemsHideView from './FormItemsHideView';
import FormItemsTextareaView from './FormItemsTextareaView';

export default class FormItemsFilter extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
        row: this.props.row,
      };
  }

  renderFormItem() {
    let _props = this.props;
    let _row = this.state.row;
    //以下判断顺序不能动
    if (_row.hide) { //隐藏控件
      return(<FormItemsHideView row={_row} onUserInput={(key, value) => _props.onUserInput(key, value)}/>);
    }
    if (_row.readOnly === true) {//只读
      return(<FormItemsTextView userName={this.state.userName} row={_row}/>);
    }
    if(_row.type == 'textarea'){
      return(<FormItemsTextareaView row={_row} onUserInput={(key, value) => _props.onUserInput(key, value)}/>);
    }else if(_row.type === 'select'){
      return(<FormItemsSpinnerView row={_row} onUserInput={(key, value) => _props.onUserInput(key, value)} refs={_props.refs}/>);
    }else if(_row.type === 'text' && _row.detailType === 'text'){ //普通文本
      return(<FormItemsTextInputView row={_row} onUserInput={(key, value) => _props.onUserInput(key, value)}/>);
    }else if(_row.type === 'text' && _row.detailType === 'email'){ //邮箱地址
      return(<FormItemsTextEmail row={_row} onUserInput={(key, value) => _props.onUserInput(key, value)}/>);
    }else if(_row.type === 'text' && _row.detailType === 'int'){ //整数
      return(<FormItemsTextInt row={_row} onUserInput={(key, value) => _props.onUserInput(key, value)}/>);
    }else if(_row.type === 'text' && _row.detailType === 'float'){ //小数
      return(<FormItemsTextFloat row={_row} onUserInput={(key, value) => _props.onUserInput(key, value)}/>);
    }else if(_row.type === 'text' && _row.detailType === 'idcard'){ //身份证号码
      return(<FormItemsTextIdcard row={_row} onUserInput={(key, value) => _props.onUserInput(key, value)}/>);
    }else if(_row.type === 'text' && _row.detailType === 'standardDate'){ //日期(yyyy-MM-dd)
      return(<FormItemsDatePickerView row={_row} onUserInput={(key, value) => _props.onUserInput(key, value)} refs={_props.refs} />);
    }else{
      return(<View/>)
    }
  }

  render() {
    return(
      <View style={styles.container}>
        {this.renderFormItem()}
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});
