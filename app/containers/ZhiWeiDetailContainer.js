import React, { Component, } from 'react';
import { connect } from 'react-redux';
import ZhiWeiDetailPage from '../pages/ZhiWeiDetailPage';

class ZhiWeiDetailContainer extends Component {

  render() {
    return (
      <ZhiWeiDetailPage {...this.props} />
    );
  }
}

function mapStateToProps(state) {
  const { login }  = state;
  return {
    login,
  }
}

export default connect(mapStateToProps)(ZhiWeiDetailContainer);