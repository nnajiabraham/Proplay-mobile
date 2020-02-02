import React from 'react';
import {StyleSheet, Dimensions, View} from 'react-native';
import VideoPlayer from '../VideoPlayer';
// import ViewPager from '@react-native-community/viewpager';
import {fetchVideo, IVideoFetchResponse} from '../../api/fetchVideo';
import {useFocusState} from 'react-navigation-hooks';
import Paginator from './Paginator';

const VideoFlatList: React.FC = () => {
  const [videoList, setVideoList] = React.useState<Array<IVideoFetchResponse>>(
    [],
  );
  // const [activeVideoIndex, setActiveVideoIndex] = React.useState(0);
  const {isFocused} = useFocusState();

  React.useEffect(() => {
    setVideoList(fetchVideo());
    () => setVideoList([]);
  }, []);

  const itemHeight = Dimensions.get('screen').height;

  const renderItem = ({item}: any) => {
    const {id, url, viewsCount, proPicURL, title}: IVideoFetchResponse = item;
    // console.log(index);

    return (
      <View
        style={{
          height: Dimensions.get('screen').height,
          width: Dimensions.get('screen').width,
        }}
      >
        <VideoPlayer
          key={id}
          url={url}
          videoClosed={isFocused}
          viewsCount={viewsCount}
          proPicURL={proPicURL}
          title={title}
        />
      </View>
    );
  };

  return (
    <Paginator
      data={videoList}
      renderItem={renderItem}
      keyExtractor={(item: IVideoFetchResponse) => item.id.toString()}
      itemHeight={itemHeight}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    // padding: 20,
  },
});

export default VideoFlatList;
