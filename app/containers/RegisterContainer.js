
import React, { Component, } from 'react';
import { connect } from 'react-redux';
import RegisterPage from '../pages/RegisterPage';

class RegisterContainer extends Component {

  render() {
    return (
      <RegisterPage {...this.props} />
    );
  }
}

function mapStateToProps(state) {
  const { login }  = state;
  return {
    login,
  }
}

export default connect(mapStateToProps)(RegisterContainer);
