import { SplashScreen, Stack } from 'expo-router';
// const navTheme = {
// 	...DarkTheme,
// 	colors: {
// 		...DarkTheme.colors,
// 		background: Colors.black,
// 		card: Colors.black,
// 	},
// };

SplashScreen.preventAutoHideAsync();

export default function AppLayout() {
	return (
		<Stack>
			<Stack.Screen name="index" />
		</Stack>
	);
}
