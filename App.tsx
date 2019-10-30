import React from 'react';
import {YellowBox} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import {Home, Search, Profile} from './src';
import CustomTab from './src/components/CustomTab/CustomTab';

const HomeStack = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
    },
    Search: {
      screen: Search,
    },
    Profile: {
      screen: Profile,
    },
  },
  {
    initialRouteName: 'Home',
    lazy: true,
    tabBarComponent: CustomTab,
    tabBarOptions: {
      activeTintColor: 'blue',
      inactiveTintColor: 'grey',
    },
  },
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
