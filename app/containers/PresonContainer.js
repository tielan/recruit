import React, { Component, } from 'react';
import { connect } from 'react-redux';
import PresonPage from '../pages/PresonPage';

class PresonContainer extends Component {

  render() {
    return (
      <PresonPage {...this.props} />
    );
  }
}

function mapStateToProps(state) {
  const { login }  = state;
  return {
    login,
  }
}

export default connect(mapStateToProps)(PresonContainer);