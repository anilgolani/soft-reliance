import React from 'react';
import logo from 'images/logo.png';

import './logoTitle.css';

function logoTitle () {
	return (
		<div className="container">
			<img src={logo} className="img"/>
			<h1>Soft Reliance</h1>
		</div>
	);
}

export default logoTitle;