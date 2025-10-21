import { SiteDiary } from '@/types/__generated__/graphql';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface SiteDiariesState {
  addDiary: (diary: SiteDiary) => void;
  clearDiaries: () => void;
  localDiaries: Array<SiteDiary>;
}

export const useSiteDiariesStore = create<SiteDiariesState>()(
  persist(
    (set) => ({
      addDiary: (diary) =>
        set((state) => ({
          localDiaries: [diary, ...state.localDiaries],
        })),
      clearDiaries: () => set({ localDiaries: [] }),
      localDiaries: [],
    }),
    {
      name: 'site-diaries-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
