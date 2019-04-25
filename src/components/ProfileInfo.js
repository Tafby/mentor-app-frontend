import React, { Component } from 'react';
import RequestButton from './RequestButton';

class ProfileInfo extends Component {
	render() {
		return (
			<div>
				<p>NAME</p>
				<p>PIC</p>
				<p>DESCRIPTION</p>
				<RequestButton />
			</div>
		);
	}
}

export default ProfileInfo;
