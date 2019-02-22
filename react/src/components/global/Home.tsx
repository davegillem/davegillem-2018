import * as React from 'react';

export const Home: React.SFC<IPageData> = (props: IPageData): React.ReactElement<any> => {
	return (
		<div className='container' id='tldr' itemScope={true} itemType='http://schema.org/AboutPage'>
			<div className='box'>
				<h2 className='title'>{props.title.rendered}</h2>
				<div id='tldr-content' dangerouslySetInnerHTML={{ __html: props.content.rendered }} />
			</div>
		</div>
	);
};
