import { View, Text, StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../shared/tokens';
import { useAtom } from 'jotai';
import { loginAtom } from '../../entities/auth/model/auth.state';
import { useEffect } from 'react';

export default function MyCoursePage() {
	const [auth, login] = useAtom(loginAtom);

	useEffect(() => {
		// Example login request
		login({ email: 'partisan@bk.ru', password: 'J5knFU3PqsXNVKv' });
	}, [login]);

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
