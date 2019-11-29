import {
  PreferenceActionTypes,
  SET_PREFERENCE,
} from '../actions/preferences/types';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

export interface IPreferenceState {
  chosenPreference: Array<string>;
}
const defaultPreferenceState: IPreferenceState = {
  chosenPreference: [],
};
const preferencesReducer = (
  state = defaultPreferenceState,
  action: PreferenceActionTypes,
) => {
  switch (action.type) {
    case SET_PREFERENCE: {
      return {...state, chosenPreference: action.payload};
    }
    default:
      return state;
  }
};

const persistConfig = {
  key: 'preferences',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['chosenPreference'],
};
export default persistReducer(persistConfig, preferencesReducer);
