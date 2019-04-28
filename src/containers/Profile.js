import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Profile extends Component {
	render() {
		return (
			<div>
				Public Profile Page <Link to="/my-profile">Edit Profile</Link>
			</div>
		);
	}
}

export default Profile;
