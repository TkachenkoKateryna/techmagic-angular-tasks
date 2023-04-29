export interface SharedState {
	isModalOpen: boolean;
	errorMessage: string;
}

export const initialState: SharedState = {
	isModalOpen: false,
	errorMessage: '',
};
