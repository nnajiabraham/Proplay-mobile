import React from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import Video, {OnLoadData} from 'react-native-video';
import {useFocusState} from 'react-navigation-hooks';

export interface IVideoPlayerProps {
  url: string;
  videoClosed: boolean;
  seekPosition?: number;
}

const VideoPlayer: React.FC<IVideoPlayerProps> = ({
  url,
  videoClosed = true,
  seekPosition,
}) => {
  const [videoLoaded, setVideoLoaded] = React.useState<boolean>(false);
  const player = React.useRef(null);

  const onBuffer = () => {
    // console.log('bufferring, ', e);
  };

  const videoError = e => {
    console.log('Error', e);
  };

  const onVideoLoad = () => (e: OnLoadData) => {
    setVideoLoaded(true);
  };

  const seekVideoToPosition = (position: number) => {
    player.current.seek(position);
  };

  React.useEffect(() => {
    //seek can only be run after video is loaded
    //run every time video is closed/swiped away so that when reopened we restart to seek position
    if (videoLoaded) {
      seekPosition ? seekVideoToPosition(seekPosition) : seekVideoToPosition(0);
    }
  }, [videoClosed, videoLoaded]);

  return (
    <View style={styles.container}>
      <Video
        source={{
          uri: url,
        }}
        ref={player}
        onBuffer={onBuffer}
        onError={videoError}
        style={styles.video}
        controls={false}
        paused={videoClosed}
        fullscreen={false}
        resizeMode="cover"
        repeat={false}
        onLoad={onVideoLoad()} //with vidRef.current.seek can reset vid timeline on change
      />
    </View>
  );
};

// Later on in your styles..
var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('screen').width,
  },
});

export default VideoPlayer;
