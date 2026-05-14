import { StyleSheet, Text } from 'react-native';
import { Colors, Fonts, FontSizes } from '../tokens';
import { Link } from 'expo-router';
import { LinkProps } from 'expo-router/build/link/Link';

export function CustomLink({ text, ...props }: LinkProps & { text: string }) {
	return (
		<Link {...props} style={styles.link}>
			<Text>{text}</Text>
		</Link>
	);
}

const styles = StyleSheet.create({
	link: {
		fontSize: FontSizes.fs18,
		color: Colors.link,
		fontFamily: Fonts.regular,
	},
});
