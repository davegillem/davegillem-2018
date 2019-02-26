import * as React from 'react';

export const Home: React.StatelessComponent<IPageData> = (props: IPageData): JSX.Element => {
	return (
		<div className='container' id='tldr' itemScope={true} itemType='http://schema.org/AboutPage'>
			<div className='box'>
				<h2 className='title'>{props.title.rendered}</h2>
				<div id='tldr-content' dangerouslySetInnerHTML={{ __html: props.content.rendered }} />
			</div>
		</div>
	);
};
