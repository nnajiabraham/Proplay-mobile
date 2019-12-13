import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SafeViewWrapper from '../../components/SafeViewWrapper';

const VideoLoading = () => {
  return (
    <SafeViewWrapper>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Profile Page</Text>
      </View>
    </SafeViewWrapper>
  );
};

const styles = StyleSheet.create({
  header: {
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    opacity: 0.8,
    fontSize: 24,
    fontStyle: 'normal',
    letterSpacing: 1,
    color: '#ffffff',
  },
});

export default VideoLoading;
