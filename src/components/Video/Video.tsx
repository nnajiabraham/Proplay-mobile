import React from 'react';
import {View, Text, StatusBar} from 'react-native';

const Video = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Video</Text>
      </View>
    </>
  );
};

export default Video;
