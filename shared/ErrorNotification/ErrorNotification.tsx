import { Animated, StyleSheet, Text } from 'react-native';
import { ErrorNotificationProps } from './ErrorNotificationProps';
import { useState, useEffect } from 'react';
import { FontSizes, Colors } from '../tokens';

export function ErrorNotification({ message }: ErrorNotificationProps) {
	const [isVisible, setIsVisible] = useState<boolean>(false);
	const animatedValue = new Animated.Value(-100);

	const onEnter = () => {
		setIsVisible(true);
		Animated.timing(animatedValue, {
			toValue: 0,
			duration: 300,
			useNativeDriver: true,
		}).start();
	};

	useEffect(() => {
		if (!message) {
			setIsVisible(false);
			return;
		}
		setIsVisible(true);
		const timer = setTimeout(() => {
			setIsVisible(false);
		}, 3000);

		return () => clearTimeout(timer);
	}, [message]);

	if (!isVisible) {
		return <></>;
	}

	return (
		<Animated.View
			style={[styles.container, { transform: [{ translateY: animatedValue }] }]}
			onLayout={onEnter}
		>
			<Text style={styles.text}>{message}</Text>
		</Animated.View>
	);
}

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		top: 60,
		left: 0,
		right: 0,
		backgroundColor: Colors.red,
		padding: 16,
		alignItems: 'center',
		justifyContent: 'center',
		zIndex: 1,
	},
	text: {
		color: Colors.white,
		fontSize: FontSizes.fs16,
		fontWeight: 'bold',
	},
});
