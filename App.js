import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [people, setPeople] = useState([
    { name: 'John', id: 1 },
    { name: 'Peter', id: 2 },
    { name: 'Amy', id: 3 },
    { name: 'Hannah', id: 4 },
    { name: 'Michael', id: 5 },
    { name: 'Amy', id: 7 },
    { name: 'Hannah', id: 8 },
    { name: 'Michael', id: 9 },
  ]);
  return (
    <View style={styles.container}>

      <FlatList 
        keyExtractor={(item) => item.id}
        numColumns={2}
        data={people}
        renderItem={({item}) => (
          <Text style={styles.item}>{item.name}</Text>
        )}
      />
      {/* <ScrollView>
        {people.map(pep => (
            <View key={pep.key}>
              <Text style={styles.item}>{pep.name}</Text>
            </View>
          )
        )}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item: {
    marginTop: 24,
    padding: 30,
    BackgroundColor: 'red',
    fontSize: 24,
    marginTop: 24,
    marginHorizontal: 10,
    borderRadius: 10,
  }
});
