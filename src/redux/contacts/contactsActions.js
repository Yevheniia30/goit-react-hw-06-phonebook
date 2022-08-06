import { createAction } from '@reduxjs/toolkit';
import { ADD, DELETE, FILTER } from './contactsActionsTypes';

export const addUser = createAction(ADD);
export const deleteUser = createAction(DELETE);
export const filterUser = createAction(FILTER);
