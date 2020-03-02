import {useIsFocused} from '@react-navigation/native';
import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {fetchVideo, IVideoFetchResponse} from '../../api/fetchVideo';
import VideoPlayer from '../VideoPlayer';
import Paginator from './Paginator';

const VideoFlatList: React.FC = () => {
  const [videoList, setVideoList] = React.useState<Array<IVideoFetchResponse>>(
    [],
  );
  const [currentVideoIndex, setCurrentVideoIndex] = React.useState(0);
  const isFocused = useIsFocused();

  React.useEffect(() => {
    setVideoList(fetchVideo());
    currentVideoIndex;
    () => setVideoList([]);
  }, []);

  React.useEffect(() => {
    // console.log('currentVideoIndex', currentVideoIndex);
  }, [currentVideoIndex]);

  const itemHeight = Dimensions.get('screen').height;

  const renderItem = ({item, index}: any) => {
    const {id, url, viewsCount, proPicURL, title}: IVideoFetchResponse = item;
    // console.log(index);
    setCurrentVideoIndex(index);
    // const currentIndex = index;
    // const currentVisibleIndex = 0;

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
      currentVisibleIndex={(_: any) => {
        // console.log('currentVisibleIndex', currentVisibleIndex);
      }}
      extraData={videoList}
      onScrollCallback={_ => setVideoList([...videoList, ...fetchVideo()])}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    // padding: 20,
  },
});

export default VideoFlatList;
