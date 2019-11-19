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

const VideoFlatList: React.FC = () => {
  const [videoList, setVideoList] = React.useState<Array<IVideoFetchResponse>>(
    [],
  );

  React.useEffect(() => {
    setVideoList(fetchVideo());
  }, []);

  const renderItems = () => {
    return videoList.length == 0 ? (
      //TODO: change to a better loading component
      <Text style={{color: '#fff', fontSize: 999}}>Loading...</Text>
    ) : (
      videoList.map(vid => <VideoPlayer key={vid.id} url={vid.url} />)
    );
  };

  return (
    <View style={styles.container}>
      <ViewPager
        style={styles.container}
        initialPage={0}
        transitionStyle="scroll"
        orientation="vertical"
        onPageSelected={e => console.log('changed \n', e.nativeEvent.position)} //this will handle paginated fetch to avoid fetching
      >
        {renderItems()}
      </ViewPager>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    height: Dimensions.get('window').height,
    width: Dimensions.get('screen').width,
  },
});

export default VideoFlatList;
