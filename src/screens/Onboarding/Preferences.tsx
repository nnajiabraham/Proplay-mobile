import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Dimensions,
  Platform,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from 'react-navigation-hooks';
import {useDispatch} from 'react-redux';

import SafeViewWrapper from '../../components/SafeViewWrapper';
import {SportCategories} from '../../api/fetchPreference';
import PreferenceCategory from '../../components/PreferenceCategory';
import Header from '../../components/Header';
import {Button} from '../../components/Button';
import {updatePreferenceAction} from '../../store/actions/preferences/actions';
import {setFirstTimeUserAction} from '../../store/actions/userSettings/actions';

const Preferences: React.FC = () => {
  const {navigate} = useNavigation();
  const dispatch = useDispatch();

  const [selectedPreferenceState, setPreferenceState] = React.useState<
    Array<string>
  >([]);

  // const onSelect = React.useCallback(
  //   key => {
  //     selectedPreferenceState.includes(key)
  //       ? setPreferenceState(
  //           selectedPreferenceState.filter(option => key !== option),
  //         )
  //       : setPreferenceState([...selectedPreferenceState, key]);
  //   },
  //   [selectedPreferenceState],
  // );

  const onSelect = (selected: boolean) => {};

  const actionButtonsHandler = React.useCallback(
    (buttonKey: string) => () => {
      if (buttonKey == 'Next' && selectedPreferenceState.length) {
        dispatch(updatePreferenceAction(selectedPreferenceState));
        dispatch(setFirstTimeUserAction(false));
        navigate('ProsToFollow');
      }

      if (buttonKey == 'Skip') {
        dispatch(updatePreferenceAction(selectedPreferenceState));
        dispatch(setFirstTimeUserAction(false));
        navigate('Home');
      }
    },
    [dispatch, selectedPreferenceState],
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
          {SportCategories.map(sport => (
            <PreferenceCategory
              key={sport.id}
              header={sport.category}
              subcategories={sport.subcategories.map(subcategory => ({
                id: subcategory.id,
                value: subcategory.position,
              }))}
              onSelect={onSelect}
              selected={selectedPreferenceState}
            />
          ))}
        </ScrollView>
        <View style={styles.skipNowView}>
          <TouchableOpacity onPress={actionButtonsHandler('Skip')}>
            <Text style={styles.skipForNowBtn}>Skip For Now</Text>
          </TouchableOpacity>
          <Button
            touchableProps={{onPress: actionButtonsHandler('Next')}}
            active={selectedPreferenceState.length > 0}
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
});

export default Preferences;
