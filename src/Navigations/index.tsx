import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {useSelector} from 'react-redux';
import {ICombineState} from '../store/reducers';
import AppStack from './AppStack';
import OnboardingStack from './OnboardingStack';

interface indexProps {}

const AppNavigationContainer: React.FC<indexProps> = ({}) => {
  const userSettings = useSelector(
    (state: ICombineState) => state.userSettings,
  );

  return (
    <NavigationContainer>
      {userSettings.user.firstTimeUser ? <OnboardingStack /> : <AppStack />}
    </NavigationContainer>
  );
};
export default AppNavigationContainer;
