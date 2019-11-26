export const SET_PREFERENCE = 'SET_PREFERENCE';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';

interface ISetPreferenceAction {
  type: typeof SET_PREFERENCE;
  payload: Array<string>;
}

export type PreferenceActionTypes = ISetPreferenceAction;
