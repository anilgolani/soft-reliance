import React from 'react';

import './homepage.css';
import CompanyInfoIsland from '../CompanyInfoIsland/companyInfoIsland.js';
import AboutInfoIsland from '../AboutInfoIsland/aboutInfoIsland.js';

export default () => {
	return (
		<div className="homepage-container">
		    <CompanyInfoIsland />
		    <AboutInfoIsland />
		    <CompanyInfoIsland />
		</div>
	)
}