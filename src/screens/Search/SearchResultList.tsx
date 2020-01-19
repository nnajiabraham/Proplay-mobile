import React from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
// import TipsCard from './TipsCard';
// import {IVideoFetchResponse} from '../../api/fetchVideo';
import SafeViewWrapper from '../../components/SafeViewWrapper';
import {useNavigation} from 'react-navigation-hooks';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Header from '../../components/Header';
import {TipsCard} from '../../components/RecentTip';
import {fetchVideo} from '../../api/fetchVideo';

interface ISearchResultListProps {}

const recentVideoTips = fetchVideo();

let videoList = recentVideoTips.map(v => ({
  id: v.id,
  thumbnailUrl: v.thumbnail,
  proPicURL: v.proPicURL,
  proName: v.proName,
  videoTitle: v.title,
}));

const SearchResultList: React.FC<ISearchResultListProps> = () => {
  const {goBack /*getParam*/} = useNavigation();

  return (
    <SafeViewWrapper removeNotch>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingLeft: 25,
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
          <TipsCard
            thumbnailUrl={item.thumbnailUrl}
            proPicURL={item.proPicURL}
            proName={item.proName}
            videoTitle={item.videoTitle}
            viewStyle={{
              width: 173,
              height: 245,
            }}
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

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'yellow',
//   },
//   item: {
//     backgroundColor: '#f9c2ff',
//     // padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
//   title: {
//     fontSize: 32,
//   },
// });

export default SearchResultList;
