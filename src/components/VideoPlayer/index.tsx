import React from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import Video from 'react-native-video';

export interface IVideoPlayerProps {
  url: string;
  pauseClosedVideo: boolean;
}

const VideoPlayer: React.FC<IVideoPlayerProps> = ({
  url,
  pauseClosedVideo = true,
}) => {
  const onBuffer = () => {
    // console.log('buffer');
  };

  const videoError = e => {
    console.log('Error', e);
  };

  return (
    <View style={styles.container}>
      <Video
        source={{
          uri: url,
        }}
        // ref={ref => {
        //   videoRef.current = ref;
        // }} // Store reference
        onBuffer={onBuffer}
        onError={videoError}
        style={styles.video}
        controls={false}
        paused={pauseClosedVideo}
        fullscreen={false}
        resizeMode="cover"
        repeat={true}
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
