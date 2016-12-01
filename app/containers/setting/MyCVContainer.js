
import React, { Component, } from 'react';
import { connect } from 'react-redux';
import MyCVPage from '../../pages/setting/MyCVPage';

class MyCVContainer extends Component {

  render() {
    return (
      <MyCVPage {...this.props} />
    );
  }
}

function mapStateToProps(state) {
  const { login }  = state;
  return {
    login,
  }
}

export default connect(mapStateToProps)(MyCVContainer);
