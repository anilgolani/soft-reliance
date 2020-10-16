import React from 'react';

import './homepage.css';
import {companyInfo, aboutInfo, contactInfo} from './homepageData.js';
import InfoIsland from '../InfoIsland/infoIsland.js';


export default () => {
	return (
		<div className="homepage-container">
		    <InfoIsland data={companyInfo} />
		    <InfoIsland data={aboutInfo} />
		    <InfoIsland data={contactInfo} />
		</div>
	)
}