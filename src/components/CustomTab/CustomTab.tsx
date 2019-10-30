import React from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationRoute} from 'react-navigation';
import {BottomTabBar} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
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

  if (routeName == 'Home') {
    name = 'home';
  } else if (routeName == 'Search') {
    name = 'search';
  } else if (routeName == 'Profile') {
    name = 'person';
  }
  return <Icon name={name} color={tintColor} size={20} />;
};

const CustomTab = (props: BottomTabBarProps) => {
  //   console.log('props', props.navigation.state.index);
  let index = props.navigation.state.index;
  const style = homeStackStyles[index] as any;
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
        style={style}
        activeTintColor={style.color}
        activeBackgroundColor={style.backgroundColor}
      />
    </View>
  );
};

const homeStackStyles = StyleSheet.create({
  0: {
    backgroundColor: 'transparent',
    color: '#fff',
  },
  1: {
    backgroundColor: '#fff',
    color: '#000',
  },
  2: {
    backgroundColor: '#fff',
    color: '#000',
  },
});

export default CustomTab;
