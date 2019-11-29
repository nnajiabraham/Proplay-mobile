import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import {Transition} from 'react-native-reanimated';

import Home from './Home';
import Search from './Search';
import Profile from './Profile';
import Preference from './Preferences';
import RouteDecision from './RouteDecision';
import CustomTab from '../components/CustomTab';

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
      // inactiveTintColor: 'rgba(255,255,255,0.6)',
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

const PreferenceStack = createStackNavigator(
  {
    Preference: Preference,
    // Search: SearchScreen,
    // Pro: ProProfileScreen,
    // AddPost: ProPostScreen,
    // Video: VideoScreen,
    // Payments: PaymentScreen,
  },
  {
    initialRouteName: 'Preference',
    headerMode: 'none',
  },
);

const SwitchNavigator = createAnimatedSwitchNavigator(
  {
    Home: AppStack,
    PreferenceStack: PreferenceStack,
    RouteDecision: RouteDecision,
  },
  {
    initialRouteName: 'RouteDecision',
    transition: (
      <Transition.Together>
        <Transition.Out
          type="slide-bottom"
          durationMs={400}
          interpolation="easeIn"
        />
        <Transition.In type="fade" durationMs={500} />
      </Transition.Together>
    ),
  },
);

const AppNavigationContainer = createAppContainer(SwitchNavigator);

export default AppNavigationContainer;
