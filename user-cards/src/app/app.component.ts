import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { UsersService } from './users/services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  users: User[];
  selectedUsersIds: number[] = [];
  eventsSubject: Subject<void> = new Subject<void>();

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.users = this.usersService.getInitialUsers();
  }

  sort(value: string) {
    this.users = this.usersService.sortUsers(this.users, value);
  }

  search(value: string) {
    this.users = this.usersService.searchOnUsers(this.users, value);
  }

  onDelete() {
    this.users = this.usersService.deleteUsers(
      this.users,
      this.selectedUsersIds
    );
  }

  onSelectAll() {
    this.eventsSubject.next();
  }

  fillSelectedIds(ids: number[]) {
    this.selectedUsersIds = ids;
  }
}
