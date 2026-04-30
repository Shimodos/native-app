import { useState } from 'react';
import { StyleSheet, TextInput, View, TextInputProps, Pressable } from 'react-native';
import { Colors, Gaps, Radius } from '../tokens';
import EyeClosedIcon from '../../assets/icons/eye-closed';
import EyeOpenedIcon from '../../assets/icons/eye-opened';

export function Input({ ...props }: TextInputProps & { isPassword?: boolean }) {
	const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
	return (
		<View style={styles.form}>
			<>
				<TextInput
					style={styles.input}
					secureTextEntry={props.isPassword && !isPasswordVisible}
					placeholderTextColor={Colors.gray}
					{...props}
				/>
				{props.isPassword && (
					<Pressable style={styles.eyeIcon} onPress={() => setIsPasswordVisible((prev) => !prev)}>
						{isPasswordVisible ? <EyeOpenedIcon /> : <EyeClosedIcon />}
					</Pressable>
				)}
			</>
		</View>
	);
}

const styles = StyleSheet.create({
	form: {
		alignSelf: 'stretch',
		gap: Gaps.g16,
	},
	input: {
		borderColor: Colors.none,
		backgroundColor: Colors.violetDark,
		height: 58,
		borderRadius: Radius.r10,
		paddingHorizontal: 24,
		fontSize: 16,
		color: Colors.gray,
	},
	eyeIcon: {
		position: 'absolute',
		right: 20,
		top: 17,
	},
});
