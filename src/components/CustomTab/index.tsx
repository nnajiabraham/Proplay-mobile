import {BottomTabBar, BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, View} from 'react-native';

const CustomTab = (props: BottomTabBarProps) => {
  let index: any = props.state.index;

  const inactiveTintColorForVideo = 'rgba(255,255,255,0.6)';
  const inactiveTintColor = 'rgba(0,0,0,0.6)';

  return (
    <View
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <BottomTabBar
        {...props}
        style={
          homeStackStyles[index]
            ? homeStackStyles[index]
            : homeStackStyles.default
        }
        activeTintColor={
          homeStackStyles[index]
            ? homeStackStyles[index].color
            : homeStackStyles.default.color
        }
        inactiveTintColor={
          index === 0 ? inactiveTintColorForVideo : inactiveTintColor
        }
      />
    </View>
  );
};

const homeStackStyles = StyleSheet.create({
  0: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    color: '#fff',
  },
  default: {backgroundColor: '#fff', color: '#000'},
});

export default CustomTab;
