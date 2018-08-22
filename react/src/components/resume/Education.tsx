import * as React from 'react';

export interface IEducationProps {
	temp?: string;
}

export class Education extends React.Component<IEducationProps, any> {
	public render() {
		return (
			<div>
				{/* <div className='education' itemScope={true} itemType='http://schema.org/CourseInstance' className=''eduType-'+this.props.course_type'>
		<div className='eduDate' itemProp='endDate' data-actualdate='this.props.completion'>{this.props.completion | formatDate('true') }</div>
		<div className='eduEvent' itemProp='subEvent'>{this.props.title.rendered}</div>
		<div className='eduProvider' itemProp='organizer'>
			<a :href='this.props.location' target='_blank' rel='noopener noreferrer'>{{this.props.provider}}</a>
			<span className='eduAward' itemProp='award' v-if='this.props.award'> - {{this.props.award}}</span>
		</div>
		<div className='eduDescription' itemProp='about'>{this.props.content.rendered}</div>
	</div> */}
			</div>
		);
	}
}
