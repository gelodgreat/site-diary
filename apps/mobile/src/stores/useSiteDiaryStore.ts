import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface SiteDiaryFormState {
  title: string;
  date: string;
  createdBy: string;
  setTitle: (title: string) => void;
  setDate: (date: string) => void;
  setCreatedBy: (createdBy: string) => void;
  resetForm: () => void;
}

export const useSiteDiaryStore = create<SiteDiaryFormState>()(
  persist(
    (set) => ({
      title: '',
      date: new Date().toISOString().split('T')[0],
      createdBy: '',
      setTitle: (title) => set({ title }),
      setDate: (date) => set({ date }),
      setCreatedBy: (createdBy) => set({ createdBy }),
      resetForm: () =>
        set({
          title: '',
          date: new Date().toISOString().split('T')[0],
          createdBy: '',
        }),
    }),
    {
      name: 'site-diary-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
