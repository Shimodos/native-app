import { View, Text, StyleSheet, Pressable } from 'react-native';
import { router } from 'expo-router';
import { Colors, Gaps } from '../shared/tokens';

export default function Restore() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Restore</Text>
			<Pressable onPress={() => router.back()}>
				<Text style={styles.textBack}>Go back to login</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
		gap: Gaps.g16,
		backgroundColor: Colors.black,
	},
	text: {
		fontSize: 24,
		fontWeight: 'bold',
		color: Colors.text,
	},
	textBack: {
		fontSize: 16,
		color: Colors.link,
	},
});
