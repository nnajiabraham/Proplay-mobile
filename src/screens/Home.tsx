import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Platform,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import ContentLoader, {Rect} from 'react-content-loader/native';
import SafeViewWrapper from '../components/SafeViewWrapper/SafeViewWrapper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {},
});

const VideoLoader = () => (
  <ContentLoader
    height={Dimensions.get('window').height}
    width={Dimensions.get('screen').width}
    speed={2}
    primaryColor="#333"
    secondaryColor="#ecebeb"
    animate={false}
  >
    <Rect
      x="0"
      y="0"
      rx="5"
      ry="5"
      width={Dimensions.get('window').width}
      height={Dimensions.get('window').height}
    />
  </ContentLoader>
);

const Home = () => {
  return (
    <SafeViewWrapper>
      <StatusBar animated />
      <View style={styles.container}>
        <VideoLoader />
      </View>
    </SafeViewWrapper>
  );
};

export default Home;
