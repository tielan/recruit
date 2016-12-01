import React, { Component, } from 'react';
import { connect } from 'react-redux';
import MessagePage from '../pages/MessagePage';

class MessageContainer extends Component {

  render() {
    return (
      <MessagePage {...this.props} />
    );
  }
}

function mapStateToProps(state) {
  const { login }  = state;
  return {
    login,
  }
}

export default connect(mapStateToProps)(MessageContainer);