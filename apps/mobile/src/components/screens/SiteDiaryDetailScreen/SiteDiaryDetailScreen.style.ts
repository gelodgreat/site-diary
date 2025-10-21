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
  contentText: {
    color: '#000000',
    fontSize: 16,
    lineHeight: 24,
  },
  errorContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 32,
  },
  errorText: {
    color: '#dc2626',
    fontSize: 16,
    marginTop: 16,
    textAlign: 'center',
  },
  listItem: {
    color: '#000000',
    fontSize: 14,
    marginBottom: 4,
    paddingLeft: 8,
  },
  loadingContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  metadata: {
    color: '#666666',
    fontSize: 14,
    marginBottom: 4,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    color: '#666666',
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  title: {
    color: '#000000',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 8,
  },
  weatherContainer: {
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
    borderRadius: 8,
    flexDirection: 'row',
    padding: 12,
  },
  weatherText: {
    color: '#000000',
    fontSize: 14,
    marginLeft: 8,
  },
});
