import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export interface IToggleSelectButtonProps {
  label: string;
  onSelect?: (selected: boolean) => void;
  viewStyle?: any;
  textStyle?: any;
}

const ToggleSelectButton: React.FC<IToggleSelectButtonProps> = ({
  onSelect,
  label,
  viewStyle,
  textStyle,
}) => {
  const [selected, setSelected] = React.useState(false);
  const componentFirstMount = React.useRef(true);

  const onSelectHandler = () => {
    setSelected(!selected);
  };

  React.useEffect(() => {
    if (onSelect && !componentFirstMount.current) {
      onSelect(selected);
    }
    componentFirstMount.current = false;
  }, [selected]);

  return (
    <TouchableOpacity
      style={[
        styles.options,
        {
          backgroundColor: selected ? '#e11c20' : '#fff',
          ...viewStyle,
        },
        ,
      ]}
      onPress={onSelectHandler}
    >
      <Text
        style={[
          styles.text,
          {
            color: selected ? '#fff' : '#e11c20',
            ...textStyle,
          },
          ,
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  options: {
    borderColor: '#e11c20',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 5,
    textAlign: 'center',
    padding: 11,
    marginRight: 7,
    marginTop: 7,
    marginBottom: 7,
  },
  text: {
    fontSize: 16,
    fontWeight: '300',
    fontStyle: 'normal',
    lineHeight: 20,
  },
});

export default ToggleSelectButton;
