import { StatusBar } from 'expo-status-bar';
import { Button, Dimensions, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import { Input } from './shared/input/input';

const onClick = () => {
  alert('Button Pressed!');
};

export default function App() {
  const width = Dimensions.get('window').width;

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* <Image style={styles.logo} source={require('./assets/logo.png')} resizeMode="contain" /> */}
        <Text style={styles.textStyle}>Anti Navigator</Text>
        <View style={styles.form}>
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Button title="Login" onPress={onClick} />
        </View>
        <Text style={styles.textStyle}>Recover password</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    padding: 55,
    backgroundColor: '#1E1D29',
  },
  content: {
    alignItems: 'center',
    gap: 50,
  },
  textStyle: {
    color: '#3184f9',
    fontSize: 24,
    fontWeight: 'bold',
  },
  form: {
    alignSelf: 'stretch',
    gap: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: 'none',
    backgroundColor: '#2E2D3D',
  },
  logo: {
    width: 220,
  },
});
