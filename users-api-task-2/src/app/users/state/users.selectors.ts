import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UsersState } from './users.state';

const getCounterState = createFeatureSelector<UsersState>('users');

export const getUsers = createSelector(getCounterState, (state) => {
  return state.users;
});

export const usersLoading = createSelector(getCounterState, (state) => {
  return state.loading;
});
