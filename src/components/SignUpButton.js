import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class SignUpButton extends Component {
	render() {
		return (
			<div>
				<Link to="/signup">
					<button>Sign Up Now!</button>
				</Link>
			</div>
		);
	}
}

export default SignUpButton;
