import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/store/app-store';
import { deleteUser } from '../state/users.actions';
import { getUsers, usersLoading } from '../state/users.selectors';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css'],
})
export class UsersTableComponent {
  users$ = this.store.select(getUsers);
  isLoading$ = this.store.select(usersLoading);

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  onUserDelete(id: number) {
    this.store.dispatch(deleteUser({ payload: id }));
  }
}
