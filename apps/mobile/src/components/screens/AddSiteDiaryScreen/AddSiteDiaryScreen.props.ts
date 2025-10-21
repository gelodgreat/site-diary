// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface AddSiteDiaryScreenProps {
  // Public props from route/parent
}

export interface AddSiteDiaryScreenPrivateProps {
  attachments: string;
  attendees: string;
  content: string;
  createdBy: string;
  date: string;
  error?: string;
  handleSubmit: () => Promise<void>;
  loading: boolean;
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

export type AddSiteDiaryScreenViewProps = AddSiteDiaryScreenProps &
  AddSiteDiaryScreenPrivateProps;
