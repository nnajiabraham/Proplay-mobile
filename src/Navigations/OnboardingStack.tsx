import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Notification, Preference, ProsToFollow} from '../screens/Onboarding';
import {OnboardingParamsList} from './paramTypes/OnboardingParams';

interface OnboardingStackProps {}

const Stack = createStackNavigator<OnboardingParamsList>();

const OnboardingStack: React.FC<OnboardingStackProps> = ({}) => {
  return (
    <Stack.Navigator
      // screenOptions={{
      //   header: () => null,
      // }}
      headerMode={'none'}
      initialRouteName="Preference"
    >
      <Stack.Screen name="Preference" component={Preference} />
      <Stack.Screen name="ProsToFollow" component={ProsToFollow} />
      <Stack.Screen name="Notification" component={Notification} />
    </Stack.Navigator>
  );
};

export default OnboardingStack;
