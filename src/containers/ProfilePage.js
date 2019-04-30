import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class ProfilePage extends Component {
	// TODO: Fetch a user using {this.props.match.params.id}
	// TODO: Render the fetched user details, not current user
	// TODO: Only render Edit link if the fetched user id === currentUser.id
	render() {
		return (
			<div>
				<Card style={{ width: '25rem' }}>
					users_id: {this.props.currentUser.id} <Link to="/edit-profile">Edit Profile</Link>
					<Card.Img variant="top" src="holder.js/100px180" />
					<Card.Body>
						<Card.Title>
							{this.props.currentUser.first_name} {this.props.currentUser.last_name}
						</Card.Title>
						<Card.Text>
							Location: {this.props.currentUser.location}
							<br />
							Interests: {this.props.currentUser.interests}
						</Card.Text>
					</Card.Body>
				</Card>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	currentUser: state.auth.currentUser
});

export default connect(mapStateToProps)(ProfilePage);
