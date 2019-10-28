import React from 'react';
import {
  StyleSheet,
  Platform,
  StatusBar,
  SafeAreaView,
  YellowBox,
  Text,
} from 'react-native';
import {createAppContainer, NavigationTabRouterConfig} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {
  createMaterialBottomTabNavigator,
  NavigationMaterialBottomTabConfig,
  NavigationMaterialBottomTabOptions,
} from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {IconProps} from 'react-native-vector-icons/Icon';

import {Home, Search, Profile} from './src';

type IMaterialTabOptions = NavigationTabRouterConfig &
  NavigationMaterialBottomTabConfig;

const TabIcon = ({name, color}: IconProps) => {
  return <Icon name={name} color={color} size={20} />;
};

let tabRouteOptions: IMaterialTabOptions = {
  initialRouteName: 'Home',
  activeColor: '#000',
  inactiveColor: 'rgba(0, 0, 0, 0.6)',
  barStyle: {backgroundColor: 'transparent'},
};

const HomeStack = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: ({navigation, index}: any) => {
        const color = navigation.isFocused() ? '#fff' : 'rgba(0,0,0,0.6)';

        return {
          tabBarIcon: TabIcon({name: 'home', color: color}),
          tabBarLabel: <Text style={{color: color}}>Home</Text>,
          tabBarColor: '#fff',
        };
      },
    },
    Search: {
      screen: Search,
      navigationOptions: ({navigation}) => {
        const color = navigation.isFocused() ? '#000' : 'rgba(0,0,0,0.6)';

        return {
          tabBarIcon: TabIcon({name: 'search', color: color}),
          tabBarLabel: <Text style={{color: color}}>Search</Text>,
          tabBarColor: '#fff',
        };
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: ({navigation}) => {
        const color = navigation.isFocused() ? '#000' : 'rgba(0,0,0,0.6)';

        return {
          tabBarIcon: TabIcon({name: 'person', color: color}),
          tabBarLabel: <Text style={{color: color}}>Profile</Text>,
          tabBarColor: '#fff',
        };
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
