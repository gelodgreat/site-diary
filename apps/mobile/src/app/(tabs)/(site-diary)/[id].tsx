import { SiteDiaryDetailScreen } from '@/components/screens/SiteDiaryDetailScreen';
import { useLocalSearchParams } from 'expo-router';

const SiteDiaryDetailRoute: React.FC = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  if (!id) {
    return null;
  }

  return <SiteDiaryDetailScreen id={id} />;
};

SiteDiaryDetailRoute.displayName = 'SiteDiaryDetailRoute';

export default SiteDiaryDetailRoute;
