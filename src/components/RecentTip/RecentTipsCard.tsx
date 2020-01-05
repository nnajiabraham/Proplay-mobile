import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
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
        style={styles.profileImg}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
          }}
        >
          <Text>lkjh</Text>
          <Text>lkjh</Text>
          <Text>lkjh</Text>
          <Text>lkjh</Text>
          <Text>lkjh</Text>
          <Text>lkjh</Text>
          <Text>lkjh</Text>
          <Text>lkjh</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  profileImg: {
    flex: 1,
    borderRadius: 5,
    overflow: 'hidden',
  },
});

export default RecentTipsCard;
