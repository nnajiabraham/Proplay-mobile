import React from 'react';
import {View, StyleSheet} from 'react-native';
import SafeViewWrapper from '../../components/SafeViewWrapper';
import LottieView from 'lottie-react-native';

const VideoLoading = () => {
  const animationRef = React.useRef<any>(null);

  React.useEffect(() => {
    animationRef?.current?.play();
  }, []);

  return (
    <SafeViewWrapper>
      <View style={styles.wrapper}>
        <LottieView
          style={styles.lottie}
          source={require('../../assets/lottie/loaders/soundwave-white.json')}
          autoPlay
          loop
          ref={animationRef}
        />
      </View>
    </SafeViewWrapper>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lottie: {
    backgroundColor: 'transparent',
    width: 80,
    height: 80,
  },
});

export default VideoLoading;
