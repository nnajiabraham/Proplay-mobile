import React from 'react';
import {View, Text, StyleSheet, ImageBackground, Image} from 'react-native';
import {fetchVideo} from '../../api/fetchVideo';
const asd = fetchVideo();

const RecentTipsCard = ({}) => {
  return (
    <View
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
          uri: asd[0].thumbnail,
        }}
        style={styles.thumbnailImg}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.5)',
            padding: 10,
          }}
        >
          <View style={styles.imgView}>
            <Image
              source={{
                uri: asd[3].proPicURL,
              }}
              style={styles.profileImg}
            />
            <Text style={{color: '#fff'}}> {asd[0].proName}</Text>
          </View>
          <Text>lkjh</Text>
        </View>
      </ImageBackground>
    </View>
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
  },
  profileImg: {
    width: 20,
    height: 20,
    borderRadius: 40 / 2,
    overflow: 'hidden',
    marginRight: 5,
  },
});

export default RecentTipsCard;
