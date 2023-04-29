import { createAction, props } from '@ngrx/store';

export const getAllUsers = createAction('getAllUsers');

export const getAllUsersSuccess = createAction(
  'getAllUsersSuccess',
  props<{ payload: User[] }>()
);

export const deleteUser = createAction(
  'deleteUser',
  props<{ payload: number }>()
);

export const deleteUserSuccess = createAction(
  'deleteUserSuccess',
  props<{ payload: number }>()
);

export const createUser = createAction(
  'createUser',
  props<{ payload: User }>()
);

export const createUserSuccess = createAction(
  'createUserSuccess',
  props<{ payload: User }>()
);
