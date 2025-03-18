import { DeveloperProfile } from "store/profile";
import { create } from "zustand";

export interface AppState {
  profile?: DeveloperProfile;
  setProfile: (data: DeveloperProfile) => void;
}

export const useStoreProfile = create<AppState>((set, get, store) => ({
  profile: {} as DeveloperProfile,
  // setProfile: (data: DeveloperProfile) => set((state) => ({ ...state, profile: data })),
  setProfile: (data: DeveloperProfile) => set((state) => ({ profile: data })),
}));
