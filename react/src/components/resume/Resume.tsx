import * as React from 'react';
import { Education, Employer, Reference } from './';

interface IResumeProps extends IPageData {
	textKeys: ITextKeys;
	education: IEducationData[];
	work: IEmployerData[];
	references: IReferenceData[];
}

export class Resume extends React.Component<IResumeProps, any> {
	constructor(props: IResumeProps) {
		super(props);
		this.state = {
			selectedItem: 'resumeSummary'
		};
	}
	public handleOptionChange = (e: any) => {
		this.setState({
			selectedItem: e.target.id
		});
	};
	public render() {
		return (
			<div>
				<div className="container accordionWrapper" itemScope={true} itemType="http://schema.org/ProfilePage">
					<div id="summary">
						<input
							checked={this.state.selectedItem === 'resumeSummary'}
							id="resumeSummary"
							name="resumeAccordion"
							onChange={this.handleOptionChange}
							type="radio"
						/>
						<label htmlFor="resumeSummary">{this.props.title.rendered}</label>
						<article className="smallPane">
							<p dangerouslySetInnerHTML={{ __html: this.props.content.rendered }} />
						</article>
					</div>
					<div id="employerList">
						<input
							checked={this.state.selectedItem === 'resumework'}
							id="resumework"
							name="resumeAccordion"
							onChange={this.handleOptionChange}
							type="radio"
						/>
						<label htmlFor="resumework">work</label>
						<article>
							{console.log('PROPS', this.props, this.props.work)}
							{this.props.work.map((employer: IEmployerData) => {
								return (
									<Employer
										key={employer.id}
										{...employer}
										presentText={this.props.textKeys.global_present}
										additionalText={this.props.textKeys.global_additional}
									/>
								);
							})}
						</article>
					</div>
					<div id="educationList">
						<input
							id="resumeEducation"
							name="resumeAccordion"
							type="radio"
							onChange={this.handleOptionChange}
						/>
						<label htmlFor="resumeEducation">Education / Certifications</label>
						<article>
							{this.props.education.map((cert: IEducationData) => {
								return <Education key={cert.id} {...cert} />;
							})}
						</article>
					</div>
					<div id="referenceList">
						<input
							checked={this.state.selectedItem === 'resumeReferences'}
							id="resumeReferences"
							name="resumeAccordion"
							onChange={this.handleOptionChange}
							type="radio"
						/>
						<label htmlFor="resumeReferences">References</label>
						<article>
							{this.props.references.map((ref: IReferenceData) => {
								return <Reference key={ref.id} {...ref} />;
							})}
						</article>
					</div>
				</div>
			</div>
		);
	}
}
