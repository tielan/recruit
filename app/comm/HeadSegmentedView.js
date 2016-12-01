
import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text
} from 'react-native';
const iconLeftIOS = require('../imgs/icon_left_ios.png');
import ImageButton from './ImageButton';

class HeadSegmentedView extends Component {
    constructor(props) {
        super(props);
        this.handleIconClicked = this.handleIconClicked(this);
    }

    handleIconClicked() {

    }
    renderTabOption(tab, i) {
        let color = this.props.activeTab == i ? "#42beff" : "#666"; // 判断i是否是当前选中的tab，设置不同的颜色
        return (
            <TouchableOpacity onPress={() => this.props.goToPage(i)} style={styles.tab} key={i}>
                <View style={[styles.tabItem, { backgroundColor: color }]} >
                    <Text style={{ color: '#fff' }}>
                        {this.props.tabNames[i]}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }

    render() {
        let color0 = this.props.activeTab == 0 ? "#42beff" : "#fff";
        let color1 = this.props.activeTab == 1 ? "#42beff" : "#fff"; // 判断i是否是当前选中的tab，设置不同的颜色
        return (
            <View style={{
                marginTop: 20, height: 44, backgroundColor: '#42beff', flexDirection: 'row', justifyContent: 'center',
                alignItems: 'center',
            }}>
                <View style={{ width: 44 }}>
                    <ImageButton
                        containerStyle={{ justifyContent: 'center', alignItems: 'center' }}
                        source={iconLeftIOS}
                        style={styles.leftIOS}
                        onPress={this.handleIconClicked}
                        />
                </View>
                <View style={{ flex: 1 }} />
                <View style={styles.tabs}>
                    <TouchableOpacity onPress={() => this.props.goToPage(0)} style={styles.tab}>
                        <View style={[styles.tabItem0, { backgroundColor: color0 }]} >
                            <Text style={{ color: color1 }}>
                                {this.props.tabNames[0]}
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.goToPage(1)} style={styles.tab}>
                        <View style={[styles.tabItem1, { backgroundColor: color1 }]} >
                            <Text style={{ color: color0 }}>
                                {this.props.tabNames[1]}
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1 }} />
                <View style={{ width: 44 }} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tabs: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 32,
        width: 180,
        flexDirection: 'row',
    },
    tab: {
        height: 30,
        width: 90,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabItem0: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 90,
        height: 30,
        borderColor: '#fff',
        borderWidth: 1,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,

    },
    tabItem1: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 90,
        height: 30,
        borderColor: '#fff',
        borderWidth: 1,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
    leftIOS: {
        height: 15,
        width: 25,
    },
});


export default HeadSegmentedView;