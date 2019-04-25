import React, { Component } from 'react';
import Info from '../components/Info';
import SignupButton from '../components/SignUpButton';
import SignUpPage from './SignUpPage';

class Home extends Component {
	render() {
		return (
			<div>
				<Info />
				<SignupButton />
				{/* <SignUpPage /> */}
			</div>
		);
	}
}

export default Home;
