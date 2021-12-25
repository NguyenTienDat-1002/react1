import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Platform } from 'react-native';
import Home from './Home';
import Register from './Register';
import Checkin from './Checkin';

const { createNavigator } = Platform.select({
  ios: { createNavigator: createBottomTabNavigator },
  android: { createNavigator: createDrawerNavigator }
});

export default createAppContainer(
  createNavigator({ Home ,Register, Checkin }, { initialRouteName: "Home"})
);