import React, { ComponentType } from 'react';
import { Control, Controller } from 'react-hook-form';
import { Image, StyleSheet, View } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

import Button from '../components/Button';
import QuoteItem from '../components/QuoteItem';
import { colors } from '../consts/colors';
import { strings } from '../consts/strings';
import { QuoteFields, Fields } from '../containers/InspiringPersonContainer';
import DatePicker from '../components/DatePicker';
import InspiringPerson from '../model/InspiringPerson';

interface Props {
	quoteControl: Control<QuoteFields>;
	control: Control<Fields>;
	quotes: string[];
	inspiringPerson: InspiringPerson | undefined;
	onAddQuoteButtonPress: () => void;
	onRemoveQouteButtonPress: (index: number) => void;
	onAddImageButtonPress: () => void;
	onAddNewPersonButtonPress: () => void;
	onEditPersonButtonPress: () => void;
	onDeletePersonButtonPress: () => void;
}

let qoutesLength = 0;

function InspiringPersonScreen({
	quoteControl,
	control,
	quotes,
	inspiringPerson,
	onAddQuoteButtonPress,
	onRemoveQouteButtonPress,
	onAddImageButtonPress,
	onAddNewPersonButtonPress,
	onEditPersonButtonPress,
	onDeletePersonButtonPress,
}: Props) {
	const qouteRef = React.useRef<ComponentType<TextInput>>(null);

	React.useEffect(() => {
		if (quotes.length > qoutesLength) {
			qouteRef.current?.clear();
		}
		qoutesLength = quotes.length;
	}, [quotes]);

	return (
		<>
			<ScrollView style={styles.container} contentContainerStyle={styles.wrapper}>
				<Controller
					control={control}
					name={'dateOfBirth'}
					rules={{ required: { value: true, message: strings.birth_of_date_error_message } }}
					defaultValue={inspiringPerson ? new Date(inspiringPerson.dateOfBirth.format('YYYY-MM-DD')) : ''}
					render={({ field: { onChange, value } }) => (
						<DatePicker onChange={onChange} value={value} text={strings.date_of_birth} />
					)}
				/>
				<Controller
					control={control}
					name={'dateOfDeath'}
					defaultValue={
						inspiringPerson && inspiringPerson.dateOfDeath
							? new Date(inspiringPerson.dateOfDeath.format('YYYY-MM-DD'))
							: ''
					}
					render={({ field: { onChange, value } }) => (
						<DatePicker onChange={onChange} value={value} text={strings.date_of_detah} />
					)}
				/>
				<Controller
					control={control}
					name={'description'}
					defaultValue={inspiringPerson?.description}
					rules={{ required: { value: true, message: strings.description_error_message } }}
					render={({ field: { onChange, value } }) => (
						<TextInput
							value={value}
							onChangeText={onChange}
							placeholder={strings.description}
							multiline
							underlineColorAndroid={colors.black}
						/>
					)}
				/>
				{quotes.map((quote, index) => (
					<QuoteItem key={index} quote={quote} onRemovePress={() => onRemoveQouteButtonPress(index)} />
				))}
				<Controller
					control={quoteControl}
					name={'quote'}
					defaultValue={''}
					rules={{ required: { value: true, message: strings.qoute_error_message } }}
					render={({ field: { onChange, value } }) => (
						<TextInput
							value={value}
							onChangeText={onChange}
							placeholder={strings.qoute}
							multiline
							underlineColorAndroid={colors.black}
							ref={qouteRef}
						/>
					)}
				/>
				<Button onPress={onAddQuoteButtonPress} text={strings.add_qoute} />
				<Controller
					control={control}
					name={'imageUri'}
					defaultValue={inspiringPerson?.image}
					rules={{ required: { value: true, message: strings.image_error_message } }}
					render={({ field: { value } }) => {
						return value ? (
							<Image
								source={typeof value === 'number' ? value : { uri: value.uri }}
								style={styles.imageWrapper}
								resizeMode="contain"
							/>
						) : (
							<View />
						);
					}}
				/>
				<View style={styles.imageButtonWrapper}>
					<Button onPress={onAddImageButtonPress} text={strings.add_image} />
				</View>
				{inspiringPerson ? (
					<View style={styles.buttonRow}>
						<Button onPress={onEditPersonButtonPress} text={strings.edit_person} />
						<Button onPress={onDeletePersonButtonPress} text={strings.remove_person} />
					</View>
				) : (
					<View style={styles.imageButtonWrapper}>
						<Button onPress={onAddNewPersonButtonPress} text={strings.add_person} />
					</View>
				)}
			</ScrollView>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.white,
		paddingVertical: 20,
		paddingHorizontal: 16,
	},
	wrapper: { paddingBottom: 50 },
	imageButtonWrapper: { marginTop: 16 },
	imageWrapper: { width: '100%', height: 200, marginTop: 10 },
	buttonRow: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 },
});

export default InspiringPersonScreen;
