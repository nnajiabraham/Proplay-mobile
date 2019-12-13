import React from 'react';
import {Text, StyleSheet} from 'react-native';

const VideoLogoHeader = () => {
  return (
    <>
      <Text style={styles.header}>PROPLAY</Text>
    </>
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

export default VideoLogoHeader;
