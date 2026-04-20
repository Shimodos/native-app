import { StyleSheet, TextInput, View, TextInputProps } from 'react-native';

export function Input(props: TextInputProps) {
  return (
    <View style={styles.form}>
      <TextInput style={styles.input} placeholderTextColor={'#888'} {...props} />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    alignSelf: 'stretch',
    gap: 16,
  },
  input: {
    borderColor: 'none',
    backgroundColor: '#2E2D3D',
    height: 58,
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    color: '#fff',
  },
});
