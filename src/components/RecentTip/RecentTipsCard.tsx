import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';

interface IRecentTipsCard {
  thumbnailUrl: string;
  proPicURL: string;
  proName: string;
  videoTitle: string;
}

const RecentTipsCard: React.FC<IRecentTipsCard> = ({
  thumbnailUrl,
  proPicURL,
  proName,
  videoTitle,
}) => {
  return (
    <TouchableOpacity
      style={{
        width: 130,
        height: 184,
        borderRadius: 5,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        marginRight: 10,
      }}
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

export default RecentTipsCard;
