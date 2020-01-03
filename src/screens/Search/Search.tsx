import React from 'react';
import {View, Text} from 'react-native';
import SafeViewWrapper from '../../components/SafeViewWrapper';

const Search = () => {
  return (
    <SafeViewWrapper removeNotch>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Search Page</Text>
      </View>
    </SafeViewWrapper>
  );
};

export default Search;
