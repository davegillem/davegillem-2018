import * as moment from 'moment';

export const cleanWPdate = (dateStr: string): Date => {
	const pattern = /(\d{2})(\d{2})(\d{4})/;
	return new Date(dateStr.replace(pattern, '$3-$1-$2'));
};
export const humanizeDate = (value: string): string | undefined => {
	if (value.length) {
		const cleanDate: Date = cleanWPdate(value);
		return moment(cleanDate).fromNow();
	} else {
		return;
	}
};
export const formatDate = (value: string, clean?: string): string | undefined => {
	if (value.length) {
		const cleanDate: string | Date = clean === 'true' ? cleanWPdate(value) : value;
		return moment(cleanDate).format('MM/DD/YYYY');
	} else {
		return;
	}
};
