import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import {Transition} from 'react-native-reanimated';
import CustomTab from '../components/CustomTab';

import Home from '../screens/Home/Home';
import RouteDecision from './RouteDecision';
import Search from '../screens/Search/Search';
import Profile from '../screens/Profile/Profile';
import {Preference, ProsToFollow, Notification} from '../screens/Onboarding';

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
  },
  {
    initialRouteName: 'HomeStack',
    headerMode: 'none',
  },
);

const OnboardingStack = createStackNavigator(
  {
    Preference,
    ProsToFollow,
    Notification,
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

const SwitchNavigator: any = createAnimatedSwitchNavigator(
  {
    Home: AppStack,
    OnboardingStack: OnboardingStack,
    RouteDecision: RouteDecision,
  },
  {
    initialRouteName: 'RouteDecision',
    transition: (
      <Transition.Together>
        <Transition.Out
          type="slide-left"
          durationMs={200}
          interpolation="easeIn"
        />
        <Transition.In type="fade" durationMs={200} />
      </Transition.Together>
    ),
  },
);

const AppNavigationContainer = createAppContainer(SwitchNavigator);

export default AppNavigationContainer;
