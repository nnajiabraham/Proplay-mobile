import React from 'react';
import {View} from 'react-native';
import ToggleSelectButton from '../ToggleSelectButton';
import Header from '../Header';
import {ISportSubCategory} from 'src/api/fetchPreference';

export interface IOption {
  id: string;
  value: string;
}

export interface ISportCategoriesViewProp {
  header: string;
  subcategories: Array<IOption>;
  // onSelect: (key: string) => void;
  selected: Array<string>;
}

const PreferenceCategory: React.FC<ISportCategoriesViewProp> = ({
  header,
  subcategories,
}) => {
  const [selectedPreferenceState, setPreferenceState] = React.useState<
    Array<string>
  >([]);

  const onSelect = React.useCallback(
    (id: string) => (selected: boolean) => {
      selected
        ? setPreferenceState([...selectedPreferenceState, id])
        : selectedPreferenceState.filter(options => id !== options);
    },
    [],
  );

  React.useEffect(() => {
    console.log(selectedPreferenceState);
  }, [selectedPreferenceState.length]);

  return (
    <>
      <View>
        <Header label={header} />
      </View>
      <View>
        {subcategories.map(option => (
          <ToggleSelectButton
            label={option.value}
            key={option.id}
            onSelect={onSelect(option.id)}
          />
        ))}
      </View>
    </>
  );
};

export default PreferenceCategory;
