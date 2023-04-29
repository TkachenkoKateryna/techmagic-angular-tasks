import { createAction, props } from '@ngrx/store';

export const getAllUsersAction = createAction('getAllUsers');

export const getAllUsersSuccessAction = createAction(
	'getAllUsersSuccess',
	props<{ payload: User[] }>()
);

export const getAllUsersErrorAction = createAction(
	'getAllUsersErrorAction',
	props<{ message: string }>()
);

export const deleteUserAction = createAction(
	'deleteUserAction',
	props<{ payload: number }>()
);

export const deleteUserSuccessAction = createAction(
	'deleteUserSuccessAction',
	props<{ payload: number }>()
);

export const deleteUserErrorAction = createAction(
	'deleteUserErrorAction',
	props<{ message: string }>()
);

export const createUserAction = createAction(
	'createUser',
	props<{ payload: User }>()
);

export const createUserSuccessAction = createAction(
	'createUserSuccess',
	props<{ payload: User }>()
);

export const createUserErrorAction = createAction(
	'createUserErrorAction',
	props<{ message: string }>()
);
