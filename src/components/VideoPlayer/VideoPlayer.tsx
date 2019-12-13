import React from 'react';
import {View, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import Video, {OnLoadData, LoadError} from 'react-native-video';
import VideoLoading from './VideoLoading';
import VideoControls from './VideoControls';

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
  const [isVideoLoaded, setIsVideoLoaded] = React.useState<boolean>(false);
  const [isVideoReady, setIsVideoReady] = React.useState<boolean>(false);
  const [videoPause, setVideoPause] = React.useState<boolean>(true);

  const player = React.useRef<any>(null);

  const onBuffer = () => {
    console.log('bufferring, ');
  };

  const videoError = (e: LoadError) => {
    console.log('Error', e);
  };

  const onVideoLoad = () => (_: OnLoadData) => {
    setIsVideoLoaded(true);
  };

  const onVideoReady = () => () => {
    setIsVideoReady(true);
  };

  const seekVideoToPosition = (position: number) => {
    player?.current?.seek(position);
  };

  const handleVideoPaused = () => {
    setVideoPause(!videoPause);
  };

  React.useEffect(() => {
    //seek can only be run after video is loaded
    //run every time video is closed/swiped away so that when reopened we restart to seek position
    if (isVideoLoaded) {
      seekPosition ? seekVideoToPosition(seekPosition) : seekVideoToPosition(0);
    }
  }, [videoClosed, isVideoLoaded]);

  const videoLoadingRender = () =>
    isVideoReady ? (
      <TouchableOpacity
        style={[
          videoPause ? styles.videoPausedStyle : styles.videoPlayingStyle,
        ]}
        onPress={handleVideoPaused}
      >
        <VideoControls
          iconColor={videoPause ? 'rgba(255,255,255,0.6)' : 'transparent'}
        />
      </TouchableOpacity>
    ) : (
      <View style={styles.loading}>
        <VideoLoading />
      </View>
    );

  return (
    <View style={styles.container}>
      {videoLoadingRender()}
      <Video
        source={{
          uri: url,
        }}
        ref={player}
        onBuffer={onBuffer}
        onError={videoError}
        style={styles.video}
        controls={false}
        paused={videoClosed ? videoClosed : videoPause}
        fullscreen={false}
        resizeMode="cover"
        repeat={false}
        onLoad={onVideoLoad()}
        onReadyForDisplay={onVideoReady()}
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
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
  },
  loading: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
  },
  videoPausedStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  videoPlayingStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    backgroundColor: 'transparent',
  },
});

export default VideoPlayer;
