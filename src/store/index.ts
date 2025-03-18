import { DeveloperProfile, developerProfile } from "store/profile";
import { create } from 'zustand';

export interface AppState {
  profile?: DeveloperProfile;
  setProfile: (data: DeveloperProfile) => void;
}

export const useStore = create<AppState>((set, get, store) => ({
  profile: developerProfile,
  // setProfile: (data: DeveloperProfile) => set((state) => ({ ...state, profile: data })),
  setProfile: (data: DeveloperProfile) => set((state) => ({ profile: data })),
}));