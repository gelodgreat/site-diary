import { Text } from '@/components/ui/text';
import { SiteDiary } from '@/types/__generated__/graphql';
import { useRouter } from 'expo-router';
import React from 'react';
import {
  FlatList,
  RefreshControl,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';
import { SiteDiaryListScreenViewProps } from './SiteDiaryListScreen.props';
import { styles } from './SiteDiaryListScreen.style';

const SiteDiaryListScreenView = (props: SiteDiaryListScreenViewProps) => {
  const router = useRouter();

  const renderItem = ({ item }: { item: SiteDiary }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => router.push(`/(tabs)/(site-diary)/${item.id}`)}
    >
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text className="text-sm text-gray-600">
        {new Date(item.date).toLocaleDateString()} • by {item.createdBy}
      </Text>
      {item.weather && (
        <Text className="mt-1 text-xs text-gray-500">
          {item.weather.temperature}°C • {item.weather.description}
        </Text>
      )}
    </TouchableOpacity>
  );

  const renderEmpty = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>
        No site diaries found.{'\n'}Tap "Add New" to create one.
      </Text>
    </View>
  );

  if (props.error) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>
            Error loading site diaries.{'\n'}Please check your connection and
            try again.
          </Text>
          <TouchableOpacity
            className="mt-4 rounded bg-blue-500 px-6 py-3"
            onPress={() => props.refetch()}
          >
            <Text className="font-semibold text-white">Retry</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Site Diaries</Text>
        <TouchableOpacity
          className="rounded bg-blue-500 px-4 py-2"
          onPress={() => router.push('/(tabs)/(site-diary)/add')}
        >
          <Text className="font-semibold text-white">Add New</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={props.data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        refreshControl={
          <RefreshControl
            refreshing={props.loading}
            onRefresh={props.refetch}
          />
        }
        ListEmptyComponent={!props.loading ? renderEmpty : null}
        className="flex-1"
      />
    </SafeAreaView>
  );
};

export default SiteDiaryListScreenView;
