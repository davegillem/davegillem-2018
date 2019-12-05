import * as React from 'react';

export const About: React.StatelessComponent<IPageData> = (props: IPageData): JSX.Element => {
	return (
		<div className='container' id='about' itemScope={true} itemType='http://schema.org/QAPage'>
			<div className='box'>
				<h2 className='title'>{props.title.rendered}</h2>
				<div id='about-content' dangerouslySetInnerHTML={{ __html: props.content.rendered }} />
			</div>
		</div>
	);
};
