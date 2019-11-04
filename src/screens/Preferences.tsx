import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  SectionList,
  FlatList,
  Dimensions,
  Platform,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {useNavigation, useNavigationParam} from 'react-navigation-hooks';

import SafeViewWrapper from '../components/SafeViewWrapper';
import {SportCategories, ISportCategories} from '../api/fetchPreference';
import PreferenceCategory from '../components/PreferenceCategory';
import Header from '../components/Header';

const Preferences: React.FC = () => {
  const {navigate} = useNavigation();

  const [selectedPreferenceState, setPreferenceState] = React.useState<
    Array<string>
  >([]);

  const onSelect = React.useCallback(
    key => {
      selectedPreferenceState.includes(key)
        ? setPreferenceState(
            selectedPreferenceState.filter(option => key !== option),
          )
        : setPreferenceState([...selectedPreferenceState, key]);
    },
    [selectedPreferenceState],
  );

  return (
    <SafeViewWrapper removeNotch={true}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.header}>
            <Header label={'What are you interested in?'} />
            <Text style={styles.subHeading}>
              Pick your favorite interests to find pros and tips that can help
              you achieve your goals
            </Text>
          </View>
          {SportCategories.map(item => (
            <PreferenceCategory
              key={Math.random()
                .toString(36)
                .substring(7)}
              header={item.category}
              subcategories={item.subcategories}
              onSelect={onSelect}
              selected={selectedPreferenceState}
            />
          ))}
        </ScrollView>
        <View style={styles.skipNowView}>
          <TouchableOpacity onPress={() => navigate('Home')}>
            <Text style={styles.skipForNowBtn}>Skip For Now</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.nextBtn,
              {
                backgroundColor:
                  selectedPreferenceState.length > 0 ? '#e11c20' : '#fff',
              },
            ]}
          >
            <Text
              style={[
                styles.nextBtnText,
                {
                  color:
                    selectedPreferenceState.length > 0 ? '#fff' : '#e11c20',
                },
              ]}
            >
              Next
            </Text>
          </TouchableOpacity>
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
    justifyContent: 'space-around',
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
  nextBtn: {
    borderColor: '#e11c20',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 5,
    padding: 11,
  },
  nextBtnText: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '300',
    fontStyle: 'normal',
    lineHeight: 20,
    color: '#e11c20',
  },
});

export default Preferences;
