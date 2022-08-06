import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addUser, deleteUser, filterUser } from './contactsActions';

const initialState = {
  contacts: [],
  filter: '',
};

export const itemReducer = createReducer(initialState.contacts, {
  [addUser]: (state, { payload }) => [...state, payload],
  [deleteUser]: (state, { payload }) =>
    state.filter(item => item.id !== payload),
});

export const filterReducer = createReducer(initialState.filter, {
  [filterUser]: (_, { payload }) => payload,
});

export const reducer = combineReducers({
  item: itemReducer,
  filter: filterReducer,
});
