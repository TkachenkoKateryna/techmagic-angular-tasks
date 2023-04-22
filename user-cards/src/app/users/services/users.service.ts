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
  {
    id: 5,
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
  storedUsers: User[];

  constructor() {
    this.storedUsers = mockedUsersList;
  }

  getInitialUsers() {
    return this.storedUsers;
  }

  sortUsers(users: User[], option: string) {
    let returnedUsers = users.sort((a: User, b: User) =>
      a.firstName.localeCompare(b.firstName)
    );

    if (option === 'desc') {
      returnedUsers = returnedUsers.reverse();
    }

    return returnedUsers;
  }

  searchOnUsers(users: User[], value: string) {
    if (value) {
      return users.filter(
        (user) =>
          user.firstName.toLowerCase().includes(value.toLowerCase()) ||
          user.lastName.toLowerCase().includes(value.toLowerCase())
      );
    }

    return this.storedUsers;
  }

  deleteUsers(users: User[], userIds: number[]) {
    this.storedUsers = this.storedUsers.filter(
      (user) => !userIds.includes(user.id)
    );

    return users.filter((user) => !userIds.includes(user.id));
  }
}
