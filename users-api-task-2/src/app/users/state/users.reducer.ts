import { createReducer, on } from '@ngrx/store';

import { initialState } from './users.state';
import {
  createUser,
  createUserSuccess,
  deleteUser,
  deleteUserSuccess,
  getAllUsers,
  getAllUsersSuccess,
} from './users.actions';

const _usersReducer = createReducer(
  initialState,
  on(getAllUsers, (state) => ({ ...state, loading: true })),
  on(getAllUsersSuccess, (state, action) => ({
    ...state,
    users: action.payload,
    loading: false,
  })),
  on(deleteUser, (state) => ({ ...state, loading: true })),
  on(deleteUserSuccess, (state, action) => ({
    ...state,
    users: state.users.filter((a) => a.id !== action.payload),
    loading: false,
  })),
  on(createUser, (state) => ({ ...state, loading: true })),
  on(createUserSuccess, (state, action) => ({
    ...state,
    users: [...state.users, action.payload],
    loading: false,
  }))
);

export function usersReducer(state: any, action: any) {
  return _usersReducer(state, action);
}
