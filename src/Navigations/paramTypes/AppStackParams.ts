import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type AppTabParamList = {
  Home: undefined;
  Search: undefined;
  Post: undefined;
  Profile: undefined;
};

export type AppTabNavProps<T extends keyof AppTabParamList> = {
  navigation: StackNavigationProp<AppTabParamList, T>;
  route: RouteProp<AppTabParamList, T>;
};

export type AppStackParamList = {
  App: undefined;
  // VideoCard: undefined;
  // VideoPlayer: {
  //   videoUrl: string;
  //   addBackBtn: boolean;
  //   videoInfo: {
  //     viewsCount: string;
  //     title: string;
  //     proPicURL: string;
  //   };
  // };
};

export type AppStackProps<T extends keyof AppStackParamList> = {
  navigation: StackNavigationProp<AppStackParamList, T>;
  route: RouteProp<AppStackParamList, T>;
};
