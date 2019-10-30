import React from 'react';
import {Text, StyleSheet, Dimensions} from 'react-native';

const VideoLogoHeader = () => {
  return (
    <>
      <Text style={styles.header}>PROPLAY</Text>
    </>
  );
};

var styles = StyleSheet.create({
  header: {
    // flex: 1,
    // textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    // opacity: 0.8,
    fontSize: 24,
    fontStyle: 'normal',
    letterSpacing: 1,
    color: '#ffffff',
  },
});

export default VideoLogoHeader;
