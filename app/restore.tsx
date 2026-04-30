import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { Colors } from '../shared/tokens';

export default function Restore() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Restore</Text>
			<Link href="/">
				<Text style={styles.textBack}>Go back to login</Text>
			</Link>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
	},
	text: {
		fontSize: 24,
		fontWeight: 'bold',
		color: Colors.text,
	},
	textBack: {
		fontSize: 16,
		color: Colors.white,
	},
});
