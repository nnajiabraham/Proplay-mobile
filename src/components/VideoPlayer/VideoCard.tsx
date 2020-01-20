import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {withNavigation, NavigationParams} from 'react-navigation';

interface ITipsCard extends NavigationParams {
  thumbnailUrl: string;
  proPicURL: string;
  proName: string;
  videoTitle: string;
  viewStyle?: StyleProp<ViewStyle>;
  videoUrl?: string;
}

const VideoCard: React.FC<ITipsCard> = ({
  thumbnailUrl,
  proPicURL,
  proName,
  videoTitle,
  viewStyle,
  videoUrl,
  navigation,
}) => {
  return (
    <TouchableOpacity
      style={[
        {
          width: 130,
          height: 184,
          borderRadius: 5,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          marginRight: 10,
        },
        viewStyle,
      ]}
      onPress={() =>
        videoUrl &&
        navigation.push('VideoPlayer', {
          videoUrl,
          addBackBtn: true,
          videoInfo: {
            viewsCount: '23',
            title: videoTitle,
            proPicURL,
          },
        })
      }
    >
      <ImageBackground
        source={{
          uri: thumbnailUrl,
        }}
        style={styles.thumbnailImg}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.5)',
            padding: 10,
            justifyContent: 'space-between',
          }}
        >
          <View style={styles.imgView}>
            <Image
              source={{
                uri: proPicURL,
              }}
              style={styles.profileImg}
            />
            <Text
              style={{
                color: '#fff',
                fontSize: 12,
                fontWeight: '500',
                fontStyle: 'normal',
              }}
            >
              {proName}
            </Text>
          </View>
          <Text
            style={{
              color: '#fff',
              fontSize: 14,
              fontWeight: '500',
            }}
          >
            {videoTitle}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  thumbnailImg: {
    flex: 1,
    borderRadius: 5,
    overflow: 'hidden',
  },
  imgView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileImg: {
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
    overflow: 'hidden',
    // marginRight: 15,
  },
});

export default withNavigation(VideoCard);
