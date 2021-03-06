import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {OnboardingNavProps} from 'src/Navigations/paramTypes/OnboardingParams';
import {SportCategories} from '../../api/fetchPreference';
import {Button} from '../../components/Button';
import Header from '../../components/Header';
import PreferenceCategory from '../../components/PreferenceCategory';
import SafeViewWrapper from '../../components/SafeViewWrapper';
import {updatePreferenceAction} from '../../store/actions/preferences/actions';
import {setFirstTimeUserAction} from '../../store/actions/userSettings/actions';

const Preferences: React.FC<OnboardingNavProps<'Preference'>> = () => {
  const {navigate} = useNavigation();
  const dispatch = useDispatch();

  const [selectedPreferenceState, setPreferenceState] = React.useState<
    Array<string>
  >([]);

  const onSelect = (selectedOptions: Array<string>) => {
    setPreferenceState(selectedOptions);
  };

  const actionButtonsHandler = React.useCallback(
    (buttonKey: string) => () => {
      if (buttonKey == 'Next' && selectedPreferenceState.length) {
        dispatch(updatePreferenceAction(selectedPreferenceState));
        navigate('ProsToFollow');
      }

      if (buttonKey == 'Skip') {
        dispatch(updatePreferenceAction(selectedPreferenceState));
        dispatch(setFirstTimeUserAction(false));
      }
    },
    [dispatch, selectedPreferenceState],
  );

  return (
    <SafeViewWrapper removeNotch={true}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.header}>
            <Header
              label={'What are you interested in?'}
              style={{fontWeight: 'bold'}}
            />
            <Text style={styles.subHeading}>
              Pick your favorite interests to find pros and tips that can help
              you achieve your goals
            </Text>
          </View>
          <PreferenceCategory
            categories={SportCategories}
            selectedOptions={onSelect}
          />
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
    paddingLeft: 20,
    paddingRight: 20,
  },
  header: {
    marginTop: Platform.OS == 'android' ? StatusBar.currentHeight : 20,
    marginBottom: Platform.OS == 'android' ? StatusBar.currentHeight : 20,
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
