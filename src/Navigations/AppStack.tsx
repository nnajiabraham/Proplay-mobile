import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomTab from '../components/CustomTab';
import Home from '../screens/Home/Home';
import Post from '../screens/Post/Post';
import Profile from '../screens/Profile/Profile';
import {AppStackParamList, AppTabParamList} from './paramTypes/AppStackParams';
import {SearchStack} from './SearchStack';

const Tab = createBottomTabNavigator<AppTabParamList>();
const Stack = createStackNavigator<AppStackParamList>();

const AppTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({color}: any) => {
          const {name} = route;
          let iconName: string = 'question';
          switch (name) {
            case 'Home':
              iconName = 'home-outline';
              break;
            case 'Post':
              iconName = 'plus-box';
              break;
            case 'Profile':
              iconName = 'account-outline';
              break;
            case 'Search':
              iconName = 'magnify';
              break;
            default:
              iconName = name;
              break;
          }
          return <Icon name={iconName} color={color} size={20} />;
        },
      })}
      tabBar={props => <CustomTab {...props} />}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={SearchStack} />
      <Tab.Screen name="Post" component={Post} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const AppStack = () => {
  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen name="App" component={AppTabs} />
      {/* <Stack.Screen name="VideoPlayer" component={VideoPlayer} />
      <Stack.Screen name="VideoCard" component={VideoCard} /> */}
    </Stack.Navigator>
  );
};

export default AppStack;
