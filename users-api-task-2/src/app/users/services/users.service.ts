import { Injectable } from '@angular/core';
import { ApiHttpService } from 'src/app/shared/services/api-http-service.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private httpService: ApiHttpService) {}

  public getAllUsers() {
    return this.httpService.get<User>('users');
  }

  public createUser(user: User) {
    return this.httpService.post('users', user);
  }

  public deleteUser(id: number) {
    return this.httpService.delete('users', id);
  }
}
