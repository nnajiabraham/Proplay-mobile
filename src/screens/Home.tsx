import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Platform,
  Dimensions,
} from 'react-native';
import ContentLoader, {Rect} from 'react-content-loader/native';
import SafeAreaView from 'react-native-safe-area-view';
import SafeViewWrapper from '../components/SafeViewWrapper';
import VideoFlatList from '../components/VideoFlatList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('screen').width,
  },
});

const VideoLoader: React.FC = () => (
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
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <VideoFlatList />
      </View>
    </SafeViewWrapper>
  );
};

export default Home;
