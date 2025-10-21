import { SiteDiary } from '@/types/__generated__/graphql';

export interface SiteDiaryDetailScreenProps {
  id: string;
}

export interface SiteDiaryDetailScreenPrivateProps {
  data: SiteDiary | null;
  error?: Error;
  loading: boolean;
  refetch: () => void;
}

export type SiteDiaryDetailScreenViewProps = SiteDiaryDetailScreenProps &
  SiteDiaryDetailScreenPrivateProps;
