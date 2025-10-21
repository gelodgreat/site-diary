import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface SiteDiaryFormState {
  attachments: string;
  attendees: string;
  content: string;
  createdBy: string;
  date: string;
  resetForm: () => void;
  setAttachments: (attachments: string) => void;
  setAttendees: (attendees: string) => void;
  setContent: (content: string) => void;
  setCreatedBy: (createdBy: string) => void;
  setDate: (date: string) => void;
  setTitle: (title: string) => void;
  setWeatherDesc: (weatherDesc: string) => void;
  setWeatherTemp: (weatherTemp: string) => void;
  title: string;
  weatherDesc: string;
  weatherTemp: string;
}

export const useSiteDiaryStore = create<SiteDiaryFormState>()(
  persist(
    (set) => ({
      attachments: '',
      attendees: '',
      content: '',
      createdBy: '',
      date: new Date().toISOString().split('T')[0],
      resetForm: () =>
        set({
          attachments: '',
          attendees: '',
          content: '',
          createdBy: '',
          date: new Date().toISOString().split('T')[0],
          title: '',
          weatherDesc: '',
          weatherTemp: '',
        }),
      setAttachments: (attachments) => set({ attachments }),
      setAttendees: (attendees) => set({ attendees }),
      setContent: (content) => set({ content }),
      setCreatedBy: (createdBy) => set({ createdBy }),
      setDate: (date) => set({ date }),
      setTitle: (title) => set({ title }),
      setWeatherDesc: (weatherDesc) => set({ weatherDesc }),
      setWeatherTemp: (weatherTemp) => set({ weatherTemp }),
      title: '',
      weatherDesc: '',
      weatherTemp: '',
    }),
    {
      name: 'site-diary-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
