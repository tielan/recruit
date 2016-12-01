import React, { Component, } from 'react';
import { connect } from 'react-redux';
import ZhiWeiListPage from '../pages/ZhiWeiListPage';

class ZhiWeiListContainer extends Component {

  render() {
    return (
      <ZhiWeiListPage {...this.props} />
    );
  }
}

function mapStateToProps(state) {
  const { login }  = state;
  return {
    login,
  }
}

export default connect(mapStateToProps)(ZhiWeiListContainer);