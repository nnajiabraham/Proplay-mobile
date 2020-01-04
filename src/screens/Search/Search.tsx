import React from 'react';
import {
  Text,
  ScrollView,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import SafeViewWrapper from '../../components/SafeViewWrapper';
import Header from '../../components/Header';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ToggleSelectButton from '../../components/ToggleSelectButton';

const SearchBar = () => {
  const [value, onChangeText] = React.useState('');
  return (
    <KeyboardAvoidingView
      style={{
        height: 44,
        borderRadius: 5,
        backgroundColor: '#ffffff',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#979797',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
      }}
    >
      <Icon
        name={'magnify'}
        color={'#4a4a4a'}
        size={20}
        style={{padding: 10}}
      />
      <TextInput
        style={{
          flex: 1,
          paddingTop: 10,
          paddingRight: 10,
          paddingBottom: 10,
          paddingLeft: 0,
          backgroundColor: '#fff',
          color: '#424242',
        }}
        onChangeText={text => onChangeText(text)}
        value={value}
        placeholder={'Search tips'}
        placeholderTextColor={'#171717'}
      />
    </KeyboardAvoidingView>
  );
};

const RecentTipsView = () => {
  return (
    <ScrollView horizontal>
      <RecentTipsCard />
      <RecentTipsCard />
      <RecentTipsCard />
      <RecentTipsCard />
    </ScrollView>
  );
};

const RecentTipsCard = () => {
  return (
    <View
      style={{
        width: 130,
        height: 184,
        borderRadius: 5,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        marginRight: 10,
      }}
    >
      <Text></Text>
    </View>
  );
};

const Search = () => {
  const number = 100;
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
              style={{fontSize: 16, fontWeight: '300', fontStyle: 'normal'}}
            >
              See All
            </Text>
          </TouchableOpacity>
        </View>
        <RecentTipsView />
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
          <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            {Array.from(Array(number).keys()).map((_, i) => (
              <ToggleSelectButton label={'hig'} key={i} />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeViewWrapper>
  );
};

export default Search;
