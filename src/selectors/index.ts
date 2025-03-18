import { createSelector } from 'reselect';
import { AppState, useStore } from 'store';


export const profileSelector = (state: AppState) => state.profile;

export const workingHistoryStats = createSelector(
  [profileSelector],
  (profile) => (profile?.working_history || [])
);

export const techStacksStats = createSelector(
  [profileSelector],
  (profile) => (profile?.tech_stacks || [])
);