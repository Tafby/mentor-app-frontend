import React, { Component } from 'react';
import Info from '../components/Info';
import SignupButton from '../components/SignUpButton';
import Jumbotron from 'react-bootstrap/Jumbotron';

class Home extends Component {
	render() {
		return (
			<div>
				<Jumbotron>
					<h1>Welcome!</h1>
					<Info />
					<p>
						<SignupButton />
					</p>
				</Jumbotron>
			</div>
		);
	}
}

export default Home;
