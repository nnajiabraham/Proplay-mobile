import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {fetchVideo} from '../../api/fetchVideo';
import Header from '../../components/Header';
import SafeViewWrapper from '../../components/SafeViewWrapper';
import VideoCard from '../../components/VideoPlayer/VideoCard';
import {SearchStackProps} from '../../navigations/paramTypes/SearchParams';

interface ISearchResultListProps extends SearchStackProps<'Search'> {}

const recentVideoTips = fetchVideo();

let videoList = recentVideoTips.map(v => ({
  id: v.id,
  thumbnailUrl: v.thumbnail,
  proPicURL: v.proPicURL,
  proName: v.proName,
  videoTitle: v.title,
  url: v.url,
}));

const SearchResultList: React.FC<ISearchResultListProps> = ({
  navigation,
  route,
}) => {
  const {goBack /*getParam*/} = useNavigation();

  return (
    <SafeViewWrapper removeNotch>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingLeft: 25,
          paddingTop: 20,
          marginBottom: 20,
        }}
      >
        <TouchableOpacity
          style={{
            marginRight: 20,
          }}
          onPress={() => goBack()}
        >
          <Icon name="chevron-left" color={'rgba(0,0,0,0.8)'} size={20} />
        </TouchableOpacity>
        <Header
          label={'Search Results'}
          style={{
            fontWeight: 'bold',
            color: '#000000',
            fontSize: 30,
          }}
        />
      </View>
      <FlatList
        data={videoList}
        renderItem={({item}) => (
          <VideoCard
            thumbnailUrl={item.thumbnailUrl}
            proPicURL={item.proPicURL}
            proName={item.proName}
            videoTitle={item.videoTitle}
            viewStyle={{
              width: 173,
              height: 245,
            }}
            videoUrl={item.url}
            navigation={navigation}
            route={route}
          />
        )}
        keyExtractor={item => item.id as string}
        numColumns={2}
        columnWrapperStyle={{
          padding: 5,
        }}
        contentContainerStyle={{
          backgroundColor: '#fff',
          paddingTop: 20,
          paddingLeft: 10,
        }}
        style={{
          flex: 1,
          alignSelf: 'center',
        }}
      />
    </SafeViewWrapper>
  );
};

export default SearchResultList;
