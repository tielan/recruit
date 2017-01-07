import React, { Component} from 'react';

import { connect } from 'react-redux';

import ZhiWeiListPage from './ZhiWeiListPage'

class ZhiWeiListContainer extends React.Component {

    render() {
		return (
			<ZhiWeiListPage {...this.props} />
		);
	}
}

function mapStateToProps(state) {
    const { zhiweilist } = state;
    return {
        zhiweilist,
    }
}

export default connect(mapStateToProps)(ZhiWeiListContainer);
