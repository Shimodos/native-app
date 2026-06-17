import { View, Text, StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../shared/tokens';
import { useAtom } from 'jotai';
import { profileAtom } from '../../entities/user/model/user.state';

export default function MyCoursePage() {
	const [profile] = useAtom(profileAtom);

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
