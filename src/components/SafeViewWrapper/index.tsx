import React from 'react';
import {StyleSheet, Platform, StatusBar, SafeAreaView} from 'react-native';

const safeView = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});

const SafeViewWrapper: React.FC = ({children}) => {
  return (
    // <>{children}</> leaving this cause was testing support for notch if needed,
    <SafeAreaView style={safeView.AndroidSafeArea}>{children}</SafeAreaView>
  );
};

export default SafeViewWrapper;