import React from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { StyleSheet, Text } from 'react-native';
import dayjs from 'dayjs';
import { formats } from '../consts/formats';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
	value: Date;
	text: string;
	onChange: (date: Date) => void;
}

function DatePicker({ value, text, onChange }: Props) {
	const [show, setShow] = React.useState(false);

	return (
		<TouchableOpacity onPress={() => setShow(true)} style={styles.container}>
			<Text>
				<Text>{`${text}: `}</Text>
				<Text>{value && dayjs(value).format(formats.standardDateTime)}</Text>
			</Text>
			{show && (
				<DateTimePicker
					testID="dateTimePicker"
					value={value ? value : new Date()}
					mode={'date'}
					is24Hour={true}
					display="default"
					onChange={(_, date) => {
						if (date) onChange(date);
						setShow(false);
					}}
				/>
			)}
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingLeft: 5,
		paddingTop: 8,
	},
});

export default DatePicker;
