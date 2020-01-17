import React from 'react';
import {Text, ScrollView, View, TouchableOpacity} from 'react-native';
import SafeViewWrapper from '../../components/SafeViewWrapper';
import Header from '../../components/Header';
import ToggleSelectButton from '../../components/ToggleSelectButton';
import SearchBar from '../../components/SearchBar';
import {RecentTipCarousel} from '../../components/RecentTip';
import {fetchVideo} from '../../api/fetchVideo';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from 'react-navigation-hooks';
import {ISportSubCategory} from '../../api/fetchPreference';

interface ITry {
  categories: Array<ISportSubCategory>;
  subCategories: Array<string>;
}

const SearchCategory = ({navigation}) => {
  const recentVideoTips = fetchVideo();
  const {goBack, getParam} = useNavigation();

  const header = getParam('header');
  const data: ITry = getParam('data');

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
          <TouchableOpacity style={{marginRight: 20}} onPress={() => goBack()}>
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
            label={'Positions'}
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
                onSelect={select => {
                  navigation.push('SearchCategory', {
                    header: category.position,
                    data: {
                      categories: data.subCategories.map(topic => ({
                        id: category.id + Math.random().toString(21),
                        position: topic,
                      })),
                      subCategories: data.subCategories,
                    },
                  });
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
