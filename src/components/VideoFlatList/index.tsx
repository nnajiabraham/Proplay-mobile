import React, {Component} from 'react';
import {StyleSheet, View, Dimensions, StatusBar, Text} from 'react-native';
import VideoPlayer from '../VideoPlayer';
import ViewPager from '@react-native-community/viewpager';
import {fetchVideo, IVideoFetchResponse} from '../../api/fetchVideo';
import VideoLogoHeader from '../VideoPlayer/VideoLogoHeader';

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
      <ViewPager
        style={styles.container}
        initialPage={0}
        transitionStyle="scroll"
        orientation="vertical"
        pageMargin={0}
        onPageSelected={e => {
          setActiveVideoIndex(e.nativeEvent.position);
          console.log('changed\n', e.nativeEvent.position);
        }}
      >
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
      <View style={styles.container}>
        <View style={styles.logo}>
          <VideoLogoHeader />
        </View>
        {renderItems()}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  logo: {
    position: 'absolute',
    top: 0,
    zIndex: 4,
    marginTop: StatusBar.currentHeight ? 26 : 52, // StatusBar.currentHeight if present has no notch else has notch, double padding
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('screen').width,
  },
});

export default VideoFlatList;
