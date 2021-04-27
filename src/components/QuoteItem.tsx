import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
	quote: string;
	onRemovePress: () => void;
}

function QuoteItem({ quote, onRemovePress }: Props) {
	return (
		<View style={styles.container}>
			<View style={styles.textWrapper}>
				<Text>{quote}</Text>
			</View>
			<TouchableOpacity containerStyle={styles.removeIcon} onPress={onRemovePress}>
				<Image source={require('../../assets/images/close.png')} style={styles.image} />
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingVertical: 5,
		paddingLeft: 5,
	},
	removeIcon: { width: 16, height: 16, borderRadius: 8 },
	textWrapper: { flex: 1, marginRight: 8 },
	image: { width: '100%', height: '100%' },
});

export default QuoteItem;
