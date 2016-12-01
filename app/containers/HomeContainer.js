import React, { Component, } from 'react';
import { connect } from 'react-redux';
import HomePage from '../pages/HomePage';

class HomeContainer extends Component {

  render() {
    return (
      <HomePage {...this.props} />
    );
  }
}

function mapStateToProps(state) {
  const { login }  = state;
  return {
    login,
  }
}

export default connect(mapStateToProps)(HomeContainer);