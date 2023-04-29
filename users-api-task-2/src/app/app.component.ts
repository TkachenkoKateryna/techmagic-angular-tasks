import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from './store/app-store';
import { getAllUsers } from './users/state/users.actions';
import { toggleModal } from './shared/state/shared.actions';
import { getModalStatus } from './shared/state/shared.selectors';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	users$: Observable<User[]>;
	isModalOpen$ = this.store.select(getModalStatus);

	constructor(private store: Store<AppState>) {}

	ngOnInit() {
		this.store.dispatch(getAllUsers());
	}

	onClick() {
		this.store.dispatch(toggleModal());
	}
}
