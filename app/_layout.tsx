import { Stack } from 'expo-router';
import { ThemeProvider, DarkTheme } from '@react-navigation/native';
import { Colors } from '../shared/tokens';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

const navTheme = {
	...DarkTheme,
	colors: {
		...DarkTheme.colors,
		background: Colors.black,
		card: Colors.black,
	},
};

export default function RootLayout() {
	const insets = useSafeAreaInsets();

	return (
		<ThemeProvider value={navTheme}>
			<SafeAreaProvider>
				<StatusBar style="light" />
				<Stack
					screenOptions={{
						contentStyle: {
							backgroundColor: Colors.black,
							paddingTop: insets.top,
							paddingBottom: insets.bottom,
							paddingLeft: insets.left,
							paddingRight: insets.right,
						},
						headerShown: false,
					}}
				>
					<Stack.Screen name="index" />
					<Stack.Screen name="restore" />
				</Stack>
			</SafeAreaProvider>
		</ThemeProvider>
	);
}
