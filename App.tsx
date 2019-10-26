import React from 'react';
import {StatusBar} from 'react-native';
import {Home, Search, Profile} from './src/screens';
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

type IMaterialTabOptions = NavigationTabRouterConfig &
  NavigationMaterialBottomTabConfig;

const TabIcon = ({name, color}: IconProps) => {
  return <Icon name={name} color={color} size={20} />;
};

const tabRouteOptions: IMaterialTabOptions = {
  initialRouteName: 'Home',
  activeColor: '#000',
  inactiveColor: 'rgba(0, 0, 0, 0.6)',
  barStyle: {backgroundColor: '#fff'},
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
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <AppContainer />
    </>
  );
};

export default App;
