import {
  HYDRATE,
  ADD_TODO,
  TOGGLE_TODO,
  SET_FILTER,
  CLEAR_COMPLETED,
} from '../constants/index';

export const todos = (state = [], action = {}) => {
  switch(action.type){
  case ADD_TODO:
    return state.concat(action.todo);
  case TOGGLE_TODO:
    // why this confusing LISP-like structure instead of simply:
    //   state[action.index].completed = !state[action.index].completed;
    //   return state;
    // mostly because immutability is a key part of the design of redux.
    return state.slice(0, action.index)
      .concat(
        Object.assign({}, state[action.index], {completed: !state[action.index].completed}),
        state.slice(action.index + 1)
    );
  case CLEAR_COMPLETED:
    return state.filter((todo) => (todo.completed === false));
  case HYDRATE:
    return action.hasOwnProperty('todos') ? action.todos : state;
  default: return state;
  }
};

export const filter = (state = {
  on: false
}, action = {}) => {
  switch (action.type) {
  case SET_FILTER:
    return action.filter;
  case HYDRATE:
    return action.hasOwnProperty('filter')
      ? action.filter
      : state;
  default:
    return state;
  }
};
