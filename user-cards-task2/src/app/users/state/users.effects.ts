import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, of, switchMap } from 'rxjs';
import {
  catchError,
  concatMap,
  map,
  mergeMap,
  withLatestFrom,
} from 'rxjs/operators';

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
      mergeMap(() => {
        return this.usersService.getAllUsers().pipe(
          map((data) => {
            const users = data.map<User>(({ name, username, ...user }) => ({
              ...user,
              firstName: name.split(' ')[0],
              lastName: name.split(' ')[1],
            }));

            return getAllUsersSuccessAction({ payload: users });
          }),
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
      mergeMap((action) => {
        return this.usersService.deleteUser(action.payload).pipe(
          mergeMap(() => [
            deleteUserSuccessAction({ payload: action.payload }),
          ]),
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
      mergeMap((action) => {
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
