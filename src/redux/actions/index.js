import {
  ADD_TODO,
  COMPLETED,
  DELETE_TODO,
  SET_VISIBILITY_FILTER,
  SHOW_ALL,
  TOGGLE_TODO,
  UNCOMPLETED,
} from "./types";

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    id: new Date().getTime(),
    text,
  };
};

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    id,
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

export const setVisibilityFilter = (filter) => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter,
  };
};

export const visibilityFilters = {
  SHOW_ALL: SHOW_ALL,
  COMPLETED: COMPLETED,
  UNCOMPLETED: UNCOMPLETED,
};
