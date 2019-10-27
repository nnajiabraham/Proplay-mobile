import React from 'react';
import {View, Text} from 'react-native';
import SafeViewWrapper from '../components/SafeViewWrapper/SafeViewWrapper';

const Profile = () => {
  return (
    <SafeViewWrapper>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Profile Page</Text>
      </View>
    </SafeViewWrapper>
  );
};

export default Profile;
