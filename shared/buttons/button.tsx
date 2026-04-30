import { useRef } from 'react';
import {
	Pressable,
	PressableProps,
	StyleSheet,
	Text,
	Animated,
	GestureResponderEvent,
} from 'react-native';
import { Colors, FontSizes, Radius } from '../tokens';

export function Button({ title, ...props }: PressableProps & { title: string }) {
	const animatedValue = useRef(new Animated.Value(100)).current;
	const color = animatedValue.interpolate({
		inputRange: [0, 100],
		outputRange: [Colors.primaryHover, Colors.primary],
	});

	const fadeIn = (e: GestureResponderEvent) => {
		Animated.timing(animatedValue, {
			toValue: 0,
			useNativeDriver: false,
			duration: 300,
		}).start();
		props.onPressIn && props.onPressIn(e);
	};

	const fadeOut = (e: GestureResponderEvent) => {
		Animated.timing(animatedValue, {
			toValue: 100,
			useNativeDriver: false,
			duration: 300,
		}).start();
		props.onPressOut && props.onPressOut(e);
	};

	return (
		<Pressable
			{...props}
			onPressIn={(e) => {
				fadeIn(e);
			}}
			onPressOut={(e) => {
				fadeOut(e);
			}}
		>
			<Animated.View
				style={{
					...styles.button,
					backgroundColor: color,
				}}
			>
				<Text style={styles.text}>{title}</Text>
			</Animated.View>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	button: {
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
