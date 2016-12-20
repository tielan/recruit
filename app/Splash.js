
import React from 'react';
import {
  Dimensions,
  Animated,
  InteractionManager
} from 'react-native';

import LoginContainer from './containers/login/LoginContainer';
import MainContainer from './containers/MainContainer';

import { LoginInfo } from 'react-native-go'

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bounceValue: new Animated.Value(1)
    };
  }

  componentDidMount() {
    const { navigator } = this.props;
    // Animated.timing(
    //   this.state.bounceValue, { toValue: 1.2, duration: 1000 }
    // ).start();

    this.timer = setTimeout(() => {

      if (LoginInfo.getUserInfo() && LoginInfo.getUserInfo().personal_id) {
        InteractionManager.runAfterInteractions(() => {
          navigator.resetTo({
            component: MainContainer,
            name: 'MainContainer'
          });
        });
      } else {
        InteractionManager.runAfterInteractions(() => {
          navigator.resetTo({
            component: LoginContainer,
            name: 'LoginContainer'
          });
        });
      }
    }, 2000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    return (
      <Animated.Image
        style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
          //   transform: [{ scale: this.state.bounceValue }] 
        }}
        source={require('./imgs/ic_splash.png')}
        />
    );
  }
}

export default Splash;
