
import React, { Component, } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TextInput,
    TouchableHighlight,
    Alert,
    TouchableWithoutFeedback,
    Dimensions,
    ImageButton,
    ListView,
    TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux';

import { Iconfont, LineView } from 'react-native-go';
import NavigationBar from '../../comm/NavigationBar';
import { editItemSave } from '../../actions/GetPersoanResumeInfoByIdAction';

var dataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
let _defaultValue;

class EditViewPage extends React.Component {
    constructor(props) {
        super(props);
        this.renderByType = this.renderByType.bind(this);
        this.onRightButtonPress = this.onRightButtonPress.bind(this);
        this._renderRowView = this._renderRowView.bind(this);

        const {item, defaultValue } = this.props.route;
        this.state = {
            item: item,
            defaultValue: defaultValue
        };
        _defaultValue = undefined;
    }
    onRightButtonPress() {
        const { dispatch, navigator } = this.props;
        const { item, defaultValue} = this.state;
        let value = defaultValue ? defaultValue : _defaultValue;
        dispatch(editItemSave(item, value));
        navigator.pop();
    }
    renderByType() {
        const { item, defaultValue} = this.state;
        if ('text' === item.type) {
            return (<TextInput style={[styles.input, { height: 44 }]}
                placeholder={'请输入' + item.name}
                defaultValue={defaultValue}
                underlineColorAndroid={'transparent'}
                placeholderTextColor={'#999'}
                onChangeText={(values) => {
                    _defaultValue = values;
                } }
                />);
        }
        if ('number' === item.type) {
            return (<TextInput style={[styles.input, { height: 44 }]}
                placeholder={'请输入' + item.name}
                underlineColorAndroid={'transparent'}
                placeholderTextColor={'#999'}
                keyboardType='phone-pad'
                defaultValue={defaultValue}
                onChangeText={(values) => {
                    _defaultValue = values;
                } }
                />);
        }
        if ('multiline' === item.type) {
            return (<TextInput style={[styles.input, { height: 100 }]}
                placeholder={'请输入' + item.name}
                defaultValue={defaultValue}
                underlineColorAndroid={'transparent'}
                placeholderTextColor={'#999'}
                multiline={true}
                onChangeText={(values) => {
                    _defaultValue = values;
                } }
                />);
        }
        if ('select' === item.type) {
            return (
                <ListView
                    enableEmptySections={true}
                    dataSource={dataSource.cloneWithRows(item.values)}
                    renderRow={this._renderRowView}
                    />);
        }
    }
    onRightItemPress(value) {
        this.setState({
            defaultValue: value
        });
    }
    _renderRowView(rowData, sectionId, index) {
        const { item, defaultValue} = this.state;
        return (<TouchableOpacity onPress={this.onRightItemPress.bind(this, rowData.value)} key={index}>
            <View style={styles.row}>
                <View style={styles.text}>
                    <View style={{ flex: 1 }} />
                    <Text>{rowData.name}</Text>
                    <View style={{ flex: 1 }} />
                </View>
                <View style={{ marginRight: 8 }} >
                    {
                        rowData.value === defaultValue ? <Iconfont fontFamily={'OAIndexIcon'}
                            icon='e65e' // 图标
                            iconColor='#a3a3a3'
                            iconSize={20}
                            /> : <View />
                    }
                </View>
            </View>
        </TouchableOpacity>);
    }
    render() {
        return (<View style={styles.container} >
            <NavigationBar title={this.state.item.name} navigator={this.props.navigator} rightButtonTitle="确定" onRightButtonPress={this.onRightButtonPress} />

            <View style={{ flex: 1, backgroundColor: '#F2F2F2' }}>
                {
                    this.renderByType()
                }
            </View >
        </View >);
    }

}

var styles = StyleSheet.create({
    container: {
        flex: 1
    },
    calcontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5'
    },
    input: {
        borderColor: '#D4D4D4',
        borderBottomWidth: StyleSheet.hairlineWidth,
        backgroundColor: '#fff',
        padding: 4,
    },
    text: {
        flex: 1,
        marginLeft: 10,
    },
    row: {
        flexDirection: 'row',
        borderColor: '#D4D4D4',
        borderBottomWidth:  StyleSheet.hairlineWidth,
        backgroundColor: '#fff',
        height: 44,
    },

});
class EditViewContainer extends Component {

    render() {
        return (
            <EditViewPage {...this.props} />
        );
    }
}

function mapStateToProps(state) {
    const { login } = state;
    return {
        login,
    }
}

export default connect(mapStateToProps)(EditViewContainer);
