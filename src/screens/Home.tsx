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
    justifyContent: 'center',
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
  },
});

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
