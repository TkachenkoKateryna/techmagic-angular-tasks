import { Component, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { AppState } from 'src/app/store/app-store';
import {
  deleteUserAction,
  selectAllUsersAction,
} from 'src/app/users/state/users.actions';
import {
  getSelectedUserIds,
  getUsers,
} from 'src/app/users/state/users.selectors';
import { UsersCreateFormComponent } from 'src/app/users/components/users-create-form/users-create-form.component';

@Component({
  selector: 'app-actions-toolbar',
  templateUrl: './actions-toolbar.component.html',
  styleUrls: ['./actions-toolbar.component.scss'],
})
export class ActionsToolbarComponent {
  @Output() searchEvent = new EventEmitter<string>();
  @Output() sortEvent = new EventEmitter<string>();
  users$ = this.store.select(getUsers);
  selectedSort: string = 'asc';
  selectedUsersIds: number[];
  sortOptions: SortOption[] = [
    { value: 'asc', label: 'Sort ASC' },
    { value: 'desc', label: 'Sort DESC' },
  ];

  constructor(private store: Store<AppState>, public dialog: MatDialog) {
    this.store
      .select(getSelectedUserIds)
      .subscribe((ids) => (this.selectedUsersIds = ids));
  }

  onSearchChange(event: Event) {
    this.searchEvent.emit((event.target as HTMLInputElement).value);
  }

  onSortChange(option: string) {
    this.sortEvent.emit(option);
  }

  onSelectAll() {
    this.store.dispatch(selectAllUsersAction());
  }

  onDelete() {
    this.selectedUsersIds.forEach((id) => {
      this.store.dispatch(deleteUserAction({ payload: id }));
    });
  }
  onAdd() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '500px';

    this.dialog.open(UsersCreateFormComponent, dialogConfig);
  }
}
