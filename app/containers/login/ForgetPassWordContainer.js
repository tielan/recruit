
import React, { Component, } from 'react';
import { connect } from 'react-redux';
import ForgetPassWordPage from '../../pages/login/ForgetPassWordPage';

class ForgetPassWordContainer extends Component {

  render() {
    return (
      <ForgetPassWordPage {...this.props} />
    );
  }
}

function mapStateToProps(state) {
  const { login }  = state;
  return {
    login,
  }
}

export default connect(mapStateToProps)(ForgetPassWordContainer);
