import React, { Component } from 'react';
import Info from '../components/Info';
import SignupButton from '../components/SignUpButton';

class Home extends Component {
	render() {
		return (
			<div>
				<Info />
				<SignupButton />
			</div>
		);
	}
}

export default Home;
