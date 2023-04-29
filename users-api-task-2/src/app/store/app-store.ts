import { sharedReducer } from '../shared/state/shared.reducer';
import { usersReducer } from '../users/state/users.reducer';
import { UsersState } from '../users/state/users.state';

export interface AppState {
  users: UsersState;
}

export const appReducer = {
  users: usersReducer,
  shared: sharedReducer,
};
