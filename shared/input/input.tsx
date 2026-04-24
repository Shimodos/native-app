import { StyleSheet, TextInput, View, TextInputProps } from 'react-native';
import { Colors, Gaps, Radius } from '../tokens';

export function Input(props: TextInputProps) {
  return (
    <View style={styles.form}>
      <TextInput style={styles.input} placeholderTextColor={Colors.gray} {...props} />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    alignSelf: 'stretch',
    gap: Gaps.g16,
  },
  input: {
    borderColor: 'none',
    backgroundColor: Colors.violetDark,
    height: 58,
    borderRadius: Radius.r10,
    paddingHorizontal: 24,
    fontSize: 16,
    color: Colors.gray,
  },
});
