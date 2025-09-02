import { useRouter } from 'expo-router';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface Person {
  id: string;
  name: string;
  age: number;
  occupation: string;
}

const people: Person[] = [
  { id: '1', name: 'Alice Johnson', age: 28, occupation: 'Software Engineer' },
  { id: '2', name: 'Bob Smith', age: 34, occupation: 'Designer' },
  { id: '3', name: 'Carol Davis', age: 25, occupation: 'Product Manager' },
  { id: '4', name: 'David Wilson', age: 31, occupation: 'Data Scientist' },
  { id: '5', name: 'Emma Brown', age: 29, occupation: 'UX Researcher' },
  { id: '6', name: 'Frank Miller', age: 36, occupation: 'DevOps Engineer' },
  { id: '7', name: 'Grace Lee', age: 27, occupation: 'Frontend Developer' },
  { id: '8', name: 'Henry Taylor', age: 33, occupation: 'Backend Developer' },
];

function ListScreen() {
  const router = useRouter();

  const renderItem = ({ item }: { item: Person }) => (
    <TouchableOpacity
      style={styles.listItem}
      onPress={() =>
        router.push({
          pathname: '/(tabs)/list/detail',
          params: {
            name: item.name,
            age: item.age.toString(),
            occupation: item.occupation,
            id: item.id,
          },
        })
      }
    >
      <View style={styles.itemContent}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemOccupation}>{item.occupation}</Text>
        <Text style={styles.itemAge}>Age: {item.age}</Text>
      </View>
      <Text style={styles.chevron}>›</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>People</Text>
      <FlatList
        data={people}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    padding: 20,
    paddingBottom: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  list: {
    flex: 1,
  },
  listItem: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  itemContent: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  itemOccupation: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
  },
  itemAge: {
    fontSize: 12,
    color: '#999',
  },
  chevron: {
    fontSize: 20,
    color: '#ccc',
    marginLeft: 10,
  },
});

export default ListScreen;
