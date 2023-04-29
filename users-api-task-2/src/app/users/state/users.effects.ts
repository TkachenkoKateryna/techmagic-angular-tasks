import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { UsersService } from '../services/users.service';
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
} from './users.actions';

@Injectable()
export class UsersEffects {
	constructor(private actions$: Actions, private usersService: UsersService) {}

	getUsers$ = createEffect(() => {
		return this.actions$.pipe(
			ofType(getAllUsersAction),
			exhaustMap(() => {
				return this.usersService.getAllUsers().pipe(
					map((data) => getAllUsersSuccessAction({ payload: data })),
					catchError(() =>
						of(
							getAllUsersErrorAction({ message: 'Oops, something went wrong' })
						)
					)
				);
			})
		);
	});

	deleteUser$ = createEffect(() => {
		return this.actions$.pipe(
			ofType(deleteUserAction),
			exhaustMap((action) => {
				return this.usersService.deleteUser(action.payload).pipe(
					map(() => deleteUserSuccessAction({ payload: action.payload })),
					catchError(() =>
						of(deleteUserErrorAction({ message: 'Oops, something went wrong' }))
					)
				);
			})
		);
	});

	createUser$ = createEffect(() => {
		return this.actions$.pipe(
			ofType(createUserAction),
			exhaustMap((action) => {
				const user = { ...action.payload, id: Math.random() };
				return this.usersService.createUser(user).pipe(
					map(() => {
						return createUserSuccessAction({
							payload: user,
						});
					}),
					catchError(() =>
						of(createUserErrorAction({ message: 'Oops, something went wrong' }))
					)
				);
			})
		);
	});
}
