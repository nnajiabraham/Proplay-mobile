import {
  PreferenceActionTypes,
  SET_PREFERENCE,
} from '../actions/preferences/types';

interface IDefaultPreferenceState {
  chosenPreference: Array<string>;
}
const defaultPreferenceState: IDefaultPreferenceState = {
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

export default preferencesReducer;
