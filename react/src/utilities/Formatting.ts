import * as moment from 'moment';

export const cleanWPdate: IArrowFunction = (dateStr: string): Date => {
	const pattern: RegExp = /(\d{2})(\d{2})(\d{4})/;
	return new Date(dateStr.replace(pattern, '$3-$1-$2'));
};
export const humanizeDate: IArrowFunction = (value: string): string | undefined => {
	if (value.length) {
		const cleanDate: Date = cleanWPdate(value);
		return moment(cleanDate).fromNow();
	} else {
		return;
	}
};
export const formatDate: IArrowFunction = (value: string, clean?: boolean): string | undefined => {
	if (value.length) {
		const cleanDate: string | Date = clean ? cleanWPdate(value) : value;
		return moment(cleanDate).format('MM/DD/YYYY');
	} else {
		return;
	}
};
