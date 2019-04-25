import React, { Component } from 'react';

class LoginPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			first_name: '',
			last_name: '',
			password: ''
		};
	}

	render() {
		return (
			<div>
				<form>
					<input label="email" value={this.state.email} type="email" />
					<input label="password" value={this.state.password} type="password" />
					<input type="submit" />
				</form>
			</div>
		);
	}
}

export default LoginPage;
