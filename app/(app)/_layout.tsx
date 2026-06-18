import { Redirect, SplashScreen, Stack } from 'expo-router';
import { loginAtom } from '../../entities/auth/model/auth.state';
import { useAtomValue } from 'jotai';

SplashScreen.preventAutoHideAsync();

export default function AppLayout() {
	const { access_token } = useAtomValue(loginAtom);

	if (!access_token) {
		return <Redirect href="/login" />;
	}

	return (
		<Stack>
			<Stack.Screen name="index" />
		</Stack>
	);
}
