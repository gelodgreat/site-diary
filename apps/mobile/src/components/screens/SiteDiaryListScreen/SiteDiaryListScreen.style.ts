import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  emptyContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 32,
  },
  emptyText: {
    color: '#666666',
    fontSize: 16,
    marginTop: 16,
    textAlign: 'center',
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
  header: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderBottomColor: '#e5e5e5',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  headerTitle: {
    color: '#000000',
    fontSize: 24,
    fontWeight: '600',
  },
  itemContainer: {
    backgroundColor: '#ffffff',
    borderBottomColor: '#e5e5e5',
    borderBottomWidth: 1,
    padding: 16,
  },
  itemDate: {
    color: '#666666',
    fontSize: 14,
  },
  itemTitle: {
    color: '#000000',
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 4,
  },
});
