import React from 'react';
import {StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';

const VideoLoading = () => {
  const animationRef = React.useRef<any>(null);

  React.useEffect(() => {
    animationRef?.current?.play();
  }, []);

  return (
    <LottieView
      style={styles.lottie}
      source={require('../../assets/lottie/loaders/soundwave-white.json')}
      autoPlay
      loop
      ref={animationRef}
    />
  );
};

const styles = StyleSheet.create({
  lottie: {
    backgroundColor: 'transparent',
    width: 80,
    height: 80,
  },
});

export default VideoLoading;
