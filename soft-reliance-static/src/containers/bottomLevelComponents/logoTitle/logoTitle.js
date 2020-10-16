import React from 'react';
import logo from 'images/logo.png';

import './logoTitle.css';

function logoTitle () {
	return (
		<div className="container">
			<img src={logo} className="img"/>
			<h1 className="dark-blue">Soft</h1>
			<h1 className="light-blue">Reliance Ltd</h1>
		</div>
	);
}

export default logoTitle;