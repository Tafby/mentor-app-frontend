import React, { Component } from 'react';
import { authenticate, authenticate2 } from '../actions/authActions';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Redirect } from 'react-router-dom';

const mapStateToProps = (state) => {
	return {
		currentUser: state.auth.currentUser,
		isAuthenticated: state.auth.isAuthenticated,
		errors: state.auth.errors
	};
};

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
		this.props.authenticate(this.state);
	};

	render() {
		if (this.props.isAuthenticated) {
			return <Redirect to={`/profile/${this.props.currentUser.id}`} />;
		}

		return (
			<Row>
				<Col />
				<Col>
					<h2>Please Login!</h2>
					{this.props.errors.length > 0 ? (
						<Alert variant="danger">{this.props.errors.toString()}</Alert>
					) : null}
					<Form onSubmit={this.handleSubmit}>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control
								value={this.state.email}
								onChange={this.handleChange}
								placeholder="Email"
								name="email"
								type="email"
							/>
						</Form.Group>

						<Form.Group controlId="formBasicPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control
								value={this.state.password}
								onChange={this.handleChange}
								placeholder="Password"
								name="password"
								type="password"
							/>
						</Form.Group>
						<Button variant="primary" type="submit">
							Submit
						</Button>
					</Form>
				</Col>
				<Col />
			</Row>
		);
	}
}

export default connect(mapStateToProps, { authenticate })(LoginPage);
