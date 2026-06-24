import { Pressable, StyleSheet, View } from 'react-native';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import CloseIcon from '../../../../assets/icons/close';

type DrawerNavigation = DrawerContentComponentProps['navigation'];

export function CloseDrawer({ navigation }: { navigation: DrawerNavigation }) {
	return (
		<Pressable onPress={() => navigation.closeDrawer()}>
			<View
				style={{
					...styles.button,
					// backgroundColor: Colors.blackLight,
				}}
			>
				<CloseIcon />
			</View>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	button: {
		// height: 58,
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		top: 20,
		right: 20,
	},
});
