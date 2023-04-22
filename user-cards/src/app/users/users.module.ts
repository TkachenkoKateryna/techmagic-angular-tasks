import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatGridListModule } from '@angular/material/grid-list';
import { UserCardComponent } from './user-card/user-card.component';
import { SharedModule } from '../shared/shared.module';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersService } from './users.service';

@NgModule({
  declarations: [UserCardComponent, UsersListComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatCheckboxModule,
    MatCardModule,
    MatGridListModule,
  ],
  exports: [UsersListComponent],
})
export class UsersModule {}
