import { View, Text, StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../shared/tokens';
import { useAtom, useSetAtom } from 'jotai';
import { loginAtom, logoutAtom } from '../../entities/auth/model/auth.state';
import { useEffect } from 'react';

export default function MyCoursePage() {
	const [auth, login] = useAtom(loginAtom);
	const logout = useSetAtom(logoutAtom);

	useEffect(() => {
		// Example login request
		login({ email: 'partisan@bk.ru', password: 'J5knFU3PqsXNVKv' });
	}, [login]);

	useEffect(() => {
		// Example logout request after 5 seconds
		const timer = setTimeout(() => {
			logout();
		}, 5000);
		return () => clearTimeout(timer);
	}, [logout]);

	return (
		<View>
			<Text style={styles.textStyle}>{auth.access_token}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	textStyle: {
		color: Colors.text,
		fontSize: 12,
		fontWeight: 'bold',
		fontFamily: Fonts.semibold,
		textAlign: 'center',
	},
});
