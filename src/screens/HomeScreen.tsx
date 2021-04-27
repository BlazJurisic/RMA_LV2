import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import InspiringPersonItem from '../components/InspiringPersonItem';
import { colors } from '../consts/colors';
import InspiringPreson from '../model/InspiringPerson';

interface Props {
	inspiringPresons: InspiringPreson[];
	onItemImagePress: (quote: string) => void;
	onPlusPress: () => void;
	onItemTextPress: (index: number) => void;
}

function HomeScreen({ inspiringPresons, onPlusPress, onItemImagePress, onItemTextPress }: Props) {
	return (
		<>
			<FlatList
				data={inspiringPresons}
				style={styles.container}
				contentContainerStyle={styles.container}
				keyExtractor={(_, i) => i.toString()}
				renderItem={({ item, index }) => (
					<InspiringPersonItem
						item={item}
						onImagePress={onItemImagePress}
						onTextPress={() => onItemTextPress(index)}
					/>
				)}
			/>
			<TouchableOpacity containerStyle={styles.addWrapper} onPress={onPlusPress}>
				<Image source={require('../../assets/images/plus.png')} style={styles.plusImage} />
			</TouchableOpacity>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.white,
	},
	addWrapper: {
		position: 'absolute',
		bottom: 35,
		right: 30,
		height: 40,
		width: 40,
		borderRadius: 20,
	},
	plusImage: { height: '100%', width: '100%' },
});

export default HomeScreen;
