import {
  ADD_TODO,
  TOGGLE_TODO,
  CLEAR_COMPLETED,
  SET_FILTER,
  TOGGLE_ALL,
} from '../constants/index';

export const addTodo = (todoString) => {
  // I will be referring to the TODOs by the index
  // in the store.todos array; but one possibility here
  // might be to use Math.random to create a unique hash for each
  // todo, which could then be referred. Were this a more
  // complicated app, I'd be tempted to take that approach.
  return {
    type: ADD_TODO,
    todo: {
      text: todoString,
      time: new Date(),
      completed: false,
    }
  };
};

export const toggleTodo = (index) => ({
  type: TOGGLE_TODO,
  index
});

export const clearCompleted = () => ({
  type: CLEAR_COMPLETED
});

export const setFilter = (choice) => {
  let filter = {
    on: false
  }
  if (choice === "COMPLETE") {
    filter = {
      on: true,
      complete: true
    }
  }
  if (choice === "ACTIVE") {
    filter = {
      on: true,
      complete: false
    }
  }
  return {type: SET_FILTER, filter};
};
