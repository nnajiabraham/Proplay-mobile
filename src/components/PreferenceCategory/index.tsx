import React from 'react';
import {View} from 'react-native';
import ToggleSelectButton from '../ToggleSelectButton';
import Header from '../Header';

export interface ISportCategoriesViewProp {
  header: string;
  subcategories: Array<string>;
  onSelect: (key: string) => void;
  selected: Array<string>;
}

const PreferenceCategory: React.FC<ISportCategoriesViewProp> = ({
  header,
  subcategories,
  onSelect,
  selected,
}) => {
  return (
    <>
      <View>
        <Header label={header} />
      </View>
      <View>
        <ToggleSelectButton
          options={subcategories}
          onSelect={onSelect}
          selected={selected}
        />
      </View>
    </>
  );
};

export default PreferenceCategory;
