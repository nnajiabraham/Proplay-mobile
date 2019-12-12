import {PermissionStatus} from 'react-native-permissions';
import {
  UserSettingsActionTypes,
  SET_FIRST_TIME_USER,
  SET_NOTIFICATION_SETTINGS,
} from '../actions/userSettings/types';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

export interface IUserSettingsState {
  user: {
    userId: string;
    userToken: string;
    firstTimeUser: boolean;
    notification: PermissionStatus;
  };
}
const defaultUserSettingsState: IUserSettingsState = {
  user: {
    userId: '',
    userToken: '',
    firstTimeUser: true,
    notification: 'denied',
  },
};
const userSettingsReducer = (
  state = defaultUserSettingsState,
  action: UserSettingsActionTypes,
) => {
  switch (action.type) {
    case SET_FIRST_TIME_USER: {
      return {...state, user: {...state.user, firstTimeUser: action.payload}};
    }
    case SET_NOTIFICATION_SETTINGS: {
      return {...state, user: {...state.user, notification: action.payload}};
    }
    default:
      return state;
  }
};

const persistConfig = {
  key: 'userSettings',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['user'],
};
export default persistReducer(persistConfig, userSettingsReducer);
