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
import Post from '../screens/Post/Post';
import {Preference, ProsToFollow, Notification} from '../screens/Onboarding';
import SearchCategory from '../screens/Search/SearchCategory';
import SearchResultList from '../screens/Search/SearchResultList';
import VideoPlayer from '../components/VideoPlayer';

const HomeStack = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
    },
    Search: {
      screen: Search,
    },
    Post: {
      screen: Post,
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
    SearchCategory: SearchCategory,
    SearchResultList: SearchResultList,
    VideoPlayer: VideoPlayer,
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
    backBehavior: 'order',
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
