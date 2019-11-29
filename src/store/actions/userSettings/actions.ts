import {SET_FIRST_TIME_USER} from './types';

export const setFirstTimeUserAction = (payload: boolean) => {
  console.log(payload);

  return {
    type: SET_FIRST_TIME_USER,
    payload,
  };
};
