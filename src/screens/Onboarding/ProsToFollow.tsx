import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Platform,
  StatusBar,
  Dimensions,
} from 'react-native';
import SafeViewWrapper from '../../components/SafeViewWrapper';
import Header from '../../components/Header';
import {Button} from '../../components/Button';
import {ProSuggestionList} from '../../api/prosToFollow';
import {ProToFollowCard} from '../../components/ProToFollowCard';
import {useNavigation} from 'react-navigation-hooks';

const ProsToFollow = () => {
  const {navigate} = useNavigation();
  return (
    <SafeViewWrapper removeNotch={true}>
      <View style={styles.container}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.contentContainerStyle}
        >
          <View style={styles.header}>
            <Header label={'Pros for you to follow'} />
            <Text style={styles.subHeading}>
              When you follow someone, you’ll see their tips in your Discover
              Timeline
            </Text>
            <Header label={'You may be interested in'} style={styles.subHead} />
          </View>
          {ProSuggestionList.map(pros => (
            <ProToFollowCard
              key={pros.id}
              nameLabel={pros.name}
              headlineLabel={pros.headline}
              imgUrl={pros.profile_picture}
            />
          ))}
        </ScrollView>
        <View style={styles.skipNowView}>
          <TouchableOpacity onPress={() => navigate('Home')}>
            <Text style={styles.skipForNowBtn}>Skip For Now</Text>
          </TouchableOpacity>
          <Button
            touchableProps={{onPress: () => navigate('Home')}}
            active={true}
          >
            Next
          </Button>
        </View>
      </View>
    </SafeViewWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subHead: {
    marginTop: 21,
    marginBottom: 21,
  },
  scrollView: {
    flex: 1,
  },
  contentContainerStyle: {
    flexGrow: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  header: {
    marginTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
    marginBottom: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
  },
  subHeading: {
    fontSize: 16,
    fontWeight: '300',
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: 0,
    color: '#000000',
  },
  skipNowView: {
    display: 'flex',
    flexDirection: 'row',
    width: Dimensions.get('screen').width,
    height: 59,
    borderStyle: 'solid',
    borderTopWidth: 1,
    borderColor: '#979797',
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  skipForNowBtn: {
    fontSize: 16,
    fontWeight: '300',
    fontStyle: 'normal',
    lineHeight: 20,
    letterSpacing: 0,
    color: '#000000',
  },
});

export default ProsToFollow;
