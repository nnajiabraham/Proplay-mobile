import React, {Component} from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Dimensions,
  StatusBar,
  Text,
} from 'react-native';
import VideoPlayer from '../VideoPlayer';
import ViewPager from '@react-native-community/viewpager';
import {fetchVideo, IVideoFetchResponse} from '../../api/fetchVideo';
import ContentLoader from 'react-content-loader/native/native';
import {Rect} from 'react-native-svg';

const VideoFlatList: React.FC = () => {
  const [videoList, setVideoList] = React.useState<Array<IVideoFetchResponse>>(
    [],
  );
  const [activeVideoIndex, setActiveVideoIndex] = React.useState(0);

  React.useEffect(() => {
    // setVideoList([]);
    setVideoList(fetchVideo());
  }, []);

  const renderItems = () => {
    return videoList.length == 0 ? (
      //TODO: change to a better loading component
      <>
        <Text style={{color: '#fff'}}>Loading...</Text>
      </>
    ) : (
      //component vertical pager not supported for android, a PR is up to fix in github, update library after updated
      <ViewPager
        style={styles.container}
        initialPage={0}
        transitionStyle="scroll"
        orientation="vertical"
        onPageSelected={e => {
          setActiveVideoIndex(e.nativeEvent.position);
          console.log('changed\n', e.nativeEvent.position);
        }} //this will handle paginated fetch to avoid fetching
      >
        {/* {[1, 2, 3, 4, 5, 6].map(i => (
          <Text key={i}>{`First page ${i}`}</Text>
        ))} */}
        {videoList.map((vid, index) => (
          <VideoPlayer
            key={vid.id}
            url={vid.url}
            pauseClosedVideo={!Boolean(activeVideoIndex == index)}
          />
        ))}
      </ViewPager>
    );
  };

  return (
    <>
      <View style={styles.container}>{renderItems()}</View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#000',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('screen').width,
  },
});

export default VideoFlatList;
