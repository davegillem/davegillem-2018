import * as React from 'react';
import { formatDate } from 'utilities';

export const Education: React.StatelessComponent<IEducationData> = (props: IEducationData): JSX.Element => {
	return (
		<div
			className={`education eduType-${props.course_type}`}
			itemScope={true}
			itemType='http://schema.org/CourseInstance'
		>
			<div className='eduDate' itemProp='endDate' data-actualdate={props.completion}>
				{formatDate(props.completion, true)}
			</div>
			<div className='eduEvent' itemProp='subEvent' dangerouslySetInnerHTML={{ __html: props.title.rendered }} />
			<div className='eduProvider' itemProp='organizer'>
				<a href={props.location} target='_blank' rel='noopener noreferrer'>
					{props.provider}
				</a>
				<span className='eduAward' itemProp='award' v-if='props.award'>
					{' '}
					- {props.award}
				</span>
			</div>
			<div
				className='eduDescription'
				itemProp='about'
				dangerouslySetInnerHTML={{ __html: props.content.rendered }}
			/>
		</div>
	);
};
