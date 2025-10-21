import { SITE_DIARIES_QUERY } from '@/graphql/queries/siteDiaries';
import { useSiteDiariesStore } from '@/stores/useSiteDiariesStore';
import {
  SiteDiariesQuery,
  SiteDiariesQueryVariables,
} from '@/types/__generated__/graphql';
import { useQuery } from '@apollo/client/react/compiled';
import React from 'react';
import {
  SiteDiaryListScreenPrivateProps,
  SiteDiaryListScreenProps,
} from './SiteDiaryListScreen.props';
import SiteDiaryListScreenView from './SiteDiaryListScreen.view';

const SiteDiaryListScreen = (props: SiteDiaryListScreenProps) => {
  const { data, error, loading, refetch } = useQuery<
    SiteDiariesQuery,
    SiteDiariesQueryVariables
  >(SITE_DIARIES_QUERY, {
    fetchPolicy: 'cache-first',
  });

  const localDiaries = useSiteDiariesStore((state) => state.localDiaries);
  // this one we merge local diaries with server diaries
  const allDiaries = [...localDiaries, ...(data?.siteDiaries || [])];

  const privateProps: SiteDiaryListScreenPrivateProps = {
    data: allDiaries,
    error: error as Error | undefined,
    loading,
    refetch,
  };

  return <SiteDiaryListScreenView {...props} {...privateProps} />;
};

SiteDiaryListScreen.displayName = 'SiteDiaryListScreen';

export default SiteDiaryListScreen;
