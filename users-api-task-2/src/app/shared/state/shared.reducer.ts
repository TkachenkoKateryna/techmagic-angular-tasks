import { createReducer, on } from '@ngrx/store';

import { toggleModalAction } from './shared.actions';
import { initialState } from './shared.state';

const _sharedReducer = createReducer(
	initialState,
	on(toggleModalAction, (state) => ({
		...state,
		isModalOpen: !state.isModalOpen,
	}))
);

export function sharedReducer(state: any, action: any) {
	return _sharedReducer(state, action);
}
