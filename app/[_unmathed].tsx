import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../shared/tokens';

export default function UnmatchedCustom() {
	return (
		<View>
			<Text style={styles.content}>404 - Not Found</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	content: {
		fontSize: 32,
		fontWeight: 'bold',
		textAlign: 'center',
		justifyContent: 'center',
		alignItems: 'center',
		color: Colors.white,
		marginTop: 200,
	},
});
