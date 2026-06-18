import { View, Text, StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../shared/tokens';
import { Button } from '../../shared/buttons/button';
import { useSetAtom } from 'jotai';
import { logoutAtom } from '../../entities/auth/model/auth.state';

export default function MyCoursePage() {
	const logout = useSetAtom(logoutAtom);
	return (
		<View>
			<Text style={styles.textStyle}></Text>
			<Button title="log out" onPress={logout} />
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
