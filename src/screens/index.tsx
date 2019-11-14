import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import Home from './Home';
import Search from './Search';
import Profile from './Profile';
import Preference from './Preferences';
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

const AppNavigationContainer = createAppContainer(AppStack);

export default AppNavigationContainer;
