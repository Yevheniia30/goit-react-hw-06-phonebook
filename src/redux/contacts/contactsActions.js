import { ADD, DELETE, FILTER } from './contactsActionsTypes';

export const addUser = user => ({
  type: ADD,
  payload: user,
});

export const deleteUser = id => ({
  type: DELETE,
  payload: id,
});

export const filterUser = value => ({
  type: FILTER,
  payload: value,
});
