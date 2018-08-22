import * as React from 'react';
import { formatDate } from 'utilities';

export interface IEmployerProps {
	title: string; // title.rendered
	location: string;
	position: string;
	startDate: string; // start_date
	additional: string;
	endDate: string; // end_date
	stillEmployed: boolean;
}

const getDate = (dataStr: string, present?: boolean): string => {
	return present ? 'Present' : formatDate(dataStr) || '';
};

export class Employer extends React.Component<IEmployerProps, any> {
	public render() {
		return (
			<div className="employer" itemProp="employee" itemScope={true} itemType="http://schema.org/EmployeeRole">
				<div className="jobDates">
					<span className="jobStart" itemProp="startDate" data-actualdate="this.props.startDate">
						{getDate(this.props.startDate)}
					</span>
					<span className="jobEnd" itemProp="endDate" data-actualdate="this.props.endDate">
						{getDate(this.props.endDate, this.props.stillEmployed)}
					</span>
				</div>
				<div className="jobPosition" itemProp="roleName">
					{this.props.position}
				</div>
				<div className="jobEmployer" itemProp="name" itemScope={true} itemType="http://schema.org/Organization">
					{this.props.title}
				</div>
				<div
					className="jobAddress"
					itemProp="address"
					itemScope={true}
					itemType="http://schema.org/Organization"
				>
					{this.props.location}
				</div>
				<div className="jobDescription" itemProp="description" />
				{this.props.content.rendered}
				{this.props.additional.length && (
					<div className="jobAddl" itemProp="alternateName">
						ADDITIONAL: {this.props.additional}
					</div>
				)}
			</div>
		);
	}
}
