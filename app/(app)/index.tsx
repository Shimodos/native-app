import { View, Text, StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../shared/tokens';
import { useAtom } from 'jotai';
import { profileAtom } from '../../entities/user/model/user.state';
import axios from 'axios';
import { API } from '../../entities/user/api/api';
import { useEffect } from 'react';
import { IAuthResponse } from '../../entities/auth/model/auth.interface';

export default function MyCoursePage() {
	const [profile] = useAtom(profileAtom);

	const login = async () => {
		try {
			const response = await axios.post<IAuthResponse>(API.login, {
				email: 'partisan@bk.ru',
				password: 'J5knFU3PqsXNVKv',
			});
			console.log('Login successful:', response.data);
		} catch (error) {
			console.error('Login failed:', error);
		}
	};

	useEffect(() => {
		login();
	}, []);

	return (
		<View>
			<Text style={styles.textStyle}>{profile?.profile?.name}</Text>
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
