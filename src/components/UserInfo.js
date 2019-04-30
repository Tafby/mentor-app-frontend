import React, { Component } from 'react';
import { connect } from 'react-redux';
import updateProfile from '../actions/userActions';

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
			<div>
				<form onSubmit={this.handleSubmit}>
					<p>Fill out your profile</p>
					<label>First Name</label>
					<input type="text" name="first_name" value={this.state.first_name} onChange={this.handleChange} />
					<label>Last Name</label>
					<input value={this.state.last_name} name="last_name" onChange={this.handleChange} type="text" />
					<label>Location</label>
					<input value={this.state.location} name="location" onChange={this.handleChange} type="text" />
					<label>Interests</label>
					<input value={this.state.interests} name="interests" onChange={this.handleChange} type="text" />
					<input type="submit" placeholder="Save Changes" />
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		currentUser: state.auth.currentUser
	};
};
export default connect(mapStateToProps, { updateProfile })(UserInfo);
