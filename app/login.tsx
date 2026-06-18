import { StyleSheet, Text, View } from 'react-native';
import { Input } from '../shared/input/input';
import { Colors, Fonts, Gaps } from '../shared/tokens';
import { Button as CustomButton } from '../shared/buttons/button';
import { ErrorNotification } from '../shared/ErrorNotification/ErrorNotification';
import { useEffect, useState } from 'react';
import { CustomLink } from '../shared/CustomLink/CustomLink';
import { loginAtom } from '../entities/auth/model/auth.state';
import { useAtom } from 'jotai';
import { router } from 'expo-router';

export default function Login() {
	const [localErrorMessage, setLocalErrorMessage] = useState<string | undefined>(undefined);
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [{ access_token, error, isLoading }, login] = useAtom(loginAtom);

	const submit = () => {
		if (!email) {
			setLocalErrorMessage('Please enter email.');
			return;
		}
		if (!password) {
			setLocalErrorMessage('Please enter password.');
			return;
		}
		setLocalErrorMessage(undefined);
		login({ email, password });
	};

	useEffect(() => {
		if (error) {
			setLocalErrorMessage(error);
		}
	}, [error]);

	useEffect(() => {
		if (access_token) {
			router.replace('/(app)');
		}
	}, [access_token]);

	return (
		<View style={styles.container}>
			<ErrorNotification message={localErrorMessage} />
			<View style={styles.content}>
				<Text style={styles.textStyle}>AntiNavi</Text>
				<View style={styles.form}>
					<Input placeholder="Email" onChangeText={(text) => setEmail(text)} />
					<Input placeholder="Password" isPassword onChangeText={(text) => setPassword(text)} />
					<CustomButton title="Login" onPress={submit} />
				</View>
				<CustomLink href="/course/ts" text="Recover password" />
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
});
