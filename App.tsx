import React from 'react';
import {
  StyleSheet,
  Platform,
  StatusBar,
  SafeAreaView,
  YellowBox,
} from 'react-native';
import {
  createAppContainer,
  NavigationTabRouterConfig,
  NavigationScreenComponent,
  NavigationRouteConfigMap,
  NavigationScreenConfig,
} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {
  createMaterialBottomTabNavigator,
  NavigationMaterialBottomTabConfig,
} from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {IconProps} from 'react-native-vector-icons/Icon';

import {Home, Search, Profile} from './src';

type IMaterialTabOptions = NavigationTabRouterConfig &
  NavigationMaterialBottomTabConfig;

const TabIcon = ({name, color = '#fff'}: IconProps) => {
  return <Icon name={name} color={color} size={20} />;
};

const tabRouteOptions: IMaterialTabOptions = {
  initialRouteName: 'Home',
  activeColor: '#fff',
  inactiveColor: 'rgba(255, 255, 255, 0.6)',
  barStyle: {backgroundColor: 'transparent'},
};

const HomeStack = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: TabIcon({name: 'home'}),
      },
    },
    Search: {
      screen: Search,
      navigationOptions: {
        tabBarIcon: TabIcon({name: 'search'}),
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarIcon: TabIcon({name: 'person'}),
      },
    },
  },
  tabRouteOptions,
);

const AppStack = createStackNavigator(
  {
    HomeStack: HomeStack,
    // Search: SearchScreen,
    // Pro: ProProfileScreen,
    // AddPost: ProPostScreen,
    // Video: VideoScreen,
    // Payments: PaymentScreen,
  },
  {
    initialRouteName: 'HomeStack',
    headerMode: 'none',
  },
);

const AppContainer = createAppContainer(AppStack);

const App: React.FC = () => {
  YellowBox.ignoreWarnings(['Warning: componentWillReceiveProps']);

  return (
    <>
      <AppContainer />
    </>
  );
};
export default App;
