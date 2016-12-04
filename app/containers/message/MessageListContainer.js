import React, { Component, } from 'react';
import {
    StyleSheet,
    TextInput,
    Text,
    Image,
    TouchableHighlight,
    View,
    ListView
} from 'react-native';

import { connect } from 'react-redux';
import Toolbar from '../../comm/Toolbar';
let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 != r2 });

class MessageListPage extends React.Component {
    constructor(props) {
        super(props);
        _data = [];
        this.state = {
            dataSource: ds.cloneWithRows(_data),
        };

    }

    _renderRowView(rowData, sectionId, index) {
        if (!rowData) {
            return <View />;
        }
        return (
            <TouchableHighlight
                underlayColor='#c8c7cc'
                onPress={this._pressRow.bind(this, rowData)}
                key={rowData.url}>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <View style={{ flexDirection: 'row', flex: 1, marginTop: 8, marginBottom: 10 }}>
                            <Text style={styles.datetext}>{rowData.order_day}</Text>
                            <Text style={styles.timetext}>{rowData.datetime}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', flex: 1, marginBottom: 8, alignItems: 'center' }}>
                            <Text style={styles.persontext}>{rowData.userrealname}</Text>
                            <Text style={styles.sitetext}>{rowData.org_name}</Text>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        );

    }
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#ebedee' }}>
                {
                    (_data.length != 0) ?
                        <ListView
                            enableEmptySections={true}
                            dataSource={this.state.dataSource}
                            renderRow={this.renderRowView}
                            />
                        :
                        <View style={{ alignItems: 'center', flex: 1, backgroundColor: '#fff' }}>
                            <View style={{ flex: 1 }} />
                            <Text style={styles.bgtext}>暂无数据</Text>
                            <View style={{ flex: 1 }} />
                        </View>
                }
            </View >
        );
    }
}
const styles = StyleSheet.create({

});

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