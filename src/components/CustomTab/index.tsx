import React from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationRoute} from 'react-navigation';
import {BottomTabBar} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {BottomTabBarProps} from 'react-navigation-tabs/lib/typescript/src/types';

interface ITabIconProps {
  route: NavigationRoute;
  focused: boolean;
  tintColor?: string;
  horizontal?: boolean;
}

const TabIcon = ({route, tintColor}: ITabIconProps) => {
  const {routeName} = route;
  let name: string = 'question';
  switch (routeName) {
    case 'Home':
      name = 'home-outline';
      break;
    case 'Post':
      name = 'plus-box';
      break;
    case 'Profile':
      name = 'account-outline';
      break;
    case 'Search':
      name = 'magnify';
      break;
    default:
      name = routeName;
      break;
  }
  return <Icon name={name} color={tintColor} size={20} />;
};

const CustomTab = (props: BottomTabBarProps) => {
  let index: any = props.navigation.state.index;

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
        renderIcon={TabIcon}
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
