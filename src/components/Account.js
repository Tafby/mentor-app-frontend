import React, { Component } from 'react';

class Account extends Component {
	render() {
		return (
			<div>
				<form>
					<label>Name</label>
					<input type="text" />
					<label>Email</label>
					<input type="text" />
					<label>Location</label>
					<input type="text" />
					<label>Bio</label>
					<input type="text" />
					<input type="submit" placeholder="Save Changes" />
				</form>
			</div>
		);
	}
}

export default Account;
