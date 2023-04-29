import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { toggleModal } from 'src/app/shared/state/shared.actions';
import { AppState } from 'src/app/store/app-store';
import { createUser } from '../state/users.actions';

@Component({
  selector: 'app-users-create-form',
  templateUrl: './users-create-form.component.html',
  styleUrls: ['./users-create-form.component.css'],
})
export class UsersCreateFormComponent {
  userForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    username: [
      '',
      [Validators.required, Validators.minLength(2), Validators.maxLength(60)],
    ],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>
  ) {}

  onSubmit() {
    this.store.dispatch(createUser({ payload: this.userForm.value as User }));
    this.store.dispatch(toggleModal());
    this.userForm.reset();
  }
}
