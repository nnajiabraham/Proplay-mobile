import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Platform,
  Dimensions,
} from 'react-native';
import {useSelector} from 'react-redux';
import SafeViewWrapper from '../components/SafeViewWrapper';
import {ICombineState} from '../store/reducers';
import {useNavigation} from 'react-navigation-hooks';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
  },
});

const RouteDecision: React.FC = () => {
  const userSettings = useSelector(
    (state: ICombineState) => state.userSettings,
  );
  const {navigate} = useNavigation();

  React.useEffect(() => {
    userSettings.user.firstTimeUser
      ? navigate('PreferenceStack')
      : navigate('Home');
  }, []);

  return (
    <SafeViewWrapper>
      <StatusBar barStyle="light-content" />
      {
        // TODO change to a better loading component, lottie loading will be cool
      }
      <View style={styles.container}></View>
    </SafeViewWrapper>
  );
};

export default RouteDecision;
