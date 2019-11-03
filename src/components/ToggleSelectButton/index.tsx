import React from 'react';
import {Switch, View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export interface IToggleSelectButtonProps {
  options: Array<string>;
}

const ToggleSelectButton: React.FC<IToggleSelectButtonProps> = ({options}) => {
  const [state, setState] = React.useState([]);
  return (
    <View style={styles.container}>
      {options.map(option => (
        <TouchableOpacity key={option} style={styles.options}>
          <Text key={option} style={styles.text}>
            {option}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
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
    margin: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: '300',
    fontStyle: 'normal',
    lineHeight: 20,
    color: '#000',
  },
});

export default ToggleSelectButton;
