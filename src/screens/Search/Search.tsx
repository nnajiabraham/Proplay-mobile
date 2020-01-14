import React from 'react';
import {Text, ScrollView, View, TouchableOpacity} from 'react-native';
import SafeViewWrapper from '../../components/SafeViewWrapper';
import Header from '../../components/Header';
import ToggleSelectButton from '../../components/ToggleSelectButton';
import {fetchSearchList} from '../../api/searchFetch';
import SearchBar from '../../components/SearchBar';
import {RecentTipCarousel} from '../../components/RecentTip';
import {fetchVideo} from '../../api/fetchVideo';
import {} from 'react-navigation';
// import {useNavigation} from 'react-navigation-hooks';

const Search = ({navigation}) => {
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
        <SearchBar />
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
          <TouchableOpacity style={{marginRight: 20}}>
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
        <RecentTipCarousel recentVideoTips={recentVideoTips} />
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
                onSelect={select => {
                  if (select) {
                    navigation.push('SearchCategory', {
                      header: sport.sportName,
                      positions: sport.positions,
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
