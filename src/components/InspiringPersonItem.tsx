import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { formats } from '../consts/formats';
import { strings } from '../consts/strings';
import InspiringPerson from '../model/InspiringPerson';

interface Props {
	item: InspiringPerson;
	onImagePress: (quote: string) => void;
	onTextPress: () => void;
}

function InspiringPersonItem({ item, onImagePress, onTextPress }: Props) {
	return (
		<View style={styles.container}>
			<TouchableOpacity
				containerStyle={styles.imageWrapper}
				onPress={() => onImagePress(item.quotes[Math.floor(Math.random() * item.quotes.length)])}>
				<Image
					source={typeof item.image === 'number' ? item.image : { uri: item.image.uri }}
					resizeMode="stretch"
					style={styles.image}
					width={100}
					height={100}
				/>
			</TouchableOpacity>
			<TouchableOpacity containerStyle={styles.textContainer} onPress={onTextPress}>
				<Text>{`${strings.date_of_birth}: ${item.dateOfBirth.format(formats.standardDateTime)}`}</Text>
				{item.dateOfDeath ? (
					<Text>{`${strings.date_of_detah}: ${item.dateOfDeath.format(formats.standardDateTime)}`}</Text>
				) : null}
				<Text>{item.description}</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	textContainer: {
		flex: 1,
	},
	imageWrapper: { height: 110, width: '30%', paddingRight: 8 },
	image: { width: '100%', height: '100%' },
	container: {
		paddingVertical: 10,
		paddingHorizontal: 16,
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignSelf: 'baseline',
		alignItems: 'center',
		width: '100%',
	},
});

export default InspiringPersonItem;
