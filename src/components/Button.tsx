import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../consts/colors';

interface Props {
	text: string;
	onPress: () => void;
}

function Button({ text, onPress }: Props) {
	return (
		<TouchableOpacity onPress={onPress} containerStyle={styles.content}>
			<Text>{text}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	content: {
		paddingVertical: 10,
		paddingHorizontal: 15,
		minWidth: 150,
		borderRadius: 4,
		alignItems: 'center',
		justifyContent: 'center',
		alignSelf: 'center',
		backgroundColor: colors.green,
	},
});

export default Button;
