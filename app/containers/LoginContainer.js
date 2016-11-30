
import React, { Component, } from 'react';
import { connect } from 'react-redux';
import LoginPage from '../pages/LoginPage';

class LoginContainer extends Component {

  render() {
    return (
      <LoginPage {...this.props} />
    );
  }
}

function mapStateToProps(state) {
  const { login }  = state;
  return {
    login,
  }
}

export default connect(mapStateToProps)(LoginContainer);
