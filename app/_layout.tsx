import { SplashScreen, Stack } from 'expo-router';
import { ThemeProvider, DarkTheme } from '@react-navigation/native';
import { Colors } from '../shared/tokens';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';

const navTheme = {
	...DarkTheme,
	colors: {
		...DarkTheme.colors,
		background: Colors.black,
		card: Colors.black,
	},
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const [loaded, error] = useFonts({
		FiraSans: require('../assets/fonts/FiraSans-Regular.ttf'),
		FiraSansSemiBold: require('../assets/fonts/FiraSans-SemiBold.ttf'),
	});

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	if (error) {
		console.error('Error loading fonts:', error);
		return null;
	}

	return (
		<View style={styles.root}>
			<SafeAreaProvider>
				<ThemeProvider value={navTheme}>
					<StatusBar style="light" />
					<RootStack />
				</ThemeProvider>
			</SafeAreaProvider>
		</View>
	);
}

function RootStack() {
	const insets = useSafeAreaInsets();

	return (
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
			<Stack.Screen name="login" />
			<Stack.Screen name="restore" />
		</Stack>
	);
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
		backgroundColor: Colors.black,
	},
});
