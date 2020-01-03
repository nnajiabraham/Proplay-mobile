import React from 'react';
import {View, Text} from 'react-native';
import SafeViewWrapper from '../../components/SafeViewWrapper';

const Post = () => {
  return (
    <SafeViewWrapper>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Post Page</Text>
      </View>
    </SafeViewWrapper>
  );
};

export default Post;
