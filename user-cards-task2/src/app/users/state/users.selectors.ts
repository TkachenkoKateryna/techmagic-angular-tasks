import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UsersState } from './users.state';

const getUsersState = createFeatureSelector<UsersState>('users');

export const getUsers = createSelector(getUsersState, (state) => state.users);

export const usersLoading = createSelector(
  getUsersState,
  (state) => state.loading
);

export const getSelectedUserIds = createSelector(
  getUsersState,
  (state) => state.selectedUserIds
);
export const getUserError = createSelector(
  getUsersState,
  (state) => state.error
);
