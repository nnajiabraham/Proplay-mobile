import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

interface IconProps {
  iconColor?: string;
}

const VideoControls: React.FC<IconProps> = ({iconColor}) => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
      }}
    >
      <Icon
        name="play"
        color={iconColor ? iconColor : 'rgba(255,255,255,0.6)'}
        size={62}
      />
    </View>
  );
};

export default VideoControls;
