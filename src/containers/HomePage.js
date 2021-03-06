import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

class HomePage extends Component {
	render() {
		return (
			<div>
				<div
					className="jumbotron"
					style={{
						textAlign: 'center',
						backgroundColor: '#A1E8CC',
						color: 'black'
					}}
				>
					<h1>Welcome!</h1>
					<p>Looking for a mentor? You've come to the right place!</p>

					<p>
						<Link to="/signup">
							<Button style={{ borderColor: '#FAC9B8', backgroundColor: '#FAC9B8' }}>Sign Up Now!</Button>
						</Link>
					</p>
				</div>
			</div>
		);
	}
}

export default HomePage;
