import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchUsers',
})
export class SearchUsersPipe implements PipeTransform {
  transform(users: User[] | null, searchTerm: string): User[] {
    if (users === null) {
      return [];
    }
    if (!searchTerm) {
      return users;
    }

    return users.filter((user) => {
      return (
        user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.lastName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  }
}
