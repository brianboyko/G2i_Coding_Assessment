import {
  SET_CANARY, CLEAR_CANARY
} from '../constants/index';

export const setCanary = (canaryString) => ({
  type: SET_CANARY,
  canary: canaryString
});

export const clearCanary = () => ({
  type: CLEAR_CANARY
});
