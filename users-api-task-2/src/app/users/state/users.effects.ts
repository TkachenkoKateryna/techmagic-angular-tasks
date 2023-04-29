import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  createUser,
  createUserSuccess,
  deleteUser,
  deleteUserSuccess,
  getAllUsers,
  getAllUsersSuccess,
} from './users.actions';
import { UsersService } from '../services/users.service';

@Injectable()
export class UsersEffects {
  constructor(private actions$: Actions, private usersService: UsersService) {}

  getUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getAllUsers),
      exhaustMap(() => {
        return this.usersService
          .getAllUsers()
          .pipe(map((data) => getAllUsersSuccess({ payload: data })));
      })
    );
  });

  deleteUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deleteUser),
      exhaustMap((action) => {
        return this.usersService
          .deleteUser(action.payload)
          .pipe(map(() => deleteUserSuccess({ payload: action.payload })));
      })
    );
  });

  createUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(createUser),
      exhaustMap((action) => {
        return this.usersService
          .createUser(action.payload)
          .pipe(map((data) => createUserSuccess({ payload: data })));
      })
    );
  });
}
