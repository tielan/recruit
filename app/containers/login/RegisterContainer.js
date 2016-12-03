
import React, { Component, } from 'react';
import { connect } from 'react-redux';
import RegisterPage from '../../pages/login/RegisterPage';

class RegisterContainer extends Component {

  render() {
    return (
      <RegisterPage {...this.props} />
    );
  }
}

function mapStateToProps(state) {
  const { register } = state;
  return {
    register,
  }
}

export default connect(mapStateToProps)(RegisterContainer);
