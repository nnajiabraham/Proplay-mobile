import React from 'react';
import {Text} from 'react-native';

interface IHeaderProps {
  label: string;
  style?: any;
}

const Header: React.FC<IHeaderProps> = ({label, style}) => {
  return (
    <>
      <Text
        style={[
          {
            fontSize: 24,
            fontWeight: '500',
            fontStyle: 'normal',
            // letterSpacing: 0,
            color: '#000000',
          },
          {...style},
        ]}
      >
        {label}
      </Text>
    </>
  );
};

export default Header;
