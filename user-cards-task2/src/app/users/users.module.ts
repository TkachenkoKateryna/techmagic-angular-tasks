import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from './state/users.effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from '../shared/shared.module';
import { SearchUsersPipe } from './pipes/search-users.pipe';
import { SortUsersPipe } from './pipes/sort-users.pipe';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UsersCreateFormComponent } from './components/users-create-form/users-create-form.component';

@NgModule({
  declarations: [
    UserCardComponent,
    UsersListComponent,
    SearchUsersPipe,
    UsersCreateFormComponent,
    SortUsersPipe,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    EffectsModule.forFeature([UsersEffects]),
    BrowserAnimationsModule,
  ],
  exports: [UsersListComponent, UsersCreateFormComponent],
})
export class UsersModule {}
