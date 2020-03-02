import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {SearchStackProps} from 'src/navigations/paramTypes/SearchParams';
import {fetchVideo} from '../../api/fetchVideo';
import {fetchSearchList} from '../../api/searchFetch';
import Header from '../../components/Header';
import {RecentTipCarousel} from '../../components/RecentTip';
import SafeViewWrapper from '../../components/SafeViewWrapper';
import SearchBar from '../../components/SearchBar';
import ToggleSelectButton from '../../components/ToggleSelectButton';
// import {ISportSubCategory} from '../../api/fetchPreference';
// import {useNavigation} from 'react-navigation-hooks';

// interface ITry {
//   header: string;
//   data: {
//     category: Array<ISportSubCategory>;
//     subCategories: Array<string>;
//   };
// }

const Search = ({navigation, route}: SearchStackProps<'Search'>) => {
  const sportList = fetchSearchList();
  const recentVideoTips = fetchVideo();
  // const {navigate} = useNavigation();

  return (
    <SafeViewWrapper removeNotch>
      <ScrollView
        style={{
          marginBottom: 60,
        }}
        contentContainerStyle={{
          backgroundColor: '#fff',
          paddingTop: 20,
          paddingLeft: 20,
        }}
      >
        <Header
          label="Search"
          style={{
            fontWeight: 'bold',
            color: '#000000',
            marginBottom: 16,
            fontSize: 34,
          }}
        />
        <SearchBar
          onSearch={searchString => {
            console.log(searchString);
            navigation!.push('SearchResultList');
          }}
        />
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 40,
            marginBottom: 15,
          }}
        >
          <Header
            label="Recent Tips"
            style={{
              fontSize: 24,
              fontWeight: 'bold',
              fontStyle: 'normal',
              color: '#000000',
              marginBottom: 16,
            }}
          />
          <TouchableOpacity
            style={{marginRight: 20}}
            onPress={() => navigation!.push('SearchResultList')}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: '300',
                fontStyle: 'normal',
              }}
            >
              See All
            </Text>
          </TouchableOpacity>
        </View>
        <RecentTipCarousel
          recentVideoTips={recentVideoTips}
          navigation={navigation}
          route={route}
        />
        <View
          style={{
            marginTop: 40,
          }}
        >
          <Header
            label="Sports"
            style={{
              fontSize: 24,
              fontWeight: 'bold',
              fontStyle: 'normal',
              color: '#000000',
              marginBottom: 16,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}
          >
            {sportList.map(sport => (
              <ToggleSelectButton
                label={sport.sportName}
                key={sport.id}
                disableSelectColor
                onSelect={select => {
                  if (select) {
                    navigation!.push('SearchCategory', {
                      header: sport.sportName,
                      data: {
                        categories: sport.positions,
                        subCategories: sport.topics,
                      },
                    });
                  }
                }}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeViewWrapper>
  );
};

export default Search;
