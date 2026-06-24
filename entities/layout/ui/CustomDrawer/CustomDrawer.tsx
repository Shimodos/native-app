import { DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { View, StyleSheet, Text } from 'react-native';
import { Colors } from '../../../../shared/tokens';
import { CustomLink } from '../../../../shared/CustomLink/CustomLink';
import { CloseDrawer } from '../../../../features/layout/ui/CloseDrawer/CloseDrawer';
import { useSetAtom } from 'jotai';
import { logoutAtom } from '../../../auth/model/auth.state';

export function CustomDrawer(props: DrawerContentComponentProps) {
	const logout = useSetAtom(logoutAtom);
	return (
		<DrawerContentScrollView {...props} contentContainerStyle={styles.scrollView}>
			<CloseDrawer navigation={props.navigation} />
			<View style={styles.contant}>
				<Text>Text</Text>
			</View>
			<View style={styles.footer}>
				<CustomLink text="Log out" onPress={() => logout()} href={'/login'} />
			</View>
		</DrawerContentScrollView>
	);
}

const styles = StyleSheet.create({
	scrollView: {
		flex: 1,
		backgroundColor: Colors.black,
	},
	contant: {
		flex: 1,
	},
	footer: {
		color: Colors.white,
		alignItems: 'center',
	},
});
