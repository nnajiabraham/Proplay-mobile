import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {ISportSubCategory} from '../../api/fetchPreference';
import {fetchVideo} from '../../api/fetchVideo';
import Header from '../../components/Header';
import {RecentTipCarousel} from '../../components/RecentTip';
import SafeViewWrapper from '../../components/SafeViewWrapper';
import SearchBar from '../../components/SearchBar';
import ToggleSelectButton from '../../components/ToggleSelectButton';

interface ITry {
  categories: Array<ISportSubCategory>;
  subCategories: Array<string>;
}

const SearchCategory = ({navigation, route}: any) => {
  const recentVideoTips = fetchVideo();
  const {goBack} = useNavigation();
  const {params} = useRoute();

  //@ts-ignore
  const header = params?.header;
  //@ts-ignore
  const subHeader = params?.subHeader;
  //@ts-ignore
  const data: ITry = params?.data;

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
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 16,
          }}
        >
          <TouchableOpacity
            style={{
              marginRight: 20,
            }}
            onPress={() => goBack()}
          >
            <Icon name="chevron-left" color={'rgba(0,0,0,0.8)'} size={20} />
          </TouchableOpacity>
          <Header
            label={header}
            style={{
              fontWeight: 'bold',
              color: '#000000',
              fontSize: 34,
            }}
          />
        </View>
        <SearchBar
          onSearch={searchString => {
            console.log(searchString);
            navigation.push('SearchResultList');
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
            style={{
              marginRight: 20,
            }}
            onPress={() => navigation.push('SearchResultList')}
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
            label={subHeader ? subHeader : 'Positions'}
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
            {data.categories.map(category => (
              <ToggleSelectButton
                key={category.id}
                label={category.position}
                disableSelectColor
                onSelect={select => {
                  if (select) {
                    navigation.push('SearchCategory', {
                      header: category.position,
                      subHeader: 'Topics',
                      data: {
                        categories: data.subCategories.map(topic => ({
                          id: category.id + Math.random().toString(21),
                          position: topic,
                        })),
                        subCategories: data.subCategories,
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

export default SearchCategory;
