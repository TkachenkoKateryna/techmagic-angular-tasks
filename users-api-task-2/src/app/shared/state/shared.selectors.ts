import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SharedState } from './shared.state';

const getSharedState = createFeatureSelector<SharedState>('shared');

export const getModalStatus = createSelector(
	getSharedState,
	(state) => state.isModalOpen
);
