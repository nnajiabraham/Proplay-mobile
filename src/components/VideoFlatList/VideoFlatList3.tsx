import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import VideoPlayer from '../VideoPlayer';
import {fetchVideo, IVideoFetchResponse} from '../../api/fetchVideo';
import {useFocusState} from 'react-navigation-hooks';

const VideoFlatList: React.FC = () => {
  const [videoList, setVideoList] = React.useState<Array<IVideoFetchResponse>>(
    [],
  );
  const [currentVideoIndex, setCurrentVideoIndex] = React.useState(0);
  const {isFocused} = useFocusState();

  React.useEffect(() => {
    setVideoList(fetchVideo());
    currentVideoIndex;
    () => setVideoList([]);
  }, []);
  const ref = React.useRef(null);

  const renderItem = ({item, index}: any) => {
    const {id, url, viewsCount, proPicURL, title}: IVideoFetchResponse = item;
    // console.log(index);
    //   setCurrentVideoIndex(index);
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
    <Carousel
      ref={ref}
      data={videoList}
      renderItem={renderItem}
      sliderWidth={Dimensions.get('screen').width}
      sliderHeight={Dimensions.get('screen').height}
      slideStyle={{width: Dimensions.get('screen').width}}
      itemWidth={Dimensions.get('screen').width}
      itemHeight={Dimensions.get('screen').height}
      vertical={true}
    />
  );
};

export default VideoFlatList;
