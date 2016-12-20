
import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text
} from 'react-native';

import { Iconfont } from 'react-native-go';

class HomeTabBar extends Component {

    // propTypes = {
    //     goToPage: React.PropTypes.func, // 跳转到对应tab的方法
    //     activeTab: React.PropTypes.number, // 当前被选中的tab下标
    //     tabs: React.PropTypes.array, // 所有tabs集合
    //     tabNames: React.PropTypes.array, // 保存Tab名称
    //     tabIconNames: React.PropTypes.array, // 保存Tab图标
    // }

    setAnimationValue({value}) {
       // console.log(value);
    }
    componentDidMount() {
        // Animated.Value监听范围 [0, tab数量-1]
        this.props.scrollValue.addListener(this.setAnimationValue);
    }

    renderTabOption(tab, i) {
        let color = this.props.activeTab == i ? "#42beff" : "#666"; // 判断i是否是当前选中的tab，设置不同的颜色
        return (
            <TouchableOpacity onPress={() => this.props.goToPage(i)} style={styles.tab} key={i} activeOpacity ={0}>
                <View style={styles.tabItem}>
                    <Iconfont fontFamily={'OAIndexIcon'}
                        icon={this.props.tabIconNames[i]} // 图标
                        iconColor={color}
                        iconSize={28}
                        />
                    <Text style={{ color: color }}>
                        {this.props.tabNames[i]}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <View style={{height:50}}>
            <View style={{height:1,backgroundColor:'#d9d9d9'}}/>
            <View style={styles.tabs}>
                {this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
            </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tabs: {
        flexDirection: 'row',
        height: 48,
        padding:4,
    },
    tab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    tabItem: {
        flexDirection: 'column',
        alignItems: 'center',
    },
});


export default HomeTabBar;