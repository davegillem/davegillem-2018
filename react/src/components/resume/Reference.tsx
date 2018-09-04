import * as React from 'react';
import { humanizeDate } from 'utilities';

export const Reference: React.SFC<IReferenceData> = (props: IReferenceData): React.ReactElement<any> => {
	return (
		<div className="reference" itemProp="review" itemScope={true} itemType="http://schema.org/CreativeWork">
			<div
				className="refDetails"
				itemProp="reviewBody"
				dangerouslySetInnerHTML={{ __html: props.content.rendered }}
			/>
			<div className="refAuthor" itemProp="author">
				{props.title.rendered}
			</div>
			<div className="refTitle" itemProp="reviewAspect">
				{props.job_title}
			</div>
			<div className="refDate" itemProp="dateCreated" data-actualdate={props.date_provided}>
				{humanizeDate(props.date_provided)}
			</div>
		</div>
	);
};
