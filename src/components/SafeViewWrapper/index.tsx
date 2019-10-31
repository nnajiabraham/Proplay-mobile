import React from 'react';
import DeviceInfo from 'react-native-device-info';
import SafeAreaView from 'react-native-safe-area-view';
import {StyleSheet, Platform, StatusBar} from 'react-native';

const safeView = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: 'white',
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});

const SafeViewWrapper: React.FC = ({children}) => {
  return DeviceInfo.hasNotch() ? (
    <>{children}</>
  ) : (
    <SafeAreaView style={{flex: 1}}>{children}</SafeAreaView>
  );
};

export default SafeViewWrapper;
