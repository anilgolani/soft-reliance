import React from 'react';

import './infoIsland.css';

export default ({data}) => {
	console.log(data);
	return (
		<div className="info-island-container">
			<div className={data.floatRight ? 'info-island-right' : 'info-island-left'}>
				<h2>{data.heading}</h2>
				<p>{data.paragraph}</p>
				<a href={data.link} className="styledButton" >{data.ctaText}</a>
				<div className={data.floatRight ? 'right-float' : 'left-float'} />
			</div>
		</div>
	)
}