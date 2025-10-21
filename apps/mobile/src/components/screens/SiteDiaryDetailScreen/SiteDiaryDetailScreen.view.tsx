import { OfflineIndicator } from '@/components/OfflineIndicator';
import { Text } from '@/components/ui/text';
import React from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SiteDiaryDetailScreenViewProps } from './SiteDiaryDetailScreen.props';
import { styles } from './SiteDiaryDetailScreen.style';

const SiteDiaryDetailScreenView = (props: SiteDiaryDetailScreenViewProps) => {
  if (props.loading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator color="#3b82f6" size="large" />
          <Text className="mt-4 text-gray-600">Loading...</Text>
        </View>
      </SafeAreaView>
    );
  }

  if (props.error || !props.data) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>
            {props.error
              ? 'Error loading site diary.\nPlease check your connection and try again.'
              : 'Site diary not found.'}
          </Text>
          {props.error && (
            <TouchableOpacity
              className="mt-4 rounded bg-blue-500 px-6 py-3"
              onPress={() => props.refetch()}
            >
              <Text className="font-semibold text-white">Retry</Text>
            </TouchableOpacity>
          )}
        </View>
      </SafeAreaView>
    );
  }

  const diary = props.data;

  return (
    <SafeAreaView style={styles.container}>
      <OfflineIndicator />
      <ScrollView style={styles.content}>
        {/* Title Section */}
        <View style={styles.section}>
          <Text style={styles.title}>{diary.title}</Text>
          <Text style={styles.metadata}>
            {new Date(diary.date).toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'long',
              weekday: 'long',
              year: 'numeric',
            })}
          </Text>
          <Text style={styles.metadata}>Created by {diary.createdBy}</Text>
        </View>

        {/* Weather Section */}
        {diary.weather && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Weather</Text>
            <View style={styles.weatherContainer}>
              <Text className="text-2xl">
                {diary.weather.temperature > 25 ? '☀️' : '☁️'}
              </Text>
              <View className="ml-2">
                <Text style={styles.weatherText}>
                  {diary.weather.temperature}°C
                </Text>
                <Text className="text-sm text-gray-600">
                  {diary.weather.description}
                </Text>
              </View>
            </View>
          </View>
        )}

        {/* Content Section */}
        {diary.content && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Details</Text>
            <Text style={styles.contentText}>{diary.content}</Text>
          </View>
        )}

        {/* Attendees Section */}
        {diary.attendees && diary.attendees.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              Attendees ({diary.attendees.length})
            </Text>
            {diary.attendees.map((attendee, index) => (
              <Text key={index} style={styles.listItem}>
                • {attendee}
              </Text>
            ))}
          </View>
        )}

        {/* Attachments Section */}
        {diary.attachments && diary.attachments.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              Attachments ({diary.attachments.length})
            </Text>
            {diary.attachments.map((attachment, index) => (
              <Text key={index} style={styles.listItem}>
                📎 {attachment}
              </Text>
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

SiteDiaryDetailScreenView.displayName = 'SiteDiaryDetailScreenView';

export default SiteDiaryDetailScreenView;
