import { OfflineIndicator } from '@/components/OfflineIndicator';
import { Text } from '@/components/ui/text';
import { useNetworkStatus } from '@/utils/useNetworkStatus';
import React from 'react';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { AddSiteDiaryScreenViewProps } from './AddSiteDiaryScreen.props';
import { styles } from './AddSiteDiaryScreen.style';

const AddSiteDiaryScreenView = (props: AddSiteDiaryScreenViewProps) => {
  const isOnline = useNetworkStatus();

  const isFormValid =
    props.title.trim() && props.date.trim() && props.createdBy.trim();

  return (
    <SafeAreaView style={styles.container}>
      <OfflineIndicator />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView style={styles.content}>
          {/* Offline Warning */}
          {!isOnline && (
            <View style={styles.errorContainer}>
              <Text style={styles.errorMessageText}>
                ⚠️ You are offline. Please connect to the internet to create a
                site diary.
              </Text>
            </View>
          )}

          {/* Error Message */}
          {props.error && (
            <View style={styles.errorContainer}>
              <Text style={styles.errorMessageText}>{props.error}</Text>
            </View>
          )}

          {/* Title Field */}
          <View style={styles.formGroup}>
            <Text style={styles.label}>
              Title <Text style={styles.required}>*</Text>
            </Text>
            <TextInput
              editable={!props.loading}
              onChangeText={props.setTitle}
              placeholder="Enter diary title"
              placeholderTextColor="#9ca3af"
              style={[
                styles.input,
                props.error && !props.title.trim() && styles.inputError,
              ]}
              value={props.title}
            />
            {props.error && !props.title.trim() && (
              <Text style={styles.errorText}>Title is required</Text>
            )}
          </View>

          {/* Date Field */}
          <View style={styles.formGroup}>
            <Text style={styles.label}>
              Date <Text style={styles.required}>*</Text>
            </Text>
            <TextInput
              editable={!props.loading}
              onChangeText={props.setDate}
              placeholder="YYYY-MM-DD"
              placeholderTextColor="#9ca3af"
              style={[
                styles.input,
                props.error && !props.date.trim() && styles.inputError,
              ]}
              value={props.date}
            />
            {props.error && !props.date.trim() && (
              <Text style={styles.errorText}>Date is required</Text>
            )}
            <Text className="mt-1 text-xs text-gray-500">
              Format: {new Date().toISOString().split('T')[0]}
            </Text>
          </View>

          {/* Created By Field */}
          <View style={styles.formGroup}>
            <Text style={styles.label}>
              Created By <Text style={styles.required}>*</Text>
            </Text>
            <TextInput
              editable={!props.loading}
              onChangeText={props.setCreatedBy}
              placeholder="Enter your name"
              placeholderTextColor="#9ca3af"
              style={[
                styles.input,
                props.error && !props.createdBy.trim() && styles.inputError,
              ]}
              value={props.createdBy}
            />
            {props.error && !props.createdBy.trim() && (
              <Text style={styles.errorText}>Created by is required</Text>
            )}
          </View>

          {/* Content Field */}
          <View style={styles.formGroup}>
            <Text style={styles.label}>Content</Text>
            <TextInput
              editable={!props.loading}
              multiline
              numberOfLines={4}
              onChangeText={props.setContent}
              placeholder="Enter diary content/details"
              placeholderTextColor="#9ca3af"
              style={[styles.input, styles.textArea]}
              value={props.content}
            />
          </View>

          {/* Weather Section */}
          <View style={styles.formGroup}>
            <Text style={styles.label}>Weather</Text>
            <View style={styles.weatherContainer}>
              <View style={styles.weatherField}>
                <Text style={styles.weatherLabel}>Temperature (°C)</Text>
                <TextInput
                  editable={!props.loading}
                  keyboardType="numeric"
                  onChangeText={props.setWeatherTemp}
                  placeholder="25"
                  placeholderTextColor="#9ca3af"
                  style={styles.input}
                  value={props.weatherTemp}
                />
              </View>
              <View style={styles.weatherField}>
                <Text style={styles.weatherLabel}>Description</Text>
                <TextInput
                  editable={!props.loading}
                  onChangeText={props.setWeatherDesc}
                  placeholder="Sunny"
                  placeholderTextColor="#9ca3af"
                  style={styles.input}
                  value={props.weatherDesc}
                />
              </View>
            </View>
          </View>

          {/* Attendees Field */}
          <View style={styles.formGroup}>
            <Text style={styles.label}>Attendees</Text>
            <TextInput
              editable={!props.loading}
              onChangeText={props.setAttendees}
              placeholder="John Doe, Jane Smith, Bob Wilson"
              placeholderTextColor="#9ca3af"
              style={styles.input}
              value={props.attendees}
            />
            <Text className="mt-1 text-xs text-gray-500">
              Comma-separated names
            </Text>
          </View>

          {/* Attachments Field */}
          <View style={styles.formGroup}>
            <Text style={styles.label}>Attachments</Text>
            <TextInput
              editable={!props.loading}
              onChangeText={props.setAttachments}
              placeholder="https://example.com/photo1.jpg, https://..."
              placeholderTextColor="#9ca3af"
              style={styles.input}
              value={props.attachments}
            />
            <Text className="mt-1 text-xs text-gray-500">
              Comma-separated URLs
            </Text>
          </View>

          {/* Submit Button */}
          <TouchableOpacity
            disabled={!isFormValid || props.loading || !isOnline}
            onPress={props.handleSubmit}
            style={[
              styles.submitButton,
              (!isFormValid || props.loading || !isOnline) &&
                styles.submitButtonDisabled,
            ]}
          >
            {props.loading ? (
              <ActivityIndicator color="#ffffff" />
            ) : (
              <Text style={styles.submitButtonText}>Create Site Diary</Text>
            )}
          </TouchableOpacity>

          <Text className="mt-4 text-center text-xs text-gray-500">
            All fields marked with <Text className="text-red-600">*</Text> are
            required
          </Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

AddSiteDiaryScreenView.displayName = 'AddSiteDiaryScreenView';

export default AddSiteDiaryScreenView;
