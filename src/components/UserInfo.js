import React, { Component } from 'react';
import { connect } from 'react-redux';
import updateProfile from '../actions/userActions';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import toaster from 'toasted-notes';

class UserInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			first_name: this.props.currentUser.first_name,
			last_name: this.props.currentUser.last_name,
			location: this.props.currentUser.location,
			interests: this.props.currentUser.interests,
			picture: this.props.currentUser.picture
		};
	}

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	handleSubmit = (event) => {
		console.log('IN HANDLE SUBMIT', this.state);
		event.preventDefault();
		this.props.updateProfile(this.state, this.props.currentUser);
		// alert('Changes sent!');
		toaster.notify('Profile Updated', {
			duration: 2000
		});
	};

	render() {
		return (
			<Form controlId="exampleForm.ControlInput1" onSubmit={this.handleSubmit}>
				<Form.Label>First Name</Form.Label>
				<Form.Control
					type="text"
					name="first_name"
					value={this.state.first_name}
					onChange={this.handleChange}
					placeholder="First Name"
				/>
				<Form.Label>Last Name</Form.Label>
				<Form.Control
					value={this.state.last_name}
					name="last_name"
					onChange={this.handleChange}
					type="text"
					placeholder="Last Name"
				/>
				<Form.Label>Location</Form.Label>
				<Form.Control
					value={this.state.location}
					name="location"
					onChange={this.handleChange}
					type="text"
					placeholder="Where are you located?"
				/>
				<Form.Label>About me</Form.Label>
				<Form.Control
					value={this.state.interests}
					name="interests"
					onChange={this.handleChange}
					type="textarea"
					placeholder="Add your interests here"
				/>
				<Form.Label>Your Picture</Form.Label>
				<Form.Control
					value={this.state.picture}
					name="picture"
					onChange={this.handleChange}
					type="text"
					placeholder="Add Headshot URL Here"
				/>
				<br />
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
