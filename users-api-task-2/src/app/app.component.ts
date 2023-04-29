import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from './store/app-store';
import { getAllUsersAction } from './users/state/users.actions';
import { toggleModalAction } from './shared/state/shared.actions';
import { getModalStatus } from './shared/state/shared.selectors';
import { getUserError } from './users/state/users.selectors';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	users$: Observable<User[]>;
	isModalOpen$ = this.store.select(getModalStatus);
	errorMessage$: Observable<string>;

	constructor(private store: Store<AppState>) {}

	ngOnInit() {
		this.store.dispatch(getAllUsersAction());
		this.errorMessage$ = this.store.select(getUserError);
	}

	onClick() {
		this.store.dispatch(toggleModalAction());
	}
}
