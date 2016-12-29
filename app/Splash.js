
import React from 'react';
import {
  Dimensions,
  Image,
  InteractionManager
} from 'react-native';

import LoginContainer from './containers/login/LoginContainer';
import MainContainer from './containers/MainContainer';

import { LoginInfo } from 'react-native-go'
const maxHeight = Dimensions.get('window').height;
const maxWidth = Dimensions.get('window').width;
const splashImg = require('./imgs/ic_splash.png');
class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { navigator } = this.props;

    this.timer = setTimeout(() => {
      InteractionManager.runAfterInteractions(() => {
        navigator.resetTo({
          component: MainContainer,
          name: 'MainContainer'
        });
      });
      // if (LoginInfo.getUserInfo() && LoginInfo.getUserInfo().personal_id) {
      //   InteractionManager.runAfterInteractions(() => {
      //     navigator.resetTo({
      //       component: MainContainer,
      //       name: 'MainContainer'
      //     });
      //   });
      // } else {
      //   InteractionManager.runAfterInteractions(() => {
      //     navigator.resetTo({
      //       component: LoginContainer,
      //       name: 'LoginContainer'
      //     });
      //   });
      // }
    }, 2000);
  }

  render() {
    return (
      <Image
        style={{
          width: maxWidth,
          flex: 1,
        }}
        source={splashImg}
        />
    );
  }
}

export default Splash;
