import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Video, {OnLoadData, LoadError, OnSeekData} from 'react-native-video';
import Icon from 'react-native-vector-icons/FontAwesome5';
import VideoLoading from './VideoLoading';
import VideoControls from './VideoControls';
import VideoInformation from './VideoInformation';
import {useNavigation} from 'react-navigation-hooks';
import VideoLogoHeader from './VideoLogoHeader';

export interface IVideoPlayerProps {
  url: string;
  videoClosed: boolean;
  seekPosition?: number;
  viewsCount?: string;
  title?: string;
  proPicURL?: string;
  backBtn?: boolean;
}

const VideoPlayer: React.FC<IVideoPlayerProps> = ({
  url,
  videoClosed = false,
  seekPosition,
  viewsCount,
  title,
  proPicURL,
  backBtn = false,
}) => {
  const [isVideoLoaded, setIsVideoLoaded] = React.useState<boolean>(false);
  const [videoPause, setVideoPause] = React.useState<boolean>(true);
  const [videoEnd, setVideoEnd] = React.useState<boolean>(false);
  const {getParam, goBack} = useNavigation();

  const videoUrl = getParam('videoUrl', url);
  const addBackBtn = getParam('addBackBtn', backBtn);
  const videoInfo = getParam('videoInfo', {viewsCount, title, proPicURL});
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
        {backgroundColor: videoPause ? 'rgba(0,0,0,0.8)' : 'transparent'},
      ]}
    >
      {addBackBtn ? (
        <TouchableOpacity
          style={[styles.logo, {left: 50}]}
          onPress={() => goBack()}
        >
          <Icon name="chevron-left" color={'rgba(255,255,255,0.8)'} size={30} />
        </TouchableOpacity>
      ) : null}
      <View style={styles.logo}>
        <VideoLogoHeader />
      </View>
      {isVideoLoaded ? (
        <>
          <TouchableOpacity style={{}} onPress={handleVideoPaused}>
            <VideoControls
              iconColor={videoPause ? 'rgba(255,255,255,0.6)' : 'transparent'}
            />
          </TouchableOpacity>
          {videoPause ? (
            <View style={styles.videoInfoContainer}>
              <VideoInformation
                viewsCount={videoInfo.viewsCount}
                proPicURL={videoInfo.proPicURL}
                title={videoInfo.title}
              />
            </View>
          ) : null}
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
          uri: videoUrl,
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
    backgroundColor: '#000',
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
    top: '78%',
    width: '100%',
  },
  logo: {
    position: 'absolute',
    top: 0,
    zIndex: 4,
    marginTop: StatusBar.currentHeight ? 26 : 52, // StatusBar.currentHeight if present has no notch else has notch, double padding
  },
});

export default VideoPlayer;
