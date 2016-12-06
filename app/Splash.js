
import React from 'react';
import {
  Dimensions,
  Animated,
  InteractionManager
} from 'react-native';

import LoginContainer from './containers/login/LoginContainer';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bounceValue: new Animated.Value(1)
    };
  }

  componentDidMount() {
    const { navigator } = this.props;
    Animated.timing(
      this.state.bounceValue, { toValue: 1.2, duration: 1000 }
    ).start();

    this.timer = setTimeout(() => {

       InteractionManager.runAfterInteractions(() => {
            navigator.resetTo({
              component: LoginContainer,
              name: 'Login'
            });
          });
          /*
      global.storage.load({
        key: 'userName',
      }).then((ret)=>{
        if (ret.userName && ret.password && ret.rawData){
          navigator.push({
            name: "Main",
            component: MainContainer,
          });
        } else {
          InteractionManager.runAfterInteractions(() => {
            navigator.resetTo({
              component: LoginContainer,
              name: 'Login'
            });
          });
        }
      }).catch((err)=>{
        console.log('setAotoLogin error ==> ', err);
        if(!err)
          InteractionManager.runAfterInteractions(() => {
            navigator.resetTo({
              component: LoginContainer,
              name: 'Login'
            });
          });
      })*/
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
          transform: [{ scale: this.state.bounceValue }] 
        }}
        source={require('./imgs/bj.png')}
      />
    );
  }
}

export default Splash;
