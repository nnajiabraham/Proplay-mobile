import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

interface IVideoInformation {
  viewsCount?: string;
  title?: string;
  proPicURL?: string;
}

const VideoInformation: React.FC<IVideoInformation> = ({
  viewsCount,
  title,
  proPicURL,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        width: '100%',
      }}
    >
      <View
        style={{
          flexDirection: 'column',
          width: 300,
          flexShrink: 1,
          marginRight: 24,
          justifyContent: 'space-between',
        }}
      >
        <Text
          style={{
            color: '#fff',
            fontSize: 14,
            fontWeight: '300',
          }}
        >{`${viewsCount} views`}</Text>

        <Text
          numberOfLines={3}
          adjustsFontSizeToFit
          style={{
            color: '#fff',
            fontSize: 20,
            fontWeight: '500',
            fontStyle: 'normal',
            lineHeight: 24,
          }}
        >
          {title}
        </Text>
      </View>
      <View style={styles.imgView}>
        <Image
          source={{
            uri: proPicURL,
          }}
          style={styles.profileImg}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imgView: {
    justifyContent: 'center',
  },
  profileImg: {
    width: 50,
    height: 50,
    borderRadius: 40 / 2,
    overflow: 'hidden',
  },
});

export default VideoInformation;
