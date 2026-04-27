import { Alert, Platform, StyleSheet, Text, ToastAndroid, View } from 'react-native';
import { Input } from './shared/input/input';
import { Colors, Gaps } from './shared/tokens';
import { Button as CustomButton } from './shared/buttons/button';

const onClick = () => {
  Alert.alert('Title', 'Button Pressed!', [
    {
      text: 'OK',
      onPress: () => console.log('OK Pressed'),
      style: 'default',
    },
  ]);

  // if (Platform.OS === 'android') {
  //   ToastAndroid.showWithGravity('Button Pressed!', ToastAndroid.SHORT, ToastAndroid.CENTER);
  // }
};

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.textStyle}>Anti Navigator</Text>
        <View style={styles.form}>
          <Input placeholder="Email" />
          <Input placeholder="Password" isPassword />
          <CustomButton title="Login" onPress={onClick} />
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
