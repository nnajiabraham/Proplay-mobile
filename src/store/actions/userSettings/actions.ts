import {PermissionStatus} from 'react-native-permissions';
import {SET_FIRST_TIME_USER, SET_NOTIFICATION_SETTINGS} from './types';

export const setFirstTimeUserAction = (payload: boolean) => {
  return {
    type: SET_FIRST_TIME_USER,
    payload,
  };
};

export const setNotificationSettings = (payload: PermissionStatus) => {
  return {
    type: SET_NOTIFICATION_SETTINGS,
    payload,
  };
};
