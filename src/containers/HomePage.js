import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Link } from 'react-router-dom';

class HomePage extends Component {
	render() {
		return (
			<div>
				<Jumbotron>
					<h1>Welcome!</h1>
					<p>INFORMATION ABOUT THIS WEBSITE GOES HERE</p>
					<p>
						<Link to="/signup">
							<Button>Sign Up Now!</Button>
						</Link>
					</p>
				</Jumbotron>
			</div>
		);
	}
}

export default HomePage;
