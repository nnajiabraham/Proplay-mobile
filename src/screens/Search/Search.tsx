import React from 'react';
import {
  Text,
  ScrollView,
  View,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import SafeViewWrapper from '../../components/SafeViewWrapper';
import Header from '../../components/Header';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SearchBar = () => {
  const [value, onChangeText] = React.useState('');
  return (
    <KeyboardAvoidingView>
      <View
        style={{
          width: 335,
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
      </View>
    </KeyboardAvoidingView>
  );
};

const;

const Search = () => {
  return (
    <SafeViewWrapper removeNotch>
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: '#fff',
          paddingTop: 20,
          paddingLeft: 20,
        }}
      >
        <Header
          label="Search"
          style={{
            fontSize: 34,
            fontWeight: 'bold',
            color: '#000000',
            lineHeight: 0,
            marginBottom: 16,
          }}
        />
        <SearchBar />
      </ScrollView>
    </SafeViewWrapper>
  );
};

export default Search;
