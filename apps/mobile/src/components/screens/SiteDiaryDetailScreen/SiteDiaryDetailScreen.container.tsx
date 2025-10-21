import { SITE_DIARY_QUERY } from '@/graphql/queries/siteDiary';
import { useSiteDiariesStore } from '@/stores/useSiteDiariesStore';
import {
  SiteDiaryQuery,
  SiteDiaryQueryVariables,
} from '@/types/__generated__/graphql';
import { useQuery } from '@apollo/client/react/compiled';
import React from 'react';
import {
  SiteDiaryDetailScreenPrivateProps,
  SiteDiaryDetailScreenProps,
} from './SiteDiaryDetailScreen.props';
import SiteDiaryDetailScreenView from './SiteDiaryDetailScreen.view';

const SiteDiaryDetailScreen = (props: SiteDiaryDetailScreenProps) => {
  const { data, error, loading, refetch } = useQuery<
    SiteDiaryQuery,
    SiteDiaryQueryVariables
  >(SITE_DIARY_QUERY, {
    fetchPolicy: 'cache-first',
    variables: { id: props.id },
  });

  const localDiaries = useSiteDiariesStore((state) => state.localDiaries);
  const localDiary = data?.siteDiary
    ? null
    : localDiaries.find((d) => d.id === props.id);

  const privateProps: SiteDiaryDetailScreenPrivateProps = {
    // If the diary is not found on the server, check local diaries
    data: data?.siteDiary || localDiary || null,
    error: error as Error | undefined,
    loading,
    refetch,
  };

  return <SiteDiaryDetailScreenView {...props} {...privateProps} />;
};

SiteDiaryDetailScreen.displayName = 'SiteDiaryDetailScreen';

export default SiteDiaryDetailScreen;
