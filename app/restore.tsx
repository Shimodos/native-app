import { View, Text } from 'react-native';
import { Link } from 'expo-router';
import { StyleSheet } from 'react-native';

export default function Restore() {
	return (
		<View style={styles.container}>
			<Text>Restore</Text>
			<Link href="/">
				<Text>Go back to login</Text>
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
});
