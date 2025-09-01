import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textStyle}>Hello, world!</Text>
      </View>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <TextInput style={styles.input} placeholder="Type here..." />
      <View style={styles.button}>
        <Button title="Press me" onPress={() => alert('Button pressed!')} />
      </View>
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
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
    paddingHorizontal: 10,
    width: 200,
    borderRadius: 10,
  },
  button: {
    borderRadius: 10,
    marginTop: 20,
  },
  textStyle: {
    color: '#3184f9',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
