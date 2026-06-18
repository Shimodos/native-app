import { Redirect, SplashScreen } from 'expo-router';
import { loginAtom } from '../../entities/auth/model/auth.state';
import { useAtomValue } from 'jotai';
import { Drawer } from 'expo-router/drawer';

SplashScreen.preventAutoHideAsync();

export default function AppLayout() {
	const { access_token } = useAtomValue(loginAtom);

	if (!access_token) {
		return <Redirect href="/login" />;
	}

	return (
		<Drawer>
			<Drawer.Screen name="index" />
		</Drawer>
	);
}
