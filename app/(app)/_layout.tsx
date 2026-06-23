import { Redirect, SplashScreen } from 'expo-router';
import { loginAtom } from '../../entities/auth/model/auth.state';
import { useAtomValue } from 'jotai';
import { Drawer } from 'expo-router/drawer';
import { Colors, FontSizes } from '../../shared/tokens';
import { MenuButton } from '../../features/layout/ui/MenuButton/MenuButton';
import { CustomDrawer } from '../../entities/layout/ui/CustomDrawer/CustomDrawer';

SplashScreen.preventAutoHideAsync();

export default function AppLayout() {
	const { access_token } = useAtomValue(loginAtom);

	if (!access_token) {
		return <Redirect href="/login" />;
	}

	return (
		<Drawer
			drawerContent={(props) => <CustomDrawer {...props} />}
			screenOptions={({ navigation }) => ({
				headerStyle: {
					backgroundColor: Colors.blackLight,
					shadowOpacity: 0,
					shadowColor: 'transparent',
				},
				headerLeft: () => {
					return <MenuButton navigation={navigation} />;
				},
				headerTitleStyle: {
					color: Colors.white,
					fontFamily: 'FiraSans',
					fontSize: FontSizes.fs20,
				},
				headerTitleAlign: 'center',
				sceneContainerStyle: { backgroundColor: Colors.black },
			})}
		>
			<Drawer.Screen name="index" options={{ title: 'My Courses' }} />
		</Drawer>
	);
}
