import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';

import { UsersTableComponent } from './users-table/users-table.component';
import { UsersEffects } from './state/users.effects';
import { SharedModule } from '../shared/shared.module';
import { UsersCreateFormComponent } from './users-create-form/users-create-form.component';

@NgModule({
  declarations: [UsersTableComponent, UsersCreateFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    EffectsModule.forFeature([UsersEffects]),
  ],
  exports: [UsersTableComponent, UsersCreateFormComponent],
})
export class UsersModule {}
