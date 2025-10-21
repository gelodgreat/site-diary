import { useSiteDiariesStore } from '@/stores/useSiteDiariesStore';
import { useSiteDiaryStore } from '@/stores/useSiteDiaryStore';
import { SiteDiary } from '@/types/__generated__/graphql';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  AddSiteDiaryScreenPrivateProps,
  AddSiteDiaryScreenProps,
} from './AddSiteDiaryScreen.props';
import AddSiteDiaryScreenView from './AddSiteDiaryScreen.view';

const AddSiteDiaryScreen = (props: AddSiteDiaryScreenProps) => {
  const router = useRouter();
  const [error, setError] = useState<string | undefined>();
  const [loading, setLoading] = useState(false);

  const {
    attachments,
    attendees,
    content,
    createdBy,
    date,
    resetForm,
    setAttachments,
    setAttendees,
    setContent,
    setCreatedBy,
    setDate,
    setTitle,
    setWeatherDesc,
    setWeatherTemp,
    title,
    weatherDesc,
    weatherTemp,
  } = useSiteDiaryStore();

  const addDiary = useSiteDiariesStore((state) => state.addDiary);

  const handleSubmit = async () => {
    if (!title.trim()) {
      setError('Title is required');
      return;
    }
    if (!date.trim()) {
      setError('Date is required');
      return;
    }
    if (!createdBy.trim()) {
      setError('Created by is required');
      return;
    }

    setError(undefined);
    setLoading(true);

    try {
      // since we are using zustand for local storage, we create a unique id here for the new diary
      const id = `local-${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;

      // the attendees and attachments are stored as comma-separated strings in the form, so we need to split them into arrays
      const attendeesArray = attendees.trim()
        ? attendees.split(',').map((a) => a.trim())
        : [];
      const attachmentsArray = attachments.trim()
        ? attachments.split(',').map((a) => a.trim())
        : [];
      // weather is optional
      const weather =
        weatherTemp.trim() && weatherDesc.trim()
          ? {
              __typename: 'Weather' as const,
              description: weatherDesc.trim(),
              temperature: Number.parseInt(weatherTemp.trim(), 10),
            }
          : null;

      // we create the new diary object based on the interface of SiteDiary
      const newDiary: SiteDiary = {
        __typename: 'SiteDiary',
        attachments: attachmentsArray,
        attendees: attendeesArray,
        content: content.trim() || null,
        createdBy: createdBy.trim(),
        date: date.trim(),
        id,
        title: title.trim(),
        weather,
      };

      addDiary(newDiary);

      resetForm();
      router.back();
    } catch {
      setError('Failed to create diary');
    } finally {
      setLoading(false);
    }
  };

  // we prepare the private props to pass down to the view component to be passed on the view file
  const privateProps: AddSiteDiaryScreenPrivateProps = {
    attachments,
    attendees,
    content,
    createdBy,
    date,
    error,
    handleSubmit,
    loading,
    resetForm,
    setAttachments,
    setAttendees,
    setContent,
    setCreatedBy,
    setDate,
    setTitle,
    setWeatherDesc,
    setWeatherTemp,
    title,
    weatherDesc,
    weatherTemp,
  };

  return <AddSiteDiaryScreenView {...props} {...privateProps} />;
};

AddSiteDiaryScreen.displayName = 'AddSiteDiaryScreen';

export default AddSiteDiaryScreen;
