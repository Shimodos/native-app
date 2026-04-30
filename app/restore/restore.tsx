import { View, Text } from 'react-native';
import { Link } from 'expo-router';

export default function Restore() {
	return (
		<View>
			<Text>Restore</Text>
			<Link href="/">
				<Text>Go back to login</Text>
			</Link>
		</View>
	);
}
