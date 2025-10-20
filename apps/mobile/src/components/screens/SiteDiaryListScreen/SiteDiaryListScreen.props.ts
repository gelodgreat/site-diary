import { SiteDiary } from '@/types/__generated__/graphql';

export interface SiteDiaryListScreenProps {
  // Public props from route/parent
}

export interface SiteDiaryListScreenPrivateProps {
  data: SiteDiary[];
  loading: boolean;
  error?: Error;
  refetch: () => void;
}

export type SiteDiaryListScreenViewProps = SiteDiaryListScreenProps &
  SiteDiaryListScreenPrivateProps;
