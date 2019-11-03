import React from 'react';
import DeviceInfo from 'react-native-device-info';
import SafeAreaView from 'react-native-safe-area-view';
import {StyleSheet, Platform, StatusBar} from 'react-native';

interface IProps {
  removeNotch?: boolean;
}

const safeView = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

const SafeViewWrapper: React.FC<IProps> = ({children, removeNotch}) => {
  if (removeNotch) {
    return <SafeAreaView style={safeView.safeArea}>{children}</SafeAreaView>;
  } else {
    return DeviceInfo.hasNotch() ? (
      <>{children}</>
    ) : (
      <SafeAreaView style={safeView.safeArea}>{children}</SafeAreaView>
    );
  }
};

export default SafeViewWrapper;
