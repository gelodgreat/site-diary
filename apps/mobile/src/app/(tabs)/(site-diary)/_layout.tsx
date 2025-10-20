import { Stack } from 'expo-router';

const SiteDiaryLayout: React.FC = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="[id]" />
      <Stack.Screen name="add" />
    </Stack>
  );
};

SiteDiaryLayout.displayName = 'SiteDiaryLayout';

export default SiteDiaryLayout;
