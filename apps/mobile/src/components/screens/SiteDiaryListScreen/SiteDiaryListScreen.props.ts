import { SiteDiary } from '@/types/__generated__/graphql';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface SiteDiaryListScreenProps {
  // Public props from route/parent
}

export interface SiteDiaryListScreenPrivateProps {
  data: Array<SiteDiary>;
  error?: Error;
  loading: boolean;
  refetch: () => void;
}

export type SiteDiaryListScreenViewProps = SiteDiaryListScreenProps &
  SiteDiaryListScreenPrivateProps;
