import React, { Component } from 'react';
// import { authenticate } from '../actions/authActions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loginUser } from '../actions/sessionActions';

class LoginPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		};
	}

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.actions.loginUser(this.state.credentials);
		// if (this.props.authenticate(this.state)) {
		// 	this.props.history.push('/Profile');
		// 	// window.alert('Thanks for logging in!');
		// } else {
		// 	window.alert('Something went wrong, please try again!');
		// }
	};
	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>Please Log In</label>
					<input
						value={this.state.credentials.email}
						onChange={this.handleChange}
						placeholder="Email"
						name="email"
						type="email"
					/>
					<input
						value={this.state.credentials.password}
						onChange={this.handleChange}
						placeholder="Password"
						name="password"
						type="password"
					/>
					<input type="submit" />
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isAuthenticating: state.auth.isAuthenticating
	};
};

export default connect(null, mapDispatchToProps(LoginPage));
