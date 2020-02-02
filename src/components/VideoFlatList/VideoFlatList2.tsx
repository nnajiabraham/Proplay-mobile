import React from 'react';
import {StyleSheet, Dimensions, StatusBar, Text} from 'react-native';
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

  // const renderItems = () => {
  //   return (
  //     <ViewPager
  //       style={styles.container}
  //       initialPage={0}
  //       transitionStyle="scroll"
  //       orientation="vertical"
  //       pageMargin={0}
  //       onPageSelected={e => {
  //         setActiveVideoIndex(e.nativeEvent.position);
  //       }}
  //     >
  //       {videoList.map((vid, index) => (
  //         <VideoPlayer
  //           key={vid.id}
  //           url={vid.url}
  //           videoClosed={isFocused ? !Boolean(activeVideoIndex == index) : true}
  //           viewsCount={vid.viewsCount}
  //           proPicURL={vid.proPicURL}
  //           title={vid.title}
  //         />
  //       ))}
  //     </ViewPager>
  //   );
  // };

  const itemHeight = Dimensions.get('window').height;

  const renderItem = ({item}: any) => {
    const {id, url, viewsCount, proPicURL, title}: IVideoFetchResponse = item;
    // console.log(index);

    return (
      <>
        <VideoPlayer
          key={id}
          url={url}
          videoClosed={isFocused}
          viewsCount={viewsCount}
          proPicURL={proPicURL}
          title={title}
        />
      </>
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
    // flex: 1,
    // backgroundColor: '#',
    height: Dimensions.get('window').height,
    width: Dimensions.get('screen').width,
  },
});

export default VideoFlatList;
