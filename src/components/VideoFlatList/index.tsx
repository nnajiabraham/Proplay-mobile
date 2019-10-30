import React, {Component} from 'react';
import {FlatList, StyleSheet, View, Dimensions, StatusBar} from 'react-native';
import VideoPlayer from '../VideoPlayer';

const VideoFlatList: React.FC = () => {
  return (
    <>
      <FlatList
        data={[{key: '1'}, {key: '2'}, {key: '3'}, {key: '4'}]}
        renderItem={({item}) => <VideoPlayer />}
        style={styles.container}
        keyExtractor={item => item.key}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('screen').width,
  },
});

export default VideoFlatList;
