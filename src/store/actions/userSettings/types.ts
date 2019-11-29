export const SET_USER_ID = 'SET_USER_ID';
export const SET_USER_TOKEN = 'SET_USER_TOKEN';
export const SET_FIRST_TIME_USER = 'SET_FIRST_TIME_USER';

interface ISetUserId {
  type: typeof SET_USER_ID;
  payload: string;
}
interface ISetUserToken {
  type: typeof SET_USER_TOKEN;
  payload: string;
}
interface ISetFirstTimeUser {
  type: typeof SET_FIRST_TIME_USER;
  payload: boolean;
}

export type UserSettingsActionTypes =
  | ISetUserId
  | ISetUserToken
  | ISetFirstTimeUser;
