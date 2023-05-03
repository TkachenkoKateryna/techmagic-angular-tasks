import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/store/app-store';
import { selectUserAction } from '../../state/users.actions';
import { getSelectedUserIds } from '../../state/users.selectors';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent {
  @Input() user: User;
  selectedUsersIds$ = this.store.select(getSelectedUserIds);

  constructor(private store: Store<AppState>) {}

  onCheck(id: number) {
    this.store.dispatch(selectUserAction({ payload: id }));
  }
}
