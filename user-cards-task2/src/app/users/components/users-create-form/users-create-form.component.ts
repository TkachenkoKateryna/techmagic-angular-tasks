import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { MatDialogRef } from '@angular/material/dialog';

import { AppState } from 'src/app/store/app-store';
import { createUserAction } from '../../state/users.actions';

@Component({
  selector: 'app-users-create-form',
  templateUrl: './users-create-form.component.html',
  styleUrls: ['./users-create-form.component.scss'],
})
export class UsersCreateFormComponent {
  userForm = this.formBuilder.group({
    firstName: ['', [Validators.required, Validators.minLength(2)]],
    lastName: [
      '',
      [Validators.required, Validators.minLength(2), Validators.maxLength(60)],
    ],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>,
    private dialogRef: MatDialogRef<UsersCreateFormComponent>
  ) {}

  onSubmit() {
    console.log(this.userForm.value);
    this.store.dispatch(
      createUserAction({ payload: this.userForm.value as User })
    );
    this.userForm.reset();
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }
}
