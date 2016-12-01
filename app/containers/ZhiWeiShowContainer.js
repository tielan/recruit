import React, { Component, } from 'react';
import { connect } from 'react-redux';
import ZhiWeiShowPage from '../pages/ZhiWeiShowPage';

class ZhiWeiShowContainer extends Component {

  render() {
    return (
      <ZhiWeiShowPage {...this.props} />
    );
  }
}

function mapStateToProps(state) {
  const { login }  = state;
  return {
    login,
  }
}

export default connect(mapStateToProps)(ZhiWeiShowContainer);