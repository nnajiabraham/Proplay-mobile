import React from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import SafeViewWrapper from '../../components/SafeViewWrapper';
import VideoFlatList from '../../components/VideoFlatList';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from 'react-navigation-hooks';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
  },
  search: {
    position: 'absolute',
    zIndex: 5,
    top: 0,
    left: '80%',
    marginTop: StatusBar.currentHeight ? 26 : 52,
  },
});

const Home = () => {
  const {navigate} = useNavigation();

  return (
    <SafeViewWrapper>
      <StatusBar barStyle="light-content" />
      <TouchableOpacity
        style={styles.search}
        onPress={() => navigate('Search')}
      >
        <Icon name={'magnify'} color={'#fff'} size={35} />
      </TouchableOpacity>
      <View style={styles.container}>
        <VideoFlatList />
      </View>
    </SafeViewWrapper>
  );
};

export default Home;
