import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  errorContainer: {
    backgroundColor: '#fee2e2',
    borderRadius: 8,
    marginBottom: 16,
    padding: 12,
  },
  errorMessageText: {
    color: '#dc2626',
    fontSize: 14,
    textAlign: 'center',
  },
  errorText: {
    color: '#dc2626',
    fontSize: 12,
    marginTop: 4,
  },
  formGroup: {
    marginBottom: 24,
  },
  input: {
    backgroundColor: '#ffffff',
    borderColor: '#d1d5db',
    borderRadius: 8,
    borderWidth: 1,
    color: '#000000',
    fontSize: 16,
    padding: 12,
  },
  inputError: {
    borderColor: '#dc2626',
  },
  label: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
  },
  required: {
    color: '#dc2626',
  },
  submitButton: {
    alignItems: 'center',
    backgroundColor: '#3b82f6',
    borderRadius: 8,
    marginTop: 16,
    padding: 16,
  },
  submitButtonDisabled: {
    backgroundColor: '#9ca3af',
  },
  submitButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  successContainer: {
    backgroundColor: '#10b981',
    borderRadius: 8,
    marginBottom: 16,
    padding: 12,
  },
  successText: {
    color: '#ffffff',
    fontSize: 14,
    textAlign: 'center',
  },
  textArea: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  weatherContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  weatherField: {
    flex: 1,
  },
  weatherLabel: {
    color: '#6b7280',
    fontSize: 12,
    marginBottom: 4,
  },
});
