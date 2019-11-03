import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  SectionList,
  FlatList,
} from 'react-native';
import SafeViewWrapper from '../components/SafeViewWrapper';
import {SportCategories, ISportCategories} from '../api/fetchPreference';
import ToggleSelectButton from '../components/ToggleSelectButton';

interface ISportCategoriesViewProp {
  header: string;
  subcategories: Array<string>;
}

const PreferenceCategoriesView: React.FC<ISportCategoriesViewProp> = ({
  header,
  subcategories,
}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'green',
      }}
    >
      <View>
        <Text style={styles.header}>{header}</Text>
      </View>
      <View>
        <ToggleSelectButton options={subcategories} />
      </View>
    </View>
  );
};

const Preferences = () => {
  return (
    <SafeViewWrapper removeNotch={true}>
      <View>
        <Text>What are you interested in?</Text>
        <Text>
          Pick your favorite interests to find pros and tips that can help you
          achieve your goals
        </Text>
        <FlatList
          contentContainerStyle={styles.flatList}
          data={SportCategories}
          keyExtractor={item =>
            item.category +
            Math.random()
              .toString(36)
              .substring(7)
          }
          renderItem={({item}) => (
            <PreferenceCategoriesView
              header={item.category}
              subcategories={item.subcategories}
            />
          )}
        />
      </View>
    </SafeViewWrapper>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    // backgroundColor: 'grey',
  },
  flatList: {
    marginTop: 5,
  },
  header: {
    color: '#000',
  },
});

export default Preferences;
