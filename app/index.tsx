import { StyleSheet, Text, View } from 'react-native';
import { Input } from '../shared/input/input';
import { Colors, Fonts, Gaps } from '../shared/tokens';
import { Button as CustomButton } from '../shared/buttons/button';
import { ErrorNotification } from '../shared/ErrorNotification/ErrorNotification';
import { useState } from 'react';
import { Link } from 'expo-router';

export default function Login() {
	const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);

	const alert = () => {
		setErrorMessage('An error occurred. Please try again later.');
		setTimeout(() => {
			setErrorMessage(undefined);
		}, 3000);
	};

	return (
		<View style={styles.container}>
			<ErrorNotification message={errorMessage} />
			<View style={styles.content}>
				<Text style={styles.textStyle}>AntiNavi</Text>
				<View style={styles.form}>
					<Input placeholder="Email" />
					<Input placeholder="Password" isPassword />
					<CustomButton title="Login" onPress={alert} />
				</View>
				<Link href="/restore">
					<Text style={styles.textStyleRestore}>Recover password</Text>
				</Link>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
		padding: 55,
		backgroundColor: Colors.black,
	},
	content: {
		alignItems: 'center',
		gap: Gaps.g16,
	},
	textStyle: {
		color: Colors.text,
		fontSize: 40,
		fontWeight: 'bold',
		fontFamily: Fonts.semibold,
	},
	form: {
		alignSelf: 'stretch',
		gap: Gaps.g16,
	},
	textStyleRestore: {
		color: Colors.primary,
		fontSize: 16,
		fontFamily: Fonts.regular,
	},
});
