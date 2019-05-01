import React, { Component } from 'react';
import { connect } from 'react-redux';
import updateProfile from '../actions/userActions';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
class UserInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			first_name: '',
			last_name: '',
			location: '',
			interests: ''
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
		this.props.updateProfile(this.state, this.props.currentUser);
	};

	render() {
		return (
			<Form controlId="exampleForm.ControlInput1" onSubmit={this.handleSubmit}>
				<p>Fill out your profile</p>
				<Form.Label>First Name</Form.Label>
				<Form.Control
					type="text"
					name="first_name"
					value={this.state.first_name}
					onChange={this.handleChange}
					defaultValue={this.props.currentUser.first_name}
				/>
				<Form.Label>Last Name</Form.Label>
				<Form.Control
					value={this.state.last_name}
					name="last_name"
					onChange={this.handleChange}
					type="text"
					defaultValue={this.props.currentUser.last_name}
				/>
				<Form.Label>Location</Form.Label>
				<Form.Control
					value={this.state.location}
					name="location"
					onChange={this.handleChange}
					type="text"
					defaultValue={this.props.currentUser.location}
				/>
				<Form.Label>About me</Form.Label>
				<Form.Control
					value={this.state.interests}
					name="interests"
					onChange={this.handleChange}
					type="textarea"
					defaultValue={this.props.currentUser.interests}
				/>
				<Button type="submit" placeholder="Save Changes">
					Save Changes
				</Button>
			</Form>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		currentUser: state.auth.currentUser
	};
};
export default connect(mapStateToProps, { updateProfile })(UserInfo);
