import { Pressable, PressableProps, StyleSheet, View, Text, Animated } from 'react-native';
import { Colors, FontSizes, Radius } from '../tokens';

export function Button({ title, ...props }: PressableProps & { title: string }) {
  const animaatedValue = new Animated.ValueXY({ x: 0, y: 0 });

  Animated.timing(animaatedValue, {
    toValue: { x: 0, y: 20 },
    duration: 500,
    useNativeDriver: true,
  }).start();

  return (
    <Pressable {...props}>
      <Animated.View
        style={{
          ...styles.button,
          transform: [{ translateX: animaatedValue.x }, { translateY: animaatedValue.y }],
        }}
      >
        <Text style={styles.text}>{title}</Text>
      </Animated.View>
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
