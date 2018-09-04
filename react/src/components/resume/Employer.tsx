import * as React from 'react';
import { formatDate } from 'utilities';

let presentText: string;
const getDate = (dataStr: string, present?: boolean): string => {
	return present ? presentText : formatDate(dataStr) || '';
};

export const Employer: React.SFC<IEmployerProps> = (props: IEmployerProps): React.ReactElement<any> => {
	presentText = props.presentText;
	return (
		<div className="employer" itemProp="employee" itemScope={true} itemType="http://schema.org/EmployeeRole">
			<div className="jobDates">
				<span className="jobStart" itemProp="startDate" data-actualdate={props.start_date}>
					{getDate(props.start_date)}
				</span>
				<span className="jobEnd" itemProp="endDate" data-actualdate={props.end_date}>
					{getDate(props.end_date, Boolean(props.still_employed))}
				</span>
			</div>
			<div className="jobPosition" itemProp="roleName">
				{props.position}
			</div>
			<div className="jobEmployer" itemProp="name" itemScope={true} itemType="http://schema.org/Organization">
				{props.title.rendered}
			</div>
			<div className="jobAddress" itemProp="address" itemScope={true} itemType="http://schema.org/Organization">
				{props.location}
			</div>
			<div className="jobDescription" itemProp="description" />
			<div dangerouslySetInnerHTML={{ __html: props.content.rendered }} />
			{props.additional.length > 0 && (
				<div className="jobAddl" itemProp="alternateName">
					{props.additionalText} {props.additional}
				</div>
			)}
		</div>
	);
};
