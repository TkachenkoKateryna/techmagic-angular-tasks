export interface UsersState {
	users: User[];
	loading: boolean;
	error: string;
}

export const initialState: UsersState = {
	users: [],
	loading: false,
	error: '',
};
