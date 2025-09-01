import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.flexContainer}>
        <Text style={styles.textStyle}>Hello, world!</Text>
        {/* <TextInput style={styles.input} placeholder="Type here..." /> */}
      </View>
      <View style={styles.button}>
        <Button title="Press me" onPress={() => alert('Button pressed!')} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'lightgray',
          marginTop: 20,
          alignItems: 'flex-end',
          // justifyContent: 'space-around',
          height: 400,
        }}
      >
        <View style={{ backgroundColor: 'red', flexBasis: 150, flexGrow: 1, height: 100 }}>
          <Text>Red Box</Text>
        </View>
        <View style={{ backgroundColor: 'green', flexBasis: 100, flexGrow: 1, height: 100 }}>
          <Text>Green Box</Text>
        </View>
        <View style={{ backgroundColor: 'blue', flexBasis: 100, flexGrow: 1, height: 100 }}>
          <Text>Blue Box</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  flexContainer: {
    backgroundColor: 'lightgray',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    height: 60,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    width: 200,
    borderRadius: 10,
  },
  button: {
    borderRadius: 10,
    marginTop: 20,
  },
  textStyle: {
    backgroundColor: 'lightgray',
    color: '#3184f9',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
