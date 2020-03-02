import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {ISportSubCategory} from 'src/api/fetchPreference';

export type SearchParamList = {
  Home: undefined;
  Search: undefined;
  Post: undefined;
  Profile: undefined;
  VideoCard: undefined;
  VideoPlayer: {
    videoUrl: string;
    addBackBtn: boolean;
    videoInfo: {
      viewsCount: string;
      title: string;
      proPicURL: string;
    };
  };
  SearchResultList: undefined;
  SearchCategory: {
    header: string;
    data: {
      categories: ISportSubCategory[];
      subCategories: string[];
    };
  };
};

export type SearchStackProps<T extends keyof SearchParamList> = {
  navigation: StackNavigationProp<SearchParamList, T>;
  route: RouteProp<SearchParamList, T>;
};
