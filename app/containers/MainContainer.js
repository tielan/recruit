'use strict';

import React, { Component, } from 'react';
import {connect} from 'react-redux';

import MainPage from '../pages/MainPage';

class MainContainer extends Component {
  render() {
    return (
      <MainPage {...this.props} />
    );
  }
}

function mapStateToProps(state) {
  const {login, tabOffice, userInfo, tabIndex} = state;
  return {
    login,
    tabOffice,
    userInfo,
    tabIndex,
  }

}

export default connect(mapStateToProps)(MainContainer);
