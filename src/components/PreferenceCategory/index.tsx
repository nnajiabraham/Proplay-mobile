import React from 'react';
import {View, StyleSheet} from 'react-native';
import ToggleSelectButton from '../ToggleSelectButton';
import Header from '../Header';
import {ISportCategories} from 'src/api/fetchPreference';

export interface IOption {
  id: string;
  value: string;
}

export interface ISportCategoriesViewProp {
  categories: ISportCategories;
  selectedOptions: (options: Array<string>) => void;
}

const PreferenceCategory: React.FC<ISportCategoriesViewProp> = ({
  categories,
  selectedOptions,
}) => {
  const [selectedPreferenceState, setPreferenceState] = React.useState<
    Array<string>
  >([]);

  const onSelect = (id: string) => (selected: boolean) => {
    selected
      ? setPreferenceState([...selectedPreferenceState, id])
      : setPreferenceState(
          selectedPreferenceState.filter(options => id !== options),
        );
  };

  React.useEffect(() => {
    selectedOptions(selectedPreferenceState);
  }, [selectedPreferenceState.length]);

  const renderView = () =>
    categories.map(category => (
      <View key={category.id} style={{marginBottom: 29}}>
        <View>
          <Header label={category.category} />
        </View>
        <View style={styles.subcategories}>
          {category.subcategories.map(option => (
            <ToggleSelectButton
              label={option.position}
              key={option.id}
              onSelect={onSelect(option.id)}
            />
          ))}
        </View>
      </View>
    ));

  return <View style={styles.container}>{renderView()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
  },
  subcategories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default PreferenceCategory;
