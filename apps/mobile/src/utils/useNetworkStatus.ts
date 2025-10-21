import * as Network from 'expo-network';
import { useEffect, useState } from 'react';

export const useNetworkStatus = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const checkNetwork = async () => {
      try {
        const networkState = await Network.getNetworkStateAsync();
        setIsOnline(networkState.isConnected ?? true);
      } catch {
        // Default to online if check fails
        setIsOnline(true);
      }
    };

    // Initial check
    checkNetwork();

    // Poll every 5 seconds
    const interval = setInterval(checkNetwork, 5000);

    return () => clearInterval(interval);
  }, []);

  return isOnline;
};
