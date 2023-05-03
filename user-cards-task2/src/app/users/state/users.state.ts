export interface UsersState {
  users: User[];
  selectedUserIds: number[];
  loading: boolean;
  error: string;
}

export const initialState: UsersState = {
  users: [],
  selectedUserIds: [],
  loading: false,
  error: '',
};
