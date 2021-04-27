import dayjs, { Dayjs } from 'dayjs';

class InspiringPerson {
	image: number | { uri: string };
	quotes: string[];
	description: string;
	dateOfBirth: Dayjs;
	dateOfDeath?: Dayjs;

	constructor(
		image: number | { uri: string },
		quotes: string[],
		description: string,
		dateOfBirth: Dayjs,
		dateOfDeath?: Dayjs
	) {
		this.quotes = quotes;
		this.description = description;
		this.dateOfBirth = dateOfBirth;
		this.dateOfDeath = dateOfDeath;
		this.image = image;
	}

	static fromString(person: string): InspiringPerson {
		const personObject = JSON.parse(person);
		return new InspiringPerson(
			personObject.image,
			personObject.quotes,
			personObject.description,
			dayjs(personObject.dateOfBirth),
			personObject.dateOfDeath ? dayjs(personObject.dateOfDeath) : undefined
		);
	}
}

export default InspiringPerson;
