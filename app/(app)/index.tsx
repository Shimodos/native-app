import { View, Text, StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../shared/tokens';
import { useAtomValue } from 'jotai';
import { loginAtom } from '../../entities/auth/model/auth.state';
import { useEffect } from 'react';
import { router, useRootNavigationState } from 'expo-router';

export default function MyCoursePage() {
	const { access_token } = useAtomValue(loginAtom);
	const state = useRootNavigationState();

	useEffect(() => {
		if (!state?.key) return;
		if (!access_token) {
			router.replace('/login');
		}
	}, [access_token]);

	return (
		<View>
			<Text style={styles.textStyle}>index</Text>
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
