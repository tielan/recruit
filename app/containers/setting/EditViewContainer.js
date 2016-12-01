
import React, { Component, } from 'react';
import { connect } from 'react-redux';
import EditViewPage from '../../pages/setting/EditViewPage';

class EditViewContainer extends Component {

  render() {
    return (
      <EditViewPage {...this.props} />
    );
  }
}

function mapStateToProps(state) {
  const { login }  = state;
  return {
    login,
  }
}

export default connect(mapStateToProps)(EditViewContainer);
