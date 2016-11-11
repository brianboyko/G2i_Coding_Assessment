import {
  SET_CANARY, CLEAR_CANARY, TOGGLE_ALL,
} from '../constants/index';

export const setCanary = (canaryString) => ({
  type: SET_CANARY,
  canary: canaryString
});

export const clearCanary = () => ({
  type: CLEAR_CANARY
});

export const toggleAll = () => {{
  type: TOGGLE_ALL
}}
