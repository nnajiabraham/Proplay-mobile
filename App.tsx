import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  StatusBar,
} from 'react-native';
import {Discover, Search, Profile} from './src/screens';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

const TabNavigator = createBottomTabNavigator(
  {
    Discover: {
      screen: Discover,
    },
    Search: {
      screen: Search,
    },
    Profile: {
      screen: Profile,
    },
  },
  {
    initialRouteName: 'Discover',
  },
);

const AppContainer = createAppContainer(TabNavigator);

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <AppContainer />
    </>
  );
};

export default App;
