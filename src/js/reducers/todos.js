// ==========================
// ./reducers/todos.js
// ==========================

import {
  HYDRATE, // see note
  ADD_TODO,
  TOGGLE_TODO,
  SET_FILTER,
  CLEAR_COMPLETED,
} from '../constants/index';

// "HYDRATE" is a special command, usually used in debugging. I've included
// it because it has become a habit.  Essentially, you can replace part or all of the
// state directly with whatever state you would like, if you set the action type to "HYDRATE".
// (It's one of those things you kinda want to include from the beginning and not have to use,
// rather than finding out you have to use it and add it for all reducers...)

export const todos = (state = [], action = {}) => {
  switch (action.type) {
  case ADD_TODO:
    return state.concat(action.todo);
  case TOGGLE_TODO:
    // why this confusing LISP-like structure instead of simply:
    //   state[action.index].completed = !state[action.index].completed;
    //   return state;
    // mostly because immutability is a key part of the design of redux.
    return state.slice(0, action.index).concat(Object.assign({}, state[action.index], {
      completed: !state[action.index].completed
    }), state.slice(action.index + 1));
  case CLEAR_COMPLETED:
    return state.filter((todo) => (todo.completed === false));
  case HYDRATE:
    return action.hasOwnProperty('todos')
      ? action.todos
      : state;
  default:
    return state;
  }
};

// TODO: refactor. "filter" might be a reserved keyword!
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
