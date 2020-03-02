import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import VideoPlayer from '../components/VideoPlayer';
import VideoCard from '../components/VideoPlayer/VideoCard';
import Search from '../screens/Search/Search';
import SearchCategory from '../screens/Search/SearchCategory';
import SearchResultList from '../screens/Search/SearchResultList';
import {SearchParamList} from './paramTypes/SearchParams';

interface SearchStackProps {}

const Stack = createStackNavigator<SearchParamList>();

export const SearchStack: React.FC<SearchStackProps> = ({}) => {
  return (
    <Stack.Navigator initialRouteName="Search" headerMode={'none'}>
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="SearchCategory" component={SearchCategory} />
      <Stack.Screen name="SearchResultList" component={SearchResultList} />
      <Stack.Screen name="VideoCard" component={VideoCard} />
      <Stack.Screen name="VideoPlayer" component={VideoPlayer} />
    </Stack.Navigator>
  );
};
