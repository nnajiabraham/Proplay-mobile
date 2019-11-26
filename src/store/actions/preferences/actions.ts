import {SET_PREFERENCE} from './types';

export const updatePreferenceAction = (newPreference: Array<string>) => {
  console.log(newPreference);

  return {
    type: SET_PREFERENCE,
    payload: newPreference,
  };
};
