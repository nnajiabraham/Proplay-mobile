import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type OnboardingParamsList = {
  Preference: undefined;
  ProsToFollow: undefined;
  Notification: undefined;
};

export type OnboardingNavProps<T extends keyof OnboardingParamsList> = {
  navigation: StackNavigationProp<OnboardingParamsList, T>;
  route: RouteProp<OnboardingParamsList, T>;
};
