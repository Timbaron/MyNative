import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [name,setName ] = useState('Timothy');
  const [age, setAge] = useState(21);

  const clickHandler = () => {
    setName('Samuel');
  }
  return (
    <View style={styles.container}>
      <Text>Enter Your Name</Text>
      <TextInput
        multiline
       style={styles.input} 
        placeholder="John Joe"
        onChangeText={(val) => setName(val)}
       />
       <Text>Enter yout age</Text>
       <TextInput 
        keyboardType='numeric'
        style={styles.input}
        placeholder="21"
        onChangeText={(age) => setAge(age)}
       />
      <Text>My name is {name} , age: {age}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    width: 200,
    height: 40,
    margin: 10,
    padding: 8,
  }
});