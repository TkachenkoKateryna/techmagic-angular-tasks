import { Component, OnInit } from '@angular/core';
import { UsersService } from './users/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  users: User[];
  selectedUsers: User[];
  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.users = this.usersService.getUsers('');
  }

  sort(value: string) {
    this.users = this.usersService.getUsers(value);
  }

  search(value: string) {
    this.users = this.usersService.searchOnUsers(value);
  }

  selectAll() {}
}
