import { Injectable } from '@angular/core';

const mockedUsersList: User[] = [
  {
    id: 1,
    firstName: 'Leanne',
    lastName: 'Luke',
    email: 'Luke@april.biz',
    phone: '1-744-732-8031 x32447',
  },
  {
    id: 2,
    firstName: 'Deanne',
    lastName: 'Bret',
    email: 'Bret@april.biz',
    phone: '1-770-736-8031 x56442',
  },
  {
    id: 3,
    firstName: 'Beanne',
    lastName: 'Black',
    email: 'Black@april.biz',
    phone: '1-333-736-3456 x56442',
  },
  {
    id: 4,
    firstName: 'Seanne',
    lastName: 'Alon',
    email: 'Alon@april.biz',
    phone: '1-332-323-3242 x56442',
  },
  {
    id: 5,
    firstName: 'Kate',
    lastName: 'Huhe',
    email: 'Huhe@april.biz',
    phone: '1-333-736-3323 x56442',
  },
];

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private storedUsers: User[];

  constructor() {
    this.storedUsers = mockedUsersList;
  }

  getInitialUsers() {
    return mockedUsersList;
  }

  sortUsers(users: User[], option: string) {
    if (option) {
      let returnedUsers = users.sort((a: User, b: User) =>
        a.firstName.localeCompare(b.firstName)
      );

      if (option === 'desc') {
        returnedUsers = returnedUsers.reverse();
      }
      return returnedUsers;
    }

    return users.sort((a: User, b: User) => a.id - b.id);
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
