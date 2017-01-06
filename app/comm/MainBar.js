/**
 * 头部logo
 */
import React from 'react'
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

const MainBar = () => {
    return (
        <View style={{ height: 60, backgroundColor: '#047DE6' }}>
            <View style={{ height: 20 }} />
            <View style={{ height: 40, margin: 6 }}>
                <Text> {this.props.title}</Text>
            </View>
        </View>);
};
const styles = StyleSheet.create({
    header_title: {
        height: 28,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
});
export default MainBar;