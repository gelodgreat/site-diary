import { AppleStackPreset } from '@/lib/theme';
import { Stack } from 'expo-router';

export { ErrorBoundary } from 'expo-router';

const IndexLayout: React.FC = () => {
  return (
    <Stack screenOptions={AppleStackPreset}>
      <Stack.Screen name="index" options={{ title: 'Site Diary' }} />
      <Stack.Screen name="[id]" options={{ title: 'Site Diary Details' }} />
      <Stack.Screen name="add" options={{ title: 'Add Site Diary' }} />
    </Stack>
  );
};

IndexLayout.displayName = 'IndexLayout';

export default IndexLayout;
