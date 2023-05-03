import { createReducer, on } from '@ngrx/store';

import { initialState } from './users.state';
import {
  createUserAction,
  createUserErrorAction,
  createUserSuccessAction,
  deleteUserAction,
  deleteUserErrorAction,
  deleteUserSuccessAction,
  getAllUsersAction,
  getAllUsersErrorAction,
  getAllUsersSuccessAction,
  selectAllUsersAction,
  selectUserAction,
} from './users.actions';

const _usersReducer = createReducer(
  initialState,
  on(getAllUsersAction, (state) => ({ ...state, loading: true })),
  on(getAllUsersSuccessAction, (state, action) => ({
    ...state,
    users: action.payload,
    loading: false,
    error: '',
  })),
  on(getAllUsersErrorAction, (state, action) => ({
    ...state,
    loading: false,
    error: action.message,
  })),
  on(deleteUserAction, (state) => ({ ...state, loading: true })),
  on(deleteUserSuccessAction, (state, action) => ({
    ...state,
    users: state.users.filter((a) => a.id !== action.payload),
    selectedUserIds: state.selectedUserIds.filter(
      (id) => id !== action.payload
    ),
    loading: false,
    error: '',
  })),
  on(deleteUserErrorAction, (state, action) => ({
    ...state,
    loading: false,
    error: action.message,
  })),
  on(createUserAction, (state) => ({ ...state, loading: true })),
  on(createUserSuccessAction, (state, action) => ({
    ...state,
    users: [...state.users, action.payload],
    loading: false,
    error: '',
  })),
  on(createUserErrorAction, (state, action) => ({
    ...state,
    loading: false,
    error: action.message,
  })),
  on(selectAllUsersAction, (state) => ({
    ...state,
    selectedUserIds: state.users.map((user) => user.id),
  })),
  on(selectUserAction, (state, { payload }) => {
    const selectedUserIds = state.selectedUserIds.includes(payload)
      ? state.selectedUserIds.filter((id) => id !== payload)
      : [...state.selectedUserIds, payload];

    return {
      ...state,
      selectedUserIds: selectedUserIds,
    };
  })
);

export function usersReducer(state: any, action: any) {
  return _usersReducer(state, action);
}
