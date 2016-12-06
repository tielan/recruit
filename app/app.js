
import React from 'react';
import {
  StyleSheet,
  Navigator,
  StatusBar,
  BackAndroid,
  View
} from 'react-native';

import { naviGoBack } from './utils/CommonUtils';
import Splash from './Splash';
import { FetchManger } from 'react-native-go'

let tempNavigator;
let isRemoved = false;

class App extends React.Component {

  constructor(props) {
    super(props);
    FetchManger.initConfig({baseUrl:'http://222.240.214.122:18000/mobile_interfaces/mobile_info/'});
    this.renderScene = this.renderScene.bind(this);
    BackAndroid.addEventListener('hardwareBackPress', this.goBack);

  }

  goBack() {
    return naviGoBack(tempNavigator);
  }

  renderScene(route, navigator) {

    const Component = route.component;
    tempNavigator = navigator;
    if (route.name === 'WebViewPage') {
      BackAndroid.removeEventListener('hardwareBackPress', this.goBack);
      isRemoved = true;
    } else if (isRemoved) {
      BackAndroid.addEventListener('hardwareBackPress', this.goBack);
    }
    return (
      <Component navigator={navigator} route={route} />
    );
  }
  static configureScene() {
    return Navigator.SceneConfigs.PushFromRight;
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          backgroundColor="#3e9ce9"
          barStyle="light-content"
          />
        <Navigator
          style={styles.navigator}
          configureScene={this.configureScene}
          renderScene={this.renderScene}
          initialRoute={{
            component: Splash,
            name: 'Splash'
          }}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navigator: {
    flex: 1
  }
});

export default App;