import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signup } from '../actions/authActions';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Redirect } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';

const mapStateToProps = (state) => {
	return {
		isAuthenticated: state.auth.isAuthenticated,
		currentUser: state.auth.currentUser,
		errors: state.auth.errors
	};
};

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
		this.props.signup(this.state);
	};

	render() {
		if (this.props.isAuthenticated) {
			return <Redirect to={`/profile/${this.props.currentUser.id}`} />;
		}

		return (
			<Row>
				<Col />
				<Col>
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
							<Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
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

export default connect(mapStateToProps, { signup })(SignUpPage);
