import { createReducer, on } from '@ngrx/store';

import { initialState } from './shared.state';
import { toggleModal } from './shared.actions';

const _sharedReducer = createReducer(
  initialState,
  on(toggleModal, (state) => ({ ...state, isModalOpen: !state.isModalOpen }))
);

export function sharedReducer(state: any, action: any) {
  return _sharedReducer(state, action);
}
