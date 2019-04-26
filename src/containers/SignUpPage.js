import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signup } from '../actions/authActions';

class SignUpPage extends Component {
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

	handleSubmit = (event) => {
		event.preventDefault();
		if (this.props.signup(this.state)) {
			// this.props.history.push('/user_profile');
			// window.alert('Thank you for signing up!');
		} else {
			window.alert('An error occured while trying to create your account');
		}
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input
						value={this.state.email}
						onChange={this.handleChange}
						placeholder="Email"
						name="email"
						type="email"
					/>
					<input
						value={this.state.password}
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
		email: state.email,
		password: state.password
	};
};

export default (SignUpPage = withRouter(connect(mapStateToProps, { signup })(SignUpPage)));
