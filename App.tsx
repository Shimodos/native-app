import { StyleSheet, Text, View } from 'react-native';
import { Input } from './shared/input/input';
import { Colors, Gaps } from './shared/tokens';
import { Button as CustomButton } from './shared/buttons/button';
import { ErrorNotification } from './shared/ErrorNotification/ErrorNotification';
import { useState } from 'react';

export default function App() {
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
				<Text style={styles.textStyle}>Anti Navigator</Text>
				<View style={styles.form}>
					<Input placeholder="Email" />
					<Input placeholder="Password" isPassword />
					<CustomButton title="Login" onPress={alert} />
				</View>
				<Text style={styles.textStyle}>Recover password</Text>
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
		backgroundColor: Colors.balck,
	},
	content: {
		alignItems: 'center',
		gap: Gaps.g60,
	},
	textStyle: {
		color: Colors.text,
		fontSize: 24,
		fontWeight: 'bold',
	},
	form: {
		alignSelf: 'stretch',
		gap: Gaps.g16,
	},
});
