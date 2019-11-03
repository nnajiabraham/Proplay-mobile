import React from 'react';
import {YellowBox} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Home, Search, Profile, Preference} from './src';
import CustomTab from './src/components/CustomTab';

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

// const PreferenceStack = createStackNavigator

const AppStack = createStackNavigator(
  {
    HomeStack: HomeStack,
    Preference: {
      screen: Preference,
    },
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

const AppContainer = createAppContainer(AppStack);

const App: React.FC = () => {
  YellowBox.ignoreWarnings(['Warning: componentWillReceiveProps']);

  return (
    <SafeAreaProvider>
      <AppContainer />
    </SafeAreaProvider>
  );
};
export default App;
