import React from 'react';
import {Switch, View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export interface IToggleSelectButtonProps {
  options: Array<string>;
  selected: Array<string>;
  onSelect: (key: string) => void;
}

const ToggleSelectButton: React.FC<IToggleSelectButtonProps> = ({
  options,
  selected,
  onSelect,
}) => {
  return (
    <View style={styles.container}>
      {options.map(option => (
        <TouchableOpacity
          key={option}
          style={[
            styles.options,
            {
              backgroundColor: selected.includes(option) ? '#e11c20' : '#fff',
            },
            ,
          ]}
          onPress={() => onSelect(option)}
        >
          <Text
            key={option}
            style={[
              styles.text,
              {
                color: selected.includes(option) ? '#fff' : '#e11c20',
              },
              ,
            ]}
          >
            {option}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },
  options: {
    borderColor: '#e11c20',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 5,
    textAlign: 'center',
    padding: 11,
    margin: 7,
  },
  text: {
    fontSize: 16,
    fontWeight: '300',
    fontStyle: 'normal',
    lineHeight: 20,
  },
});

export default ToggleSelectButton;
