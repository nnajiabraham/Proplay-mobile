import React from 'react';
import {View} from 'react-native';
import ToggleSelectButton, {IOption} from '../ToggleSelectButton';
import Header from '../Header';
import {ISportSubCategory} from 'src/api/fetchPreference';

export interface ISportCategoriesViewProp {
  header: string;
  subcategories: Array<IOption>;
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
