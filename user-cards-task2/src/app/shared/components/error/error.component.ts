import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/store/app-store';
import { getUserError } from 'src/app/users/state/users.selectors';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent {
  errorMessage$ = this.store.select(getUserError);

  constructor(private store: Store<AppState>) {}
}
