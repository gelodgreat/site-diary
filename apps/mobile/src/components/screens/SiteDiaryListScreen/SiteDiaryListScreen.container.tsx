import { SITE_DIARIES_QUERY } from '@/graphql/queries/siteDiaries';
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

const SiteDiaryListScreen = (props: SiteDiaryListScreenProps): JSX.Element => {
  const { data, loading, error, refetch } = useQuery<
    SiteDiariesQuery,
    SiteDiariesQueryVariables
  >(SITE_DIARIES_QUERY, {
    fetchPolicy: 'cache-first', // Offline support
  });

  const privateProps: SiteDiaryListScreenPrivateProps = {
    data: data?.siteDiaries || [],
    loading,
    error: error as Error | undefined,
    refetch,
  };

  return <SiteDiaryListScreenView {...props} {...privateProps} />;
};

export default SiteDiaryListScreen;
