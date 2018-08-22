import * as React from 'react';

export interface IReferenceProps {
	temp?: string;
}

export class Reference extends React.Component<IReferenceProps, any> {
	public render() {
		return (
			<div className="reference" itemProp="review" itemScope={true} itemType="http://schema.org/CreativeWork">
				{/* <div className="refDetails" itemProp="reviewBody">
					{this.props.content.rendered}
				</div>
				<div className="refAuthor" itemProp="author">
					{this.props.title.rendered}
				</div>
				<div className="refTitle" itemProp="reviewAspect">
					{this.props.job_title}
				</div>
				<div className="refDate" itemProp="dateCreated" data-actualdate="this.props.date_provided">
					{this.props.date_provided | humanizeDate}
				</div> */}
			</div>
		);
	}
}
