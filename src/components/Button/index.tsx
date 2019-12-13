import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  StyleSheetProperties,
  TouchableOpacityProps,
  TextProps,
} from 'react-native';

interface IButtonProps {
  active?: boolean;
  customButtonStyle?: StyleSheetProperties;
  customTextStyle?: StyleSheetProperties;
  touchableProps?: TouchableOpacityProps;
  textProps?: TextProps;
}

export const Button: React.FC<IButtonProps> = ({
  customButtonStyle,
  customTextStyle,
  active,
  children,
  touchableProps,
  textProps,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: active ? '#e11c20' : '#fff',
          ...customButtonStyle,
        },
      ]}
      {...touchableProps}
    >
      <Text
        style={[
          styles.buttonText,
          {
            color: active ? '#fff' : '#e11c20',
            ...customTextStyle,
          },
        ]}
        {...textProps}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderColor: '#e11c20',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 5,
    padding: 11,
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '300',
    fontStyle: 'normal',
    lineHeight: 20,
    color: '#e11c20',
  },
});
