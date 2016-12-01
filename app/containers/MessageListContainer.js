import React, { Component, } from 'react';
import { connect } from 'react-redux';
import MessageListPage from '../pages/MessageListPage';

class MessageListContainer extends Component {

  render() {
    return (
      <MessageListPage {...this.props} />
    );
  }
}

function mapStateToProps(state) {
  const { login }  = state;
  return {
    login,
  }
}

export default connect(mapStateToProps)(MessageListContainer);