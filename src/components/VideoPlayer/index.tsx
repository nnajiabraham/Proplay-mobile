import React from 'react';
import {View, StatusBar, StyleSheet, Text, Dimensions} from 'react-native';
import Video from 'react-native-video';
import VideoLogoHeader from './VideoLogoHeader';
const sampleVid = require('../../assets/sampleVid.mp4');

const VideoPlayer = ({url}: any) => {
  const onBuffer = () => {
    console.log('buffer');
  };

  const videoError = e => {
    console.log('Error', e);
  };

  return (
    <>
      <View style={styles.video}>
        <View style={styles.logo}>
          <VideoLogoHeader />
        </View>
        <Video
          source={{
            uri:
              'https://testingtestingtestingtestingbyabe.s3.amazonaws.com/sampleVid.mp4',
          }}
          // source={require('../../assets/sampleVid.mp4')} // Can be a URL or a local file.
          // ref={ref => {
          //   videoRef.current = ref;
          // }} // Store reference
          onBuffer={onBuffer}
          onError={videoError}
          style={styles.video}
          controls={true}
          paused={true}
          fullscreen={false}
          resizeMode="cover"
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
    position: 'absolute',
    marginTop: StatusBar.currentHeight ? 26 : 52, // StatusBar.currentHeight if present has no notch else has notch, double padding
    zIndex: 4,
    alignSelf: 'center',
  },
});

export default VideoPlayer;
