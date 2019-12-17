import React from 'react';
import {View, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import Video, {OnLoadData, LoadError, OnSeekData} from 'react-native-video';
import VideoLoading from './VideoLoading';
import VideoControls from './VideoControls';
import VideoInformation from './VideoInformation';

export interface IVideoPlayerProps {
  url: string;
  videoClosed: boolean;
  seekPosition?: number;
  viewsCount?: string;
  title?: string;
  proPicURL?: string;
}

const VideoPlayer: React.FC<IVideoPlayerProps> = ({
  url,
  videoClosed = true,
  seekPosition,
  viewsCount,
  title,
  proPicURL,
}) => {
  const [isVideoLoaded, setIsVideoLoaded] = React.useState<boolean>(false);
  const [videoPause, setVideoPause] = React.useState<boolean>(true);
  const [videoEnd, setVideoEnd] = React.useState<boolean>(false);

  const player = React.useRef<any>(null);

  const onBuffer = () => {
    // console.log('bufferring, ');
  };

  const videoError = (e: LoadError) => {
    console.log('Error', e);
  };

  const onVideoLoad = (_: OnLoadData) => {
    setIsVideoLoaded(true);
  };

  const seekVideoToPosition = (position: number) => {
    player?.current?.seek(position);
  };

  const handleVideoPaused = () => {
    setVideoPause(!videoPause);
  };

  const onVideoEnd = () => {
    if (!videoClosed) {
      console.log('ended');
      setVideoEnd(true);
      seekVideoToPosition(0);
    }
  };

  const onVideoEndReset = (seekTime: number) => {
    if (seekTime == 0 && videoEnd) {
      setVideoPause(!videoPause);
      setVideoEnd(false);
    }
  };

  const onSeekHandler = ({seekTime}: OnSeekData) => {
    onVideoEndReset(seekTime);
  };

  React.useEffect(() => {
    //seek can only be run after video is loaded
    //run every time video is closed/swiped away so that when reopened we restart to seek position
    if (isVideoLoaded) {
      seekPosition ? seekVideoToPosition(seekPosition) : seekVideoToPosition(0);
    }

    if (videoClosed) {
      setVideoPause(true);
    }

    return () => {
      setVideoPause(true);
      seekVideoToPosition(0);
    };
  }, [videoClosed, isVideoLoaded]);

  const videoLoadingRender = () => (
    <View
      style={[
        styles.overlayView,
        {backgroundColor: videoPause ? 'rgba(0,0,0,0.6)' : 'transparent'},
      ]}
    >
      {isVideoLoaded ? (
        <>
          <TouchableOpacity style={{}} onPress={handleVideoPaused}>
            <VideoControls
              iconColor={videoPause ? 'rgba(255,255,255,0.6)' : 'transparent'}
            />
          </TouchableOpacity>
          <View
            style={[
              styles.videoInfoContainer,
              !videoPause ? {display: 'none'} : {},
            ]}
          >
            <VideoInformation
              viewsCount={viewsCount}
              proPicURL={proPicURL}
              title={title}
            />
          </View>
        </>
      ) : (
        <VideoLoading />
      )}
    </View>
  );

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
        paused={videoClosed ? videoClosed : videoPause}
        fullscreen={false}
        resizeMode="cover"
        repeat={false}
        onLoad={onVideoLoad}
        onEnd={onVideoEnd}
        onSeek={onSeekHandler}
      />
      {videoLoadingRender()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('screen').width,
  },
  video: {
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
  },
  overlayView: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('screen').width,
  },
  videoInfoContainer: {
    position: 'absolute',
    zIndex: 5,
    top: '80%',
    width: '100%',
  },
});

export default VideoPlayer;
