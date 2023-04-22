import { Injectable, OnInit } from '@angular/core';

const mockedUsersList: User[] = [
  {
    id: 1,
    firstName: 'Leanne',
    lastName: 'Bret',
    email: 'Sincere@april.biz',
    phone: '1-770-736-8031 x56442',
  },
  {
    id: 2,
    firstName: 'Deanne',
    lastName: 'Bret',
    email: 'Sincere@april.biz',
    phone: '1-770-736-8031 x56442',
  },
  {
    id: 3,
    firstName: 'Beanne',
    lastName: 'Bret',
    email: 'Sincere@april.biz',
    phone: '1-770-736-8031 x56442',
  },
  {
    id: 4,
    firstName: 'Seanne',
    lastName: 'Bret',
    email: 'Sincere@april.biz',
    phone: '1-770-736-8031 x56442',
  },
];

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users: User[];

  constructor() {
    this.users = mockedUsersList;
  }

  getUsers(option: string) {
    if (option) {
      let returnedUsers = this.users.sort((a: User, b: User) =>
        a.firstName.localeCompare(b.firstName)
      );

      if (option === 'desc') {
        returnedUsers = returnedUsers.reverse();
      }

      return returnedUsers;
    }

    return this.users;
  }

  searchOnUsers(value: string) {
    if (value) {
      return this.users.filter((user) => user.firstName.includes(value));
    }

    return this.users;
  }
}
