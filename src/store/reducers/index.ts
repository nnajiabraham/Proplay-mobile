import preferences, {IPreferenceState} from './preferences';
import userSettings, {IUserSettingsState} from './userSettings';
import {combineReducers} from 'redux';
import {PersistPartial} from 'redux-persist/es/persistReducer';

// PersistPartial is the type definition from persist reducer, since we adding
// persistence to the reducer
export interface ICombineState {
  preferences: IPreferenceState & PersistPartial;
  userSettings: IUserSettingsState & PersistPartial;
}

const rootReducer = combineReducers<ICombineState>({
  preferences,
  userSettings,
});
export default rootReducer;
