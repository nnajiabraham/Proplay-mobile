import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import ToggleSelectButton from '../ToggleSelectButton';

interface IProToFollowCard {
  nameLabel: string;
  headlineLabel: string;
  imgUrl: string;
  onFollow: (followed: boolean) => void;
}

export const ProToFollowCard: React.FC<IProToFollowCard> = ({
  nameLabel,
  headlineLabel,
  imgUrl,
  onFollow,
}) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.imgView}>
          <Image
            source={{
              uri: imgUrl,
            }}
            style={styles.profileImg}
          />
        </View>
        <View style={styles.bioContainer}>
          <View style={styles.bioView}>
            <Text style={styles.nameText}>{nameLabel}</Text>
            <Text style={styles.headlineText}>{headlineLabel}</Text>
          </View>
        </View>
        <ToggleSelectButton
          label={'Follow'}
          viewStyle={styles.followBtnView}
          onSelect={onFollow}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  imgView: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 'auto',
    height: 50,
    marginBottom: 20,
    marginLeft: 8,
    justifyContent: 'center',
  },
  profileImg: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    overflow: 'hidden',
  },
  bioContainer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 'auto',
    marginRight: 24,
    marginLeft: 10,
    justifyContent: 'center',
  },
  bioView: {
    flex: 1,
    justifyContent: 'space-around',
  },
  nameText: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 20,
    color: '#000000',
  },
  headlineText: {
    fontSize: 14,
    fontWeight: '300',
    fontStyle: 'normal',
    color: '#000000',
  },
  followBtnView: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 'auto',
    paddingTop: 7,
    paddingBottom: 7,
  },
});
