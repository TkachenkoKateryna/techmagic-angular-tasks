import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortUsers',
})
export class SortUsersPipe implements PipeTransform {
  transform(users: User[], option: string): User[] {
    if (!users) {
      return [];
    }

    let returnedUsers = users
      .slice()
      .sort((a: User, b: User) => a.firstName.localeCompare(b.firstName));

    if (option === 'desc') {
      returnedUsers = returnedUsers.reverse();
    }
    return returnedUsers;
  }
}
