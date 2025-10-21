import { Text } from '@/components/ui/text';
import { useNetworkStatus } from '@/utils/useNetworkStatus';
import React from 'react';
import { View } from 'react-native';

export const OfflineIndicator = () => {
  const isOnline = useNetworkStatus();

  if (isOnline) {
    return null;
  }

  return (
    <View className="bg-yellow-500 p-2">
      <Text className="text-center font-semibold text-white">
        ⚠️ Offline Mode - Viewing cached data
      </Text>
    </View>
  );
};

OfflineIndicator.displayName = 'OfflineIndicator';
