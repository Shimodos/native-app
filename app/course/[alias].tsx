import { View, Text, StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../shared/tokens';
import { useLocalSearchParams } from 'expo-router';

export default function CoursePage() {
	const { alias } = useLocalSearchParams();
	return (
		<View>
			<Text style={styles.textStyle}>Page: {alias}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	textStyle: {
		color: Colors.text,
		fontSize: 40,
		fontWeight: 'bold',
		fontFamily: Fonts.semibold,
		textAlign: 'center',
	},
});
