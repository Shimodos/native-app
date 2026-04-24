import { StatusBar } from 'expo-status-bar';
import { Button, Dimensions, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import { Input } from './shared/input/input';
import { Colors, Gaps } from './shared/tokens';
import EyeClosedIcon from './assets/icons/eye-closed';
import EyeOpenedIcon from './assets/icons/eye-opened';

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
          <EyeClosedIcon />
          <EyeOpenedIcon />
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
    backgroundColor: Colors.balck,
  },
  content: {
    alignItems: 'center',
    gap: Gaps.g60,
  },
  textStyle: {
    color: Colors.text,
    fontSize: 24,
    fontWeight: 'bold',
  },
  form: {
    alignSelf: 'stretch',
    gap: Gaps.g16,
  },
  logo: {
    width: 220,
  },
});
