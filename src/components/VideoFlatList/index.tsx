import React from 'react';
import {StyleSheet, View, Dimensions, StatusBar} from 'react-native';
import VideoPlayer, {VideoLogoHeader} from '../VideoPlayer';
import ViewPager from '@react-native-community/viewpager';
import {fetchVideo, IVideoFetchResponse} from '../../api/fetchVideo';
import {useFocusState} from 'react-navigation-hooks';

const VideoFlatList: React.FC = () => {
  const [videoList, setVideoList] = React.useState<Array<IVideoFetchResponse>>(
    [],
  );
  const [activeVideoIndex, setActiveVideoIndex] = React.useState(0);
  const {isFocused} = useFocusState();

  React.useEffect(() => {
    setVideoList(fetchVideo());
  }, []);

  const renderItems = () => {
    return (
      <ViewPager
        style={styles.container}
        initialPage={0}
        transitionStyle="scroll"
        orientation="vertical"
        pageMargin={0}
        onPageSelected={e => {
          setActiveVideoIndex(e.nativeEvent.position);
        }}
      >
        {videoList.map((vid, index) => (
          <VideoPlayer
            key={vid.id}
            url={vid.url}
            videoClosed={isFocused ? !Boolean(activeVideoIndex == index) : true}
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
