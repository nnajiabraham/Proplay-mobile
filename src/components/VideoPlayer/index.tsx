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
  const vidRef = React.useRef(null);

  // React.useEffect(() => {
  //   console.log(vidRef);
  // }, []);

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
        ref={vidRef}
        onBuffer={onBuffer}
        onError={videoError}
        style={styles.video}
        controls={false}
        paused={pauseClosedVideo}
        fullscreen={false}
        resizeMode="cover"
        repeat={true}
        onLoad={payload => console.log(payload)} //with vidRef.current.seek can reset vid timeline on change
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
