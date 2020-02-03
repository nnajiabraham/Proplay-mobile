import React from 'react';
import {View, StatusBar, StyleSheet, Dimensions} from 'react-native';
import SafeViewWrapper from '../../components/SafeViewWrapper';
// import VideoFlatList from '../../components/VideoFlatList/VideoFlatList2';
import VideoFlatList from '../../components/VideoFlatList/VideoFlatList3';
// import VideoFlatList from '../../components/VideoFlatList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
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
