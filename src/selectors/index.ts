import { createSelector } from "reselect";
import { AppState } from "store";
import {
  Certificate,
  DeveloperProfile,
  Experience,
  Skill,
} from "store/profile";

export const profileSelector = (state: AppState) =>
  state.profile || ({} as DeveloperProfile);

export const contactsSelector = createSelector(
  [profileSelector],
  (profile) => profile?.contact || ([] as Skill[])
);

export const certificatesSelector = createSelector(
  [profileSelector],
  (profile) => profile?.certificates || ([] as Certificate[])
);

export const experienceSelector = createSelector(
  [profileSelector],
  (profile) => profile?.experience || ([] as Experience[])
);

export const skillsSelector = createSelector(
  [profileSelector],
  (profile) => profile?.skills || ([] as Skill[])
);
