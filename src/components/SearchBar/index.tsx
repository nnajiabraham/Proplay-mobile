import React from 'react';
import {KeyboardAvoidingView, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface SearchBarProps {
  onSearch?: (searchString: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({onSearch}) => {
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
        value={value}
        onSubmitEditing={e => {
          if (onSearch != undefined) {
            onSearch(e.nativeEvent.text);
          }
        }}
        returnKeyType={'search'}
        placeholder={'Search tips'}
        enablesReturnKeyAutomatically
        placeholderTextColor={'#171717'}
        onChangeText={text => onChangeText(text)}
      />
    </KeyboardAvoidingView>
  );
};

export default SearchBar;
