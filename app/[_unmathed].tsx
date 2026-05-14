import { StyleSheet, Image, Text, View } from 'react-native';
import { Colors, Fonts, FontSizes } from '../shared/tokens';
import { CustomLink } from '../shared/CustomLink/CustomLink';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Gaps } from '../shared/tokens';

export default function UnmatchedCustom() {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.content}>
				<Image source={require('../assets/images/unmatched.png')} style={styles.logo} />
				<Text style={styles.text}>Ooops... Page not found, please go back to the login page</Text>
				<CustomLink href="/" text="Recover password" />
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		flex: 1,
		padding: 55,
	},
	content: {
		alignItems: 'center',
		gap: Gaps.g50,
	},
	logo: {
		height: 350,
		aspectRatio: 1,
		resizeMode: 'contain',
	},
	text: {
		fontSize: FontSizes.fs24,
		fontFamily: Fonts.regular,
		color: Colors.white,
		textAlign: 'center',
	},
});
