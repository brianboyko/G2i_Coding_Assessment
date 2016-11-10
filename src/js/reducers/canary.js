import {
  SET_CANARY,
  CLEAR_CANARY,
  HYDRATE,
} from '../constants/index';

export const canary = (state = "", action = {}) => {
  switch(action.type){
  case SET_CANARY:
    return action.canary;
  case CLEAR_CANARY:
    return "";
  case HYDRATE:
    return action.hasOwnProperty("canary") ? action.canary : state;
  default: return "";
  }
};
