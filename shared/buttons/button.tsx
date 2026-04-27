import { Pressable, PressableProps, StyleSheet, View, Text } from 'react-native';
import { Colors, FontSizes, Radius } from '../tokens';

export function Button({ title, ...props }: PressableProps & { title: string }) {
  return (
    <Pressable {...props}>
      <View style={styles.button}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    height: 58,
    borderRadius: Radius.r10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: Colors.gray,
    fontSize: FontSizes.fs18,
  },
});
