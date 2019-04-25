import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signup } from '../actions/authActions';

class SignUpPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			first_name: '',
			last_name: '',
			password: ''
		};
	}

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	render() {
		return (
			<div>
				<form>
					<input
						value={this.state.email}
						onChange={this.handleChange}
						placeholder="Email"
						name="email"
						type="email"
					/>
					<input
						value={this.state.first_name}
						onChange={this.handleChange}
						placeholder="First Name"
						name="first_name"
						type="text"
					/>
					<input
						value={this.state.last_name}
						onChange={this.handleChange}
						placeholder="Last Name"
						name="last_name"
						type="text"
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
		first_name: state.first_name,
		last_name: state.last_name,
		password: state.password
	};
};

export default connect(mapStateToProps)(SignUpPage);
