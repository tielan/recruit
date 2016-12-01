import React, {Component} from 'react';
import {
  ActivityIndicator,
  Text,
  View,
} from 'react-native';

export default class extends Component {
    render() {
        if (this.props.loading) {
            return (
                <View
                    style={{
                        flex: 1, flexDirection: 'row', justifyContent: 'center',
                        alignItems: 'center', padding: 5
                    }}
                    >
                    <ActivityIndicator size="small" color="#3e9ce9" />
                    <Text style={{ textAlign: 'center', fontSize: 16, marginLeft: 10 }}>
                        数据加载中……
                    </Text>
                </View>
            );
        }
        return null;
    }
}