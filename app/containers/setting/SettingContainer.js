
import React, { Component, } from 'react';
import { connect } from 'react-redux';
import SettingPage from '../../pages/setting/SettingPage';

class SettingContainer extends Component {

  render() {
    return (
      <SettingPage {...this.props} />
    );
  }
}

function mapStateToProps(state) {
  const { login }  = state;
  return {
    login,
  }
}

export default connect(mapStateToProps)(SettingContainer);
