import React from 'react';
import {View, StatusBar, StyleSheet, Text, Dimensions} from 'react-native';
import Video from 'react-native-video';
import VideoLogoHeader from './VideoLogoHeader';
const sampleVid = require('../../assets/sampleVid.mp4');

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
    <>
      <View style={styles.video}>
        {/* <View style={styles.logo}>
          <VideoLogoHeader />
        </View> */}
        <Video
          source={{
            uri: url,
          }}
          // source={require('../../assets/sampleVid.mp4')} // Can be a URL or a local file.
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
    </>
  );
};

// Later on in your styles..
var styles = StyleSheet.create({
  video: {
    // justifyContent: 'center',
    // alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('screen').width,
  },
  logo: {
    backgroundColor: '#43c43c',
    position: 'absolute',
    left: 0,
    top: 0,
    marginTop: StatusBar.currentHeight ? 26 : 52, // StatusBar.currentHeight if present has no notch else has notch, double padding
    zIndex: 4,
    alignSelf: 'center',
    // left: 40,
  },
});

export default VideoPlayer;
