import React, { Component, } from 'react';
import { connect } from 'react-redux';
import GongShiShowPage from '../pages/GongShiShowPage';

class GongShiShowContainer extends Component {

  render() {
    return (
      <GongShiShowPage {...this.props} />
    );
  }
}

function mapStateToProps(state) {
  const { login }  = state;
  return {
    login,
  }
}

export default connect(mapStateToProps)(GongShiShowContainer);