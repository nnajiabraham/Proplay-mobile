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
import {SportCategories} from 'src/api/fetchPreference';

const ProsToFollow = () => {
  return (
    <SafeViewWrapper removeNotch={true}>
      <View style={styles.container}>
        <ScrollView
          style={{}}
          contentContainerStyle={styles.contentContainerStyle}
        >
          <View style={styles.header}>
            <Header label={'Pros for you to follow'} />
            <Text style={styles.subHeading}>
              When you follow someone, you’ll see their tips in your Discover
              Timeline
            </Text>
          </View>
        </ScrollView>
        <View style={styles.skipNowView}>
          <TouchableOpacity onPress={() => 'Skip'}>
            <Text style={styles.skipForNowBtn}>Skip For Now</Text>
          </TouchableOpacity>
          <Button
            // touchableProps={}
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
  scrollView: {
    flexGrow: 1,
    minHeight: Dimensions.get('screen').height,
  },
  contentContainerStyle: {
    flex: 1,
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
  },
  header: {
    marginTop: Platform.OS == 'android' ? StatusBar.currentHeight : 50,
    marginBottom: Platform.OS == 'android' ? StatusBar.currentHeight : 50,
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
