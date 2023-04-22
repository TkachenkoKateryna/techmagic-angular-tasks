import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatGridListModule } from '@angular/material/grid-list';

import { UserCardComponent } from './user-card/user-card.component';
import { UsersListComponent } from './users-list/users-list.component';

@NgModule({
  declarations: [UserCardComponent, UsersListComponent],
  imports: [CommonModule, MatCheckboxModule, MatCardModule, MatGridListModule],
  exports: [UsersListComponent],
})
export class UsersModule {}
